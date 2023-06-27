import React from 'react';

import {
  FooterContainer,
  MenuList,
  LastList,
  MenuTitle,
  MenuItem,
  SmallLink
} from './Footer.styled'

function Footer() {
  return (
    <FooterContainer>
      <a href="https://stackoverflow.com" className='mr-10 my-3'>
        <svg aria-hidden="true" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"/><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"/></svg>
        &nbsp;
      </a>
      <MenuList>
        <MenuTitle>STACK OVERFLOW</MenuTitle>
        <MenuItem>Questions</MenuItem>
        <MenuItem>Help</MenuItem>
      </MenuList>
      <MenuList>
        <MenuTitle>PRODUCTS</MenuTitle>
        <MenuItem>Teams</MenuItem>
        <MenuItem>Advertising</MenuItem>
        <MenuItem>Collectives</MenuItem>
        <MenuItem>Talent</MenuItem>
      </MenuList>
      <MenuList>
        <MenuTitle>COMPANY</MenuTitle>
        <MenuItem>About</MenuItem>
        <MenuItem>Press</MenuItem>
        <MenuItem>Work&nbsp;Here</MenuItem>
        <MenuItem>Legal</MenuItem>
        <MenuItem>Privacy&nbsp;Policy</MenuItem>
        <MenuItem>Terms&nbsp;of&nbsp;Service</MenuItem>
        <MenuItem>Contact&nbsp;us</MenuItem>
        <MenuItem>Cookie&nbsp;Setting</MenuItem>
        <MenuItem>Cookie&nbsp;Policy</MenuItem>
      </MenuList>
      <MenuList>
        <MenuTitle>STACK EXCHANGE NETWORK</MenuTitle>
        <MenuItem>Technology</MenuItem>
        <MenuItem>Culture&nbsp;&&nbsp;recreation</MenuItem>
        <MenuItem>Life&nbsp;&&nbsp;arts</MenuItem>
        <MenuItem>Science</MenuItem>
        <MenuItem>Professional</MenuItem>
        <MenuItem>Business</MenuItem>
        <p></p>
        <MenuItem>API</MenuItem>
        <MenuItem>Data</MenuItem>
      </MenuList>
      <LastList>
        <div className='flex'>
          <SmallLink href='https://stackoverflow.blog/?blb=1&_ga=2.166599290.533282201.1687307418-72129839.1676437417'>blog</SmallLink>
          <SmallLink href='https://www.facebook.com/officialstackoverflow/'>Facebook</SmallLink>
          <SmallLink href='https://twitter.com/stackoverflow'>Twitter</SmallLink>
          <SmallLink href='https://www.linkedin.com/company/stack-overflow/'>LinkedIn</SmallLink>
          <SmallLink href='https://www.instagram.com/thestackoverflow/'>Instagram</SmallLink>
        </div>
        <div>
          <p className='text-xs text-[#9299A0]'>Site design / logo © 2023 Stack Exchange Inc; user</p>
          <p className='text-xs text-[#9299A0]'>contributions licensed under CC BY-SA.</p>
          <p className='text-xs text-[#9299A0]'>rev 2023.6.22.43505</p>
        </div>
      </LastList>
    </FooterContainer>
  );
}

export default Footer;
