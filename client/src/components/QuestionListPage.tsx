import React, { useEffect, useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import TopQuestionList from './TopQuestionList';
import ButtonBase from './button/Button';
import {
  MainContainer,
  ContentContainer,
  ContentHeader,
  ContentButtonContainer,
} from '../style/QuestionList.styled';
import { QUESTION_PAGE_TITLE } from '../common/data/ConstantValue';

export const BlueLinkText = tw(Link)<LinkProps>`
  text-blue-text
  hover:text-blue
  visit:text-[#0061BD]
`;

interface QuestionListPageProps {
  test: string;
}

function QuestionListPage({ test }: QuestionListPageProps) {
  const [questionsPage, setQuestionsPage] = useState<boolean>(false);

  useEffect(() => {
    if (test === 'Main') {
      setQuestionsPage(true);
    }
    if (test === 'Questions') {
      setQuestionsPage(false);
    }
  }, [test]);

  return (
    <MainContainer>
      <ContentContainer>
        <ContentHeader>
          <h1 className="text-[28px] flex-1 mb-7">
            {QUESTION_PAGE_TITLE[test]}
          </h1>
          <ContentButtonContainer className="ml-3">
            <ButtonBase variant="default" size="md">
              Ask Question
            </ButtonBase>
          </ContentButtonContainer>
        </ContentHeader>
        <TopQuestionList questionsPage={questionsPage} />
        <h2 className="pt-4 mb-4 pr-2 text-[17px]">
          Looking for more? Browse the{' '}
          <BlueLinkText to="/questions">
            complete list of questions
          </BlueLinkText>
          , or popular tags. Help us answer unanswered questions.
        </h2>
      </ContentContainer>
    </MainContainer>
  );
}

export default QuestionListPage;
