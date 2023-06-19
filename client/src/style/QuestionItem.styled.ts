import tw from "tailwind-styled-components";

export const FlexWrap = tw.div`
  flex
  flex-wrap
`;

export const QuestionItemContainer = tw.div`
  p-4
  max-w-3xl
  flex
  min-h-6.875
  border-t
  border-[#d6d9dc]
`;

export const QuestionItemActive = tw(FlexWrap)`
  flex-col
  items-end
  justify-evenly
  w-28
  mr-4
  mb-1
  text-[13px]
`;

export const QuestionVote = tw.div` 
  text-black-nav-active
`;

export const QuestionAnswer = tw.div`
  px-1
  py-0.5
  rounded-m
`;

export const QuestionDataContainer = tw.div`
  flex-1
  text-start
`;

export const QuestionItemTitle = tw.div`
  text-lg
  text-blue-text
  hover:text-blue
  visit:text-[#0061BD]
  pr-6
  mb-1
`;

export const QuestionBodyContainer = tw(FlexWrap)`
  items-center
  justify-between
  gap-x-2
  gap-y-2
  text-xs
  tracking-wide
`;

export const QuestionTagList = tw.li`
  list-none
  inline
  mr-1
`;

export const QuestionTagName = tw.p`
  inline-flex
  py-1
  px-1.5
  bg-[#E1ECF4]
  hover:bg-[#D0E3F1]
  text-[#39739D]
`;

export const QuestionUserContainer = tw(FlexWrap)`
  justify-end
  ml-auto
  gap-x-1
`;

export const QuestionUserProfile = tw.img`
  w-4
  h-4
`;

export const QuestionUserName = tw.div`
  text-[#39739D]
  hover:text-blue
  visit:text-[#0061BD]
`;