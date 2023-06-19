import React, { useEffect, useState } from 'react';
import TopQuestionList from './TopQuestionList';
import ButtonBase from './button/Button';
import {
  MainContainer,
  ContentContainer,
  ContentHeader,
  ContentButtonContainer,
  BlueLinkText,
} from '../style/QuestionList.styled';
import { QUESTION_PAGE_TITLE } from '../common/data/ConstantValue';

interface QuestionListPageProps {
  page: string;
}

function QuestionListPage({ page }: QuestionListPageProps) {
  const [questionsPage, setQuestionsPage] = useState<boolean>(false);

  useEffect(() => {
    if (page === 'Main') {
      setQuestionsPage(true);
    }
    if (page === 'Questions') {
      setQuestionsPage(false);
    }
  }, [page]);

  return (
    <MainContainer>
      <ContentContainer>
        <ContentHeader>
          <h1 className="text-[28px] flex-1 mb-7">
            {QUESTION_PAGE_TITLE[page]}
          </h1>
          <ContentButtonContainer className="ml-3">
            <ButtonBase variant="default" size="md">
              Ask Question
            </ButtonBase>
          </ContentButtonContainer>
        </ContentHeader>
        <TopQuestionList questionsPage={questionsPage} />
        {questionsPage ? (
          <h2 className="pt-4 mb-4 pr-2 text-[17px]">
            Looking for more? Browse the
            <BlueLinkText to="/questions">
              complete list of questions
            </BlueLinkText>
            , or popular tags. Help us answer unanswered questions.
          </h2>
        ) : (
          <></>
        )}
      </ContentContainer>
    </MainContainer>
  );
}

export default QuestionListPage;
