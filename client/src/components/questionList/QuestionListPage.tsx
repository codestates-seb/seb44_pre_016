import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TopQuestionList from './TopQuestionList';
import Button from '../button/Button';
import {
  MainContainer,
  ContentContainer,
  ContentHeader,
  ContentButtonContainer,
  BlueLinkText,
} from '../../style/QuestionList.styled';
import { QUESTION_PAGE_TITLE } from '../../common/data/ConstantValue';
import AllQuestionList from './AllQuestionList';
import { RootState } from '../../redux/store';
import { QuestionListPageProps } from '../../common/interface/QuestionList.interface';

function QuestionListPage({ page }: QuestionListPageProps) {
  const [questionsPage, setQuestionsPage] = useState<boolean>(false);
  const maxPages = useSelector((state: RootState) => state.PaginationReducer);

  const handleNumberDivision = number => {
    return number.toLocaleString();
  };

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
            <Button>Ask Question</Button>
          </ContentButtonContainer>
        </ContentHeader>
        <div className="flex-1 mb-3 text-[17px] items-center h-9">
          {handleNumberDivision(maxPages.totalPageCnt)} questions
        </div>
        {questionsPage ? (
          <>
            <TopQuestionList />
            <h2 className="pt-4 mb-4 pr-2 text-[17px]">
              Looking for more? Browse the{' '}
              <BlueLinkText to="/questions">
                complete list of questions
              </BlueLinkText>
              , or popular tags. Help us answer unanswered questions.
            </h2>
          </>
        ) : (
          <AllQuestionList />
        )}
      </ContentContainer>
    </MainContainer>
  );
}

export default QuestionListPage;
