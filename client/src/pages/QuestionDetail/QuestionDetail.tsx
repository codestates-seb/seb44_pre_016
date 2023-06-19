import React, { useState, useEffect } from 'react';

import { DummyData, detailData } from "../../common/data/detailData"

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
          <TitleContainer>
            <Title>{data.title}</Title>
            {data.createdAt}
          </TitleContainer>
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
            <div>{data.answer}{ data.answer === 1 ? ` Answer` : ` Answers` }</div>

          </AllAnswer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </AllContainer>
  )
}

export default QuestionDetail;