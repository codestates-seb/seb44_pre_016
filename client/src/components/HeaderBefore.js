import React from 'react';
import "../index.css";
import logo from '../common/images/320px-Stack_Overflow_logo.svg.png';

function HeaderBefore() {
  return (
    <div className="flex px-32 w-full items-center py-2 border-solid border-t-2 border-b border-t-orange-500 border-b-gray-300">
      <img className='h-6' alt='Stack_Overflow_logo' src={logo}></img>
      <span className='mx-6 pt-2 text-sm'>Products</span>
      <div className='w-4/6 mr-6'>
        <input className='border-2 w-full h-7 pl-8' type='search'></input>
      </div>
      <span className='bg-gray-600 mr-1'>Log in</span>
      <span className='bg-red-600'>Sign up</span>
    </div>
  );
}

export default HeaderBefore;