import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import QuestionItem from '../questionItem/QuestionItem';
import { QuestionContainer } from './QuestionList.styled';
import { getPaginatedData } from '../../common/data/test';
import { totalQuestionCntSet } from '../../redux/paginationReducer';
import Pagination from '../pagination/Pagination';
import SizePagination from '../pagination/SizePagination';

function AllQuestionList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const paginationedData = getPaginatedData(currentPage, pageSize);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(totalQuestionCntSet(paginationedData.pageInfo.totalElements));
  }, [pageSize]);

  useEffect(() => window.scroll(0, 0));

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
      <SizePagination setPageSize={setPageSize} />
    </>
  );
}

export default AllQuestionList;
