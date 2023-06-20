import React, { useState } from 'react';
import {
  PaginationButton,
  PaginationContainer,
} from '../style/Pagination.styled';
import { SizePaginationProps } from '../common/interface/Pagination.interface';

function SizePagination({ setPageSize }: SizePaginationProps) {
  const SIZE_ARRAY = [15, 30, 50];
  const [size, setSize] = useState<number>(SIZE_ARRAY[0]);

  const handleSizeClick = (pageSize: number) => {
    setSize(pageSize);
    setPageSize(pageSize);
  };

  return (
    <PaginationContainer className="float-right">
      {SIZE_ARRAY.map(page => {
        return (
          <PaginationButton
            className={`${
              page === size
                ? 'text-white bg-orange-point hover:bg-orange-point border-transparent hover:border-transparent'
                : ''
            }`}
            onClick={() => {
              handleSizeClick(page);
            }}
            key={page}
          >
            {page}
          </PaginationButton>
        );
      })}
      <div className="flex px-2 text-[13px] items-center">per page</div>
    </PaginationContainer>
  );
}

export default SizePagination;
