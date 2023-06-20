import { Link, LinkProps } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const QuestionContainer = tw.div`
  mb-7
  -ml-6
`;

export const MainContainer = tw.div`
  max-w-[1100px]
  p-6
  border-l
  border-[#d6d9dc]
  m-0 
`;

export const ContentContainer = tw.div`
  w-[calc(100%-300px)] m-0 p-0 
  min-w-[450px]
`;

export const ContentHeader = tw.div`
  flex
`;

export const ContentButtonContainer = tw.div`
  ml-3
`;

export const BlueLinkText = tw(Link)<LinkProps>`
  text-blue-text
  hover:text-blue
  visit:text-[#0061BD]
`;