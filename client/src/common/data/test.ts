import { useSelector } from 'react-redux';
import jsonData from './allQuestionList.json';
import { RootState } from '../../redux/store';

export const getPaginatedData = (page = 1, size = 15) => {
  // 데이터를 가져옵니다.
  const { data } = jsonData;

  // 페이지네이션을 적용하기 위해 인덱스를 계산합니다.
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  // 선택한 페이지와 크기에 맞게 페이지네이션을 적용하고 결과를 반환합니다.
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    pageInfo: {
      page,
      size,
      totalElements: data.length,
      totalPages: Math.ceil(jsonData.data.length / size),
    },
  };
};

export const getSearchPaginatedData = (
  page = 1,
  size = 15,
  types = 'title',
  keyword = '',
) => {
  // 데이터를 가져옵니다.
  const { data } = jsonData;

  const searchListData =
    types === 'title'
      ? data.filter(e => e.questionTitle.includes(keyword))
      : data.filter(e =>
          e.tags.some(e2 => {
            return e2.tagName.includes(keyword);
          }),
        );

  // 페이지네이션을 적용하기 위해 인덱스를 계산합니다.
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  // 선택한 페이지와 크기에 맞게 페이지네이션을 적용하고 결과를 반환합니다.
  const paginatedData = searchListData.slice(startIndex, endIndex);

  console.log(Math.ceil(searchListData.length / size));

  return {
    data: paginatedData,
    pageInfo: {
      page,
      size,
      totalElements: searchListData.length,
      totalPages: Math.ceil(searchListData.length / size),
    },
  };
};
