import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import TopQuestionList from './TopQuestionList';
import Button from '../button/Button';
import {
  MainContainer,
  ContentContainer,
  ContentHeader,
  ContentButtonContainer,
  BlueLinkText,
} from './QuestionList.styled';
import { QUESTION_PAGE_TITLE } from '../../common/data/ConstantValue';
import AllQuestionList from './AllQuestionList';
import { RootState } from '../../redux/store';
import { QuestionListPageProps } from '../../common/interface/QuestionList.interface';
import SearchQuestionList from './SearchQuestionList';

function QuestionListPage({ page }: QuestionListPageProps) {
  const navigate = useNavigate();
  const totalQuestion = useSelector(
    (state: RootState) => state.PaginationReducer.totalQuestionCnt,
  );
  const searchKeyword = useSelector(
    (state: RootState) => state.SearchReducer.keyword,
  );
  const [questionsPage, setQuestionsPage] = useState<string>('');

  const handleNumberDivision = number => {
    return number.toLocaleString();
  };

  useEffect(() => {
    if (page === 'Main') {
      setQuestionsPage('Main');
    }
    if (page === 'Questions') {
      setQuestionsPage('Questions');
    }
    if (page === 'Search') {
      setQuestionsPage('Search');
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
            <Button onClick={() => navigate('/questions/ask')}>
              Ask Question
            </Button>
          </ContentButtonContainer>
        </ContentHeader>
        {page === 'Search' && (
          <div className="mb-6">
            <div className="mb-2 text-[12px] text-[#6A737C]">
              Results for {searchKeyword}
            </div>
            <div className="mb-2 text-[12px] text-[#6A737C]">
              Search options <span className="font-semibold">not deleted</span>
            </div>
          </div>
        )}
        <div className="flex-1 mb-3 text-[17px] items-center h-9">
          {page === 'Questions' &&
            `${handleNumberDivision(totalQuestion)} questions`}
          {page === 'Search' &&
            `${handleNumberDivision(totalQuestion)} results`}
        </div>
        {questionsPage === 'Main' && (
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
        )}
        {questionsPage === 'Questions' && <AllQuestionList />}
        {questionsPage === 'Search' && <SearchQuestionList />}
      </ContentContainer>
    </MainContainer>
  );
}

export default QuestionListPage;
