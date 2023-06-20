import React, { useState, useEffect } from 'react';

import { DummyData, detailData } from "../../common/data/detailData"
import Button from '../../components/button/Button';
import AnswerItem from '../../components/AnswerItem';
import Editor from '../../components/editor/Editor'

import {
  AllContainer,
  TitleContainer,
  Title,
  ContentContainer,
  UserBox,
  Line,
  AllAnswer,
  Blank
} from "./QuestionDetail.styled";


interface QuestionDetailProps {
  questionId: number;
};

const QuestionDetail = ({ questionId }: QuestionDetailProps) => {
  const [data, setData] = useState<DummyData | null>(null);
  const [answerContent, setAnswerContent] = useState('');

  useEffect(() => {
    const selectedData = detailData.find(item => item.questionId === questionId);

    if (selectedData) {
      setData(selectedData);
    }
  }, [questionId]);

  const handleContentChange = (value: string) => {
    setAnswerContent(value);
  };

  const postAnswer = () => {
    console.log(answerContent)
  }

  return (
    <AllContainer>
      {data ? (
        <>
          <div className='flex w-full'>
            <TitleContainer>
              <Title>{data.title}</Title>
              {data.createdAt}
            </TitleContainer>
            <Button variant="default" size="sm" className='h-10 grow-0'>
              ask question
            </Button>
          </div>
          <Line />
          <ContentContainer>
            <div className='flex items-start'>{data.content}</div>
            <div>
              <UserBox>
                <Blank />
                <div className='flex grow-0 mr-10'>
                  <img
                    className="w-10 h-10 mr-3"
                    src={data.profileImage}
                    alt="프로필 사진"
                  />
                  {data.nickName}
                </div>
              </UserBox>
            </div>
          </ContentContainer>
          {data.answerList.length !== 0 ? (
            <AllAnswer>
              <div className='font-medium text-xl mb-10'>{data.answerList.length}{ data.answerList.length === 1 ? ` Answer` : ` Answers` }</div>
              <div>
                {data.answerList.map((answer,index) => (
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
            variant="default" 
            size="sm" 
            className='h-10 mt-5' 
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