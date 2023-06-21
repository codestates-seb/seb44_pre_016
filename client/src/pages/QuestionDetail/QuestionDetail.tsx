import React, { useState, useEffect } from 'react';

import { DummyData, detailData } from "../../common/data/detailData"
import Button from '../../components/button/Button';
import AnswerItem, {TextBtn, Foot} from '../../components/AnswerItem';
import Editor from '../../components/editor/Editor'
import VoteBox from '../../components/vote/VoteBox';

import "highlight.js/styles/github.css";

import {
  AllContainer,
  TitleContainer,
  Title,
  ContentContainer,
  UserBox,
  UserName,
  Line,
  AllAnswer,
  Blank
} from "./QuestionDetail.styled";

const SLICE_DATE_NUMBER = -2;

export interface AnswerListItem {
  nickName: string;
  answerVoteCount: number;
  profileImage:string;
  content: string;
  createdAt: string;
}

interface QuestionDetailProps {
  questionId: number;
};

function QuestionDetail({ questionId }: QuestionDetailProps) {
  const [data, setData] = useState<DummyData | null>(null);
  const [answerContent, setAnswerContent] = useState('');
  const [newAnswerList, setNewAnswerList] = useState(data ? data.answerList : [])

  useEffect(() => {
    const selectedData = detailData.find(item => item.questionId === questionId);

    if (selectedData) {
      setData(selectedData);
      setNewAnswerList(selectedData.answerList);
    }
  }, [questionId]);

  const handleContentChange = (value: string) => {
    setAnswerContent(value);
  };

  const postAnswer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (`0${  today.getMonth() + 1}`).slice(SLICE_DATE_NUMBER);
    const day = (`0${  today.getDate() + 1}`).slice(SLICE_DATE_NUMBER);
    const hours = (`0${  today.getHours()}`).slice(SLICE_DATE_NUMBER); 
    const minutes = (`0${  today.getMinutes()}`).slice(SLICE_DATE_NUMBER);
    const seconds = (`0${  today.getSeconds()}`).slice(SLICE_DATE_NUMBER);

    const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

    const newAnswer: AnswerListItem = {
      "nickName": "kimcoding",
      "answerVoteCount": 10,
      "profileImage": "/images/profile.jpg",
      "content": answerContent,
      "createdAt": date,
    }
    
    setNewAnswerList(prevAnswerList => [...prevAnswerList, newAnswer]);
  }

  return (
    <AllContainer>
      {data ? (
        <>
          <div className='flex w-full'>
            <TitleContainer>
              <Title>{data.title}</Title>
              <p className='text-sm'>{data.createdAt}</p>
            </TitleContainer>
            <Button customStyle='h-5 w-36 p-[1px]'>
              ask question
            </Button>
          </div>
          <Line />
          <div className='flex w-full mb-10'>
            <VoteBox count={data.questionVoteCount}/>
            <ContentContainer>
              <div className='flex items-start min-h-[150px]'>{data.content}</div>
              <Foot>
                <TextBtn>delete</TextBtn>
                <UserBox>
                  <Blank />
                  <div className='flex grow-0 mr-10'>
                    <img
                      className="w-10 h-10 mr-3"
                      src={data.profileImage}
                      alt="프로필 사진"
                    />
                    <UserName>{data.nickName}</UserName>
                  </div>
                </UserBox>
              </Foot>
            </ContentContainer>
          </div>
          {(newAnswerList.length !== 0) && (newAnswerList) ? (
            <AllAnswer>
              <div className='font-medium text-xl mb-10'>{newAnswerList.length}{ newAnswerList.length === 1 ? ` Answer` : ` Answers` }</div>
              <div >
                {newAnswerList.map((answer,index) => (
                  <AnswerItem key={index} answer={answer} />
                ))}
              </div>
            </AllAnswer>
          ) : (
            <></>
          )}
          <div className='font-medium text-xl mb-5'>Your Answer</div>
          <Editor value={answerContent}onChange={handleContentChange}/>
          <Button 
            customStyle='h-10 mt-5' 
            onClick={postAnswer}>
              Post Your Answer
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </AllContainer>
  )
}

export default QuestionDetail;