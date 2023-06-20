import React from 'react';
import QuestionItem from '../QuestionItem';
import TopQuestionData from '../../common/data/data.json';
import { QuestionContainer } from '../../style/QuestionList.styled';

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
