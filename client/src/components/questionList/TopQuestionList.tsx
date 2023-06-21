import React from 'react';
import QuestionItem from '../questionItem/QuestionItem';
import TopQuestionData from '../../common/data/data.json';
import { QuestionContainer } from './QuestionList.styled';

function TopQuestionList() {
  return (
    <QuestionContainer>
      {TopQuestionData.map(
        (question, idx) =>
          idx < 50 && (
            <QuestionItem
              pageType="Top"
              questionProps={question}
              key={question.questionId}
            />
          ),
      )}
    </QuestionContainer>
  );
}

export default TopQuestionList;
