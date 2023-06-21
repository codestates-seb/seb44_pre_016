import hljs from 'highlight.js';
import React, { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import { AnswerListItem } from '../common/data/detailData';

import { UserBox, Blank, UserName } from '../pages/QuestionDetail/QuestionDetail.styled';
import './AnswerItemStyle.css';

const Container = tw.div`
  flex
  flex-col
  w-full
  mb-10
`

const Foot = tw.div`
  flex
  w-full
`

const TextBtn = tw.div`
text-gray-text
hover:text-stone-700
`

const AnswerItem = ({answer}: {answer:AnswerListItem}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.querySelectorAll("pre").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [contentRef, answer.content]);
  
  return (
    <Container>
      <div 
      className='mb-5'
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: answer.content }}
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
            <UserName>{answer.nickName}</UserName>
          </div>
        </UserBox>
      </Foot>
    </Container>
  )
}

export default AnswerItem;