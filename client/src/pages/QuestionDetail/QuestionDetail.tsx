import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import hljs from 'highlight.js';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


import Button from '../../components/button/Button';
import AnswerItem, {TextBtn, Foot} from '../../components/AnswerItem';
import Editor from '../../components/editor/Editor'
import VoteBox from '../../components/vote/VoteBox';

import "highlight.js/styles/github.css";

import { QuestionTagList, QuestionTagName } from '../../components/questionItem/QuestionItem.styled'

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

interface AnswerPostItem {
  memberId: number;
  answerId: number;
  answerContent: string;
}

function QuestionDetail() {
  const { questionId } = useParams();
  const contentRef = useRef(null);
  
  const [data, setData] = useState(null);
  const [questionContent, setQuestionContent] = useState('');
  const [answerContent, setAnswerContent] = useState('');
  const [newAnswerList, setNewAnswerList] = useState(data ? data.answerList : [])

  const memberId = useSelector(
    (state: RootState) => state.userInfoReducer.memberId,
  );

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/questions/${questionId}`,
        {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
        const serverData = response.data;
        
        const content = serverData.questionContent
        .replace(/\\\\/g, '\\')
        .replace(/\\"/g, '"')
        .replace(/\\n/g, '\n');

        setData(serverData);
        setQuestionContent(content);
        setNewAnswerList(serverData.answerList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [questionId]);

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.querySelectorAll("pre").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [contentRef, questionContent]);

  const handleContentChange = (value: string) => {
    setAnswerContent(value);
  };

  const postAnswer = async() => {

    const payload = {
      memberId,
      questionId: parseInt(questionId, 10),
      answerContent,
    };

    try{
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/questions/answer`, payload,
      {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });

      window.location.reload();
    } catch (error) {
      console.error("Error posting the answer:", error);
    }
  };

  return (
    <AllContainer>
      {data ? (
        <>
          <div className='flex w-full'>
            <TitleContainer>
              <Title>{data.questionTitle}</Title>
              <p className='text-sm'>{data.createdAt}</p>
            </TitleContainer>
            <Link to="/questions/ask">
              <Button customStyle='w-min h-8'>ask&nbsp;question</Button>
            </Link>
          </div>
          <Line />
          <div className='flex w-full mb-10'>
            <VoteBox count={0}/>
            <ContentContainer>
              <div 
              className='flex flex-col items-start min-h-[150px]'
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: questionContent }}
              />
              <ul>
                {data.questionTag.map(tag => (
                  <QuestionTagList key={tag.tagId}>
                    <QuestionTagName>{tag.tagName}</QuestionTagName>
                  </QuestionTagList>
                ))}
              </ul>
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
                    <UserName>{data.displayName}</UserName>
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
            customStyle='w-min h-8 mt-5' 
            onClick={postAnswer}>
              Post&nbsp;Your&nbsp;Answer
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </AllContainer>
  )
}

export default QuestionDetail;