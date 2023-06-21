import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import Dropdown from './Dropdown';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef(null);

  const dropdownHandler = (): void => {
    setIsOpen(!isOpen);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const tagRegex = /\[+([^\]]+)\]+$/;

      const tagMatch = tagRegex.exec(inputValue);

      if (tagMatch && tagMatch[1]) {
        const tagName = `[${tagMatch[1].trim()}]`.replace(/\s+/g, '');
        console.log(`${tagName} tag`);
        setInputValue(tagName);
      } else {
        console.log(`${inputValue} keyword`);
        setInputValue(inputValue);
      }
    }
  };
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
          ref={inputRef}
          value={inputValue}
          onClick={dropdownHandler}
          onChange={e => setInputValue(e.target.value)}
          onKeyUp={handleEnter}
        ></input>
        <span className="absolute left-2 top-1.5 text-gray-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        {isOpen ? (
          <Dropdown dropdownHandler={dropdownHandler} inputRef={inputRef} />
        ) : null}
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
}

export default Header;
