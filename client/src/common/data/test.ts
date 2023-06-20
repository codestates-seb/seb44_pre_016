import jsonData from './allQuestionList.json';

const getPaginatedData = (page = 1, size = 15) => {
  // 데이터를 가져옵니다.
  const { data } = jsonData;

  // 페이지네이션을 적용하기 위해 인덱스를 계산합니다.
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  // 선택한 페이지와 크기에 맞게 페이지네이션을 적용하고 결과를 반환합니다.
  const paginatedData = data.slice(startIndex, endIndex);

  console.log(startIndex, endIndex);

  return {
    data: paginatedData,
    pageInfo: {
      page,
      size,
      totalElements: data.length,
      totalPages: jsonData.pageInfo.totalPages,
    },
  };
};

export default getPaginatedData;
