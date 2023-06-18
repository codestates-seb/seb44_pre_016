import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import logo from '../common/images/320px-Stack_Overflow_logo.svg.png';

function HeaderBefore() {
  return (
    <div className="flex pl-32 pr-32 w-full items-center py-2 border-solid border-t-2 border-b border-t-orange-500 border-b-gray-300">
      <img className='h-6 pb-1 mr-2' alt='Stack_Overflow_logo' src={logo}></img>
      <span className='px-3 py-1 mr-2 text-xs hover:bg-gray-300 rounded-2xl hover:cursor-pointer'>Products</span>
      <div className='w-11/12 mr-4 relative'>
        <input className='border-2 w-full h-7 pl-8 text-sm' type='search' placeholder='Search...'></input>
        <span className='absolute left-2 top-1.5 text-gray-500'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
      </div>
      <button className=' mr-1 w-20 h-7 text-sm rounded-sm text-login-text-color bg-login-btn-color border-login-text-color border-solid border active:scale-95 active:shadow-lg hover:bg-login-hover-color'>Log in</button>
      <button className=' w-20 h-7 text-sm px-2 rounded-sm text-white bg-signup-btn-color border-signup-btn-color border-solid border active:scale-95 active:shadow-lg hover:bg-signup-hover-color'>Sign up</button>
    </div>
  );
}
// 폰트어썸 npm install
// logo 이미지
// 커스텀 색은 tailwind.config.js에서 관리중
// 버튼컴포넌트 완성시 버튼에 넣어주기
// products 누를시 나오는 박스이외에 구현 완료

export default HeaderBefore;