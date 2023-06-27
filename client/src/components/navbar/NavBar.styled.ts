import tw from 'tailwind-styled-components';
import { Link, LinkProps } from 'react-router-dom';

export const NavBarContainer = tw.div`
  w-[164px]
  min-w-[164px]
`;

export const GrayLinkText = tw(Link)<LinkProps>`
  text-[#525960]
  hover:text-[#0C0D0E]
  text-[13px] 
`;

export const GrayConstText = tw.li`
  mt-3
  ml-2
  mb-1
  text-[11px]
  text-[#6A737C]
  leading-[3]
`;

export const NavItemContainer = tw.div`
  sticky
  w-auto
  pt-6
  mb-2
  top-[56px]
  h-[calc(100vh - 56px)]
`;
