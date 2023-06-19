import React, { useState, useEffect } from 'react';

import { DummyData, detailData } from "../../common/data/detailData"
import Button from '../../components/button/Button';
import AnswerItem from '../../components/AnswerItem';

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

  useEffect(() => {
    const selectedData = detailData.find(item => item.questionId === questionId);

    if (selectedData) {
      setData(selectedData);
    }
  }, [questionId]);

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
          <AllAnswer>
            <div className='font-medium text-xl mb-10'>{data.answer}{ data.answer === 1 ? ` Answer` : ` Answers` }</div>
            <div>
              {data.answerList.map((answer,index) => (
                <AnswerItem key={index} answer={answer} />
              ))}
            </div>
          </AllAnswer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </AllContainer>
  )
}

export default QuestionDetail;