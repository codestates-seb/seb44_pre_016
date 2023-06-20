export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageInfo: PageInfo;
}

export interface SizePaginationProps {
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
}
