import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { AnswerListItem } from '../common/data/detailData';

import { UserBox, Blank } from '../pages/QuestionDetail/QuestionDetail.styled';

const Container = tw.div`
  flex
  flex-col
  w-full
  mb-10
`

const Content = tw.div`
mb-5
`

const Foot = tw.div`
  flex
  w-full
`

const TextBtn = tw.p`
text-stone-600
`

const AnswerItem = ({answer}: {answer:AnswerListItem}) => {
  return (
    <Container>
      <Content>{answer.content}</Content>
      <Foot>
        <div>
          <TextBtn>delete</TextBtn>
        </div>
        <UserBox>
          <Blank />
          <div className='flex grow-0 mr-10'>
            <img
              className="w-10 h-10 mr-3"
              src={answer.profileImage}
              alt="프로필 사진"
            />
            {answer.nickName}
          </div>
        </UserBox>
      </Foot>
    </Container>
  )
}

export default AnswerItem;