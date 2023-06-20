import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white flex justify-center items-center w-full h-[50px] border-solid border-t-2 border-b border-t-orange-500 border-b-gray-300">
      <Link to="/" className=" h-full hover:bg-gray-300 mr-4">
        <div className="flex  h-full w-[120px] ">
          <img src={'/images/stack_Overflow_logo.svg'} alt="로고이미지" />
        </div>
      </Link>
      <span className=" px-3 py-1 mr-2 text-xs hover:bg-gray-300 rounded-2xl hover:cursor-pointer">
        Products
      </span>

      <div className="w-[650px] mr-4 relative ">
        <input
          className="border-2 w-[100%] h-7 pl-8 text-sm"
          type="search"
          placeholder="Search..."
        ></input>
        <span className="absolute left-2 top-1.5 text-gray-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <Link to="/login" className="flex align-middle ">
        <Button customStyle="bg-[#d8deff] border-[#83A6C4] text-[#182f44] hover:bg-[#B9D2E8] active:bg-[#A6C4DF] mr-2 ">
          log in
        </Button>
      </Link>
      <Link to="/member/signup">
        <Button>sign up</Button>
      </Link>
      {/* </div> */}
    </header>
  );
};

export default Header;
