import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import QuestionItem from '../questionItem/QuestionItem';
import { QuestionContainer } from './QuestionList.styled';
import { totalQuestionCntSet } from '../../redux/paginationReducer';
import Pagination from '../pagination/Pagination';
import SizePagination from '../pagination/SizePagination';
import { RootState } from '../../redux/store';
import { PageInfo } from '../../common/interface/Pagination.interface';
import { AllSearchQuestionItemData } from '../../common/interface/QuestionList.interface';

function SearchQuestionList() {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [searchQuestionData, setSearchQuestionData] =
    useState<AllSearchQuestionItemData[]>();
  const [obj, setObj] = useState<PageInfo>();
  const searchData = useSelector((state: RootState) => state.SearchReducer);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/search?page=${currentPage}&size=${pageSize}&${searchData.types}=${searchData.keyword}`,
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          },
        );
        setSearchQuestionData(response.data.data);
        dispatch(totalQuestionCntSet(response.data.totalCount));
        setObj(() => {
          return {
            totalCount: response.data.totalCount,
            totalPages: response.data.totalPage,
          };
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllData();
    setCurrentPage(1);
  }, [pageSize, searchData]);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <QuestionContainer>
        {searchQuestionData &&
          searchQuestionData.map(question => (
            <QuestionItem
              pageType="All_Search"
              questionProps={question}
              key={question.questionId}
            />
          ))}
      </QuestionContainer>
      {obj && (
        <>
          {obj.totalCount > 15 && (
            <>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageInfo={obj}
              />
              <SizePagination setPageSize={setPageSize} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchQuestionList;
