import tw from 'tailwind-styled-components';

export const PaginationButton = tw.button`
  border
  rounded
  border-[#d6d9dc]
  px-2
  text-[13px]
  leading-[1.5625rem]
  hover:bg-[#d6d9dc]
  hover:border-[#BABFC4]
`;

export const PaginationContainer = tw.div`
  flex
  flex-wrap
  pt-5
  mb-5
  gap-x-1
`;

export const PaginationExtension = tw.p`
  border
  border-transparent
  px-2
  text-[13px]
  leading-[1.5625rem]
  align-baseline
`;
