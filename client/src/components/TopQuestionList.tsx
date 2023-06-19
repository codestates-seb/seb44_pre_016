import React from 'react';
import QuestionItem from './QuestionItem';
import data from '../common/data/data.json';
import { TopQuestionContainer } from '../style/QuestionList.styled';

export interface Tags {
  tagId: number;
  tagName: string;
}

export interface QuestionItemData {
  questionId: number;
  title: string;
  votes: number;
  answer: number;
  tags: Tags[];
  memberId: number;
  profileImage: string;
  nickName: string;
  createdAt: string;
}

interface TopQuestionListProps {
  questionsPage: boolean;
}

function TopQuestionList({ questionsPage }: TopQuestionListProps) {
  const listCnt = questionsPage ? 30 : 50;

  return (
    <TopQuestionContainer>
      {data.map(
        (e, idx) =>
          idx < listCnt && (
            <QuestionItem questionProps={e} key={e.questionId} />
          ),
      )}
    </TopQuestionContainer>
  );
}

export default TopQuestionList;
