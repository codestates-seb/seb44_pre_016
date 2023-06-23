import hljs from 'highlight.js';
import React, { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import { AnswerListItem } from '../common/data/detailData';

import { UserBox, Blank, UserName } from '../pages/QuestionDetail/QuestionDetail.styled';
import './AnswerItemStyle.css';
import VoteBox from './vote/VoteBox';

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

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.querySelectorAll("pre").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [contentRef, answer.answerContent]);
  
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
          <TextBtn>delete</TextBtn>
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