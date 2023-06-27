import axios from 'axios';
import hljs from 'highlight.js';
import React, { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';

import { UserBox, Blank, UserName } from '../pages/QuestionDetail/QuestionDetail.styled';
import './AnswerItemStyle.css';
import VoteBox from './vote/VoteBox';

export interface AnswerListItem {
  memberId: number;
  answerId: number;
  answerContent: string;
  profileImage: string;
  displayName: string;
  createdAt: string;
}

const Container = tw.div`
  flex
  flex-col
  w-full
  mb-10
`

export const Foot = tw.div`
  flex
  w-full
  mt-5
`

export const TextBtn = tw.div`
text-gray-text
hover:text-stone-700
`

function AnswerItem({answer}: {answer:AnswerListItem}) {
  const contentRef = useRef(null);

  const id = answer.answerId;

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.querySelectorAll("pre").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [contentRef, answer.answerContent]);

  const deleteAnswer = async () => {
    try{
      const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/questions/answer/${id}`,
      {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting the answer:", error);
      alert("Only writer can delete this answer.");
    }
  }
  
  return (
    <div className='flex w-full mb-5'>
      <VoteBox count={0}/>
      <Container>
        <div 
          className='mb-5 min-h-[150px]'
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: answer.answerContent }}
        />
        <Foot>
          <TextBtn onClick={deleteAnswer}>delete</TextBtn>
          <UserBox>
            <Blank />
            <div className='flex grow-0 mr-10'>
              <img
                className="w-10 h-10 mr-3"
                src={answer.profileImage}
                alt="프로필 사진"
              />
              <UserName>{answer.displayName}</UserName>
            </div>
          </UserBox>
        </Foot>
      </Container>
    </div>
  )
}

export default AnswerItem;