import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import {
  PaginationButton,
  PaginationContainer,
  PaginationExtension,
} from './Pagination.styled';
import { PaginationProps } from '../../common/interface/Pagination.interface';
import { RootState } from '../../redux/store';

const CHANGE_PAGE_LIST_CNT = 4;
const PAGE_BLOCK_SIZE = 5;

function Pagination({
  currentPage,
  setCurrentPage,
  pageInfo,
}: PaginationProps) {
  const navigate = useNavigate();
  const [paginationList, setPaginationList] = useState<number[]>([]);
  const searchKeyword = useSelector(
    (state: RootState) => state.SearchReducer.keyword,
  );

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
      if (pageInfo.totalPages <= PAGE_BLOCK_SIZE) {
        return new Array(pageInfo.totalPages).fill(0).map((_, idx) => idx + 1);
      }
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
  }, [currentPage, pageInfo.size, searchKeyword]);

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
        {currentPage >= PAGE_BLOCK_SIZE &&
          PAGE_BLOCK_SIZE !== pageInfo.totalPages && (
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
        {currentPage <
          pageInfo.totalPages - (pageInfo.totalPages % PAGE_BLOCK_SIZE) &&
          !(pageInfo.totalPages <= PAGE_BLOCK_SIZE) && (
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
