import React, { ReactNode } from 'react';
import { IoEarth } from 'react-icons/io5';
import { useMatch } from 'react-router-dom';
import {
  GrayConstText,
  GrayLinkText,
  NavBarContainer,
  NavItemContainer,
} from './NavBar.styled';

const ACTIVE_TW_CLASS = 'bg-[#F1F2F3] border-r-[3px] border-orange-point';

function NavBar() {
  const matchHome = useMatch('/');
  const matchQuestions = useMatch('/questions');
  const matchSearch = useMatch('/search');
  const questionsOrSearch = matchQuestions || matchSearch;

  const renderNavItem = (
    match: ReturnType<typeof useMatch>,
    children: ReactNode,
  ) => {
    return <li className={`${match && ACTIVE_TW_CLASS}`}>{children}</li>;
  };

  return (
    <NavBarContainer>
      <NavItemContainer>
        <ul>
          {renderNavItem(
            matchHome,
            <GrayLinkText
              className={`p-1 pl-2 leading-[2.5] ${
                matchHome && 'font-bold text-[#0C0D0E]'
              }`}
              to="/"
            >
              Home
            </GrayLinkText>,
          )}
          <li>
            <ul>
              <GrayConstText>PUBLIC</GrayConstText>
              {renderNavItem(
                questionsOrSearch,
                <GrayLinkText
                  className={`leading-5 flex -mt-1 p-2 pr-1.5 ${
                    questionsOrSearch && 'font-bold text-[#0C0D0E]'
                  }`}
                  to="/questions"
                >
                  <IoEarth size={'18px'} className="mr-1" />
                  <span className="leading-[calc(17/13)] text-current">
                    Questions
                  </span>
                </GrayLinkText>,
              )}
            </ul>
          </li>
        </ul>
      </NavItemContainer>
    </NavBarContainer>
  );
}

export default NavBar;
