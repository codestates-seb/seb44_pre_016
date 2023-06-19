import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import QuestionItem from './QuestionItem';
import { TopQuestionContainer } from '../style/QuestionList.styled';
import getPaginatedData from '../common/data/test';
import { totalPageCntSet } from '../redux/test';

export interface Tags {
  tagId: number;
  tagName: string;
}

export interface AllQuestionItemData {
  questionId: number;
  questionTitle: string;
  questionContent: string;
  questionVoteCount: number;
  answer: number;
  tags: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}

function AllQuestionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 15;
  const [paginationList, setPaginationList] = useState<number[]>([]);
  const paginationedData = getPaginatedData(currentPage, pageSize);

  useEffect(() => {
    dispatch(totalPageCntSet(paginationedData.pageInfo.totalPages));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    setPaginationList(() => {
      if (currentPage <= 4) {
        return new Array(5).fill(0).map((_, idx) => idx + 1);
      }
      if (currentPage >= paginationedData.pageInfo.totalPages - 3) {
        return new Array(5)
          .fill(0)
          .map((_, idx) => idx + paginationedData.pageInfo.totalPages - 4);
      }
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    });
  }, [currentPage]);

  return (
    <>
      <TopQuestionContainer>
        {paginationedData.data.map(e => (
          <QuestionItem pageType="All" questionProps={e} key={e.questionId} />
        ))}
      </TopQuestionContainer>
      <div className="flex flex-wrap pt-5 mb-5 gap-x-1">
        {currentPage > 1 && (
          <button
            className="border rounded
            border-[#d6d9dc] px-2 text-[13px] leading-[1.5625rem]"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              navigate(`/questions?page=${currentPage - 1}`);
            }}
          >
            Prev
          </button>
        )}
        {currentPage >= 5 && (
          <>
            <button
              className="border rounded
            border-[#d6d9dc] px-2 text-[13px] leading-[1.5625rem]"
              onClick={() => {
                setCurrentPage(1);
                navigate(`/questions?page=${1}`);
              }}
            >
              1
            </button>
            <p className="border border-transparent px-2 text-[13px] leading-[1.5625rem] align-baseline">
              ...
            </p>
          </>
        )}
        {paginationList &&
          paginationList.map(e => {
            return (
              <button
                className={`border rounded px-2 text-[13px] leading-[1.5625rem] 
                border-[#d6d9dc] ${
                  e === currentPage ? 'text-white bg-orange-point' : ''
                }`}
                onClick={() => {
                  setCurrentPage(e);
                  navigate(`/questions?page=${e}`);
                }}
                key={e}
              >
                {e}
              </button>
            );
          })}
        {currentPage <= paginationedData.pageInfo.totalPages - 5 && (
          <>
            <p className="border border-transparent px-2 text-[13px] leading-[1.5625rem] align-baseline">
              ...
            </p>
            <button
              className="border rounded
            border-[#d6d9dc] px-2 text-[13px] leading-[1.5625rem]"
              onClick={() => {
                setCurrentPage(paginationedData.pageInfo.totalPages);
                navigate(
                  `/questions?page=${paginationedData.pageInfo.totalPages}`,
                );
              }}
            >
              {paginationedData.pageInfo.totalPages}
            </button>
          </>
        )}
        {currentPage < paginationedData.pageInfo.totalPages && (
          <button
            className="border rounded
            border-[#d6d9dc] px-2 text-[13px] leading-[1.5625rem]"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              navigate(`/questions?page=${currentPage + 1}`);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default AllQuestionList;
