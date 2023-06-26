import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import QuestionItem from '../questionItem/QuestionItem';
import { QuestionContainer } from './QuestionList.styled';
import { totalQuestionCntSet } from '../../redux/paginationReducer';
import Pagination from '../pagination/Pagination';
import SizePagination from '../pagination/SizePagination';
import { AllSearchQuestionItemData } from '../../common/interface/QuestionList.interface';
import { PageInfo } from '../../common/interface/Pagination.interface';

function AllQuestionList() {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [allQuestionData, setAllQuestionData] = useState<
    AllSearchQuestionItemData[]
  >([]);
  const [obj, setObj] = useState<PageInfo>();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/questions?page=${currentPage}&size=${pageSize}`,
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          },
        );
        setAllQuestionData(response.data.data);
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
  }, [pageSize]);

  useEffect(() => window.scroll(0, 0));

  return (
    <>
      <QuestionContainer>
        {allQuestionData.map(question => (
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

export default AllQuestionList;
