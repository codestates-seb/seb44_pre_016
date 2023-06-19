import React from 'react';
import QuestionItem from './QuestionItem';
import TopQuestionData from '../common/data/data.json';
import { TopQuestionContainer } from '../style/QuestionList.styled';

export interface Tags {
  tagId: number;
  tagName: string;
}

export interface TopQuestionItemData {
  questionId: number;
  questionTitle: string;
  questionVoteCount: number;
  answer: number;
  tags: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}

function TopQuestionList() {
  return (
    <TopQuestionContainer>
      {TopQuestionData.map(
        (e, idx) =>
          idx < 50 && (
            <QuestionItem pageType="Top" questionProps={e} key={e.questionId} />
          ),
      )}
    </TopQuestionContainer>
  );
}

export default TopQuestionList;
