import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionItem from '../questionItem/QuestionItem';
import { QuestionContainer } from './QuestionList.styled';
import { getSearchPaginatedData } from '../../common/data/test';
import { totalQuestionCntSet } from '../../redux/paginationReducer';
import Pagination from '../pagination/Pagination';
import SizePagination from '../pagination/SizePagination';
import { RootState } from '../../redux/store';

function SearchQuestionList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const searchData = useSelector((state: RootState) => state.SearchReducer);
  const paginationedData = getSearchPaginatedData(
    currentPage,
    pageSize,
    searchData.types,
    searchData.keyword,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchData, pageSize]);

  useEffect(() => {
    dispatch(totalQuestionCntSet(paginationedData.pageInfo.totalElements));
  }, [pageSize, searchData]);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <QuestionContainer>
        {paginationedData.data.map(question => (
          <QuestionItem
            pageType="All_Search"
            questionProps={question}
            key={question.questionId}
          />
        ))}
      </QuestionContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageInfo={paginationedData.pageInfo}
      />
      {paginationedData.pageInfo.totalElements > 15 && (
        <SizePagination setPageSize={setPageSize} />
      )}
    </>
  );
}

export default SearchQuestionList;
