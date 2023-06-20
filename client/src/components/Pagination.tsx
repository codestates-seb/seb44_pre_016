import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  PaginationButton,
  PaginationContainer,
  PaginationExtension,
} from '../style/Pagination.styled';
import { PaginationProps } from '../common/interface/Pagination.interface';

const CHANGE_PAGE_LIST_CNT = 4;
const PAGE_BLOCK_SIZE = 5;

function Pagination({
  currentPage,
  setCurrentPage,
  pageInfo,
}: PaginationProps) {
  const navigate = useNavigate();
  const [paginationList, setPaginationList] = useState<number[]>([]);

  const createPageList = (current: number): number[] => {
    return Array.from({ length: PAGE_BLOCK_SIZE }, (_, idx) => {
      return current - 2 + idx;
    });
  };

  const handleButtonClick = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  const updatePaginationList = (): number[] => {
    if (currentPage <= CHANGE_PAGE_LIST_CNT) {
      return new Array(PAGE_BLOCK_SIZE).fill(0).map((_, idx) => idx + 1);
    }
    if (currentPage >= pageInfo.totalPages - 3) {
      return new Array(PAGE_BLOCK_SIZE)
        .fill(0)
        .map((_, idx) => idx + pageInfo.totalPages - CHANGE_PAGE_LIST_CNT);
    }
    return createPageList(currentPage);
  };

  useEffect(() => {
    setPaginationList(() => updatePaginationList());
  }, [currentPage]);

  return (
    <>
      <PaginationContainer className="float-left">
        {currentPage > 1 && (
          <PaginationButton
            onClick={() => {
              handleButtonClick(currentPage - 1);
            }}
          >
            Prev
          </PaginationButton>
        )}
        {currentPage >= PAGE_BLOCK_SIZE && (
          <>
            <PaginationButton
              onClick={() => {
                handleButtonClick(1);
              }}
            >
              1
            </PaginationButton>
            <PaginationExtension>...</PaginationExtension>
          </>
        )}
        {paginationList &&
          paginationList.map(page => {
            return (
              <PaginationButton
                className={`${
                  page === currentPage
                    ? 'text-white bg-orange-point hover:bg-orange-point border-transparent hover:border-transparent'
                    : ''
                }`}
                onClick={() => {
                  handleButtonClick(page);
                }}
                key={page}
              >
                {page}
              </PaginationButton>
            );
          })}
        {currentPage <= pageInfo.totalPages - PAGE_BLOCK_SIZE && (
          <>
            <PaginationExtension>...</PaginationExtension>
            <PaginationButton
              onClick={() => {
                handleButtonClick(pageInfo.totalPages);
              }}
            >
              {pageInfo.totalPages}
            </PaginationButton>
          </>
        )}
        {currentPage < pageInfo.totalPages && (
          <PaginationButton
            onClick={() => {
              handleButtonClick(currentPage + 1);
            }}
          >
            Next
          </PaginationButton>
        )}
      </PaginationContainer>
    </>
  );
}

export default Pagination;
