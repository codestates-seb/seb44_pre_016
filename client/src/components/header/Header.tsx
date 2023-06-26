import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import Dropdown from './Dropdown';
import { searchSet } from '../../redux/searchReducer';
import {
  LOGOUT_ICON_POSITION,
  LOGOUT_LINK_LIST,
} from '../../common/data/ConstantValue';
// import { userinfoUPDATE } from '../../redux/userInfoReducer';
import { RootState } from '../../redux/store';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  // 임시저장
  localStorage.setItem('accessToken', JSON.stringify('fdfdfdfdfdf'));
  localStorage.setItem('memberId', JSON.stringify('4'));
  localStorage.setItem('displayName', JSON.stringify('레전드혜수님'));
  // dispatch(
  //   userinfoUPDATE({
  //     memberId: '4',
  //     accessToken: 'dfdf',
  //   }),
  // );
  //   // Key - "accessToken" 제거하기
  // localStorage.removeItem('accessToken');
  // // 로컬 스토리지 초기화
  // localStorage.clear();

  // const token = localStorage.getItem('accessToken');
  // const memberId = localStorage.getItem('memberId');
  // const displayname = localStorage.getItem('displayName')
  //   ? localStorage.getItem('displayName')
  //   : '혜수님짱멋있어';

  const token = useSelector(
    (state: RootState) => state.userInfoReducer.accessToken,
  );
  const memberId = useSelector(
    (state: RootState) => state.userInfoReducer.memberId,
  );

  const displayname = useSelector(
    (state: RootState) => state.userInfoReducer.displayName,
  );

  const handledropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogoutModal(false);
    window.location.reload();
    navigate('/');
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setIsLogoutModal(false);
    }
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const tagRegex = /\[+([^\]]+)\]+$/;
      const tagMatch = tagRegex.exec(inputValue);

      if (tagMatch && tagMatch[1]) {
        const tagName = `[${tagMatch[1].trim()}]`.replace(/\s+/g, '');
        dispatch(searchSet({ keyword: tagMatch[1], types: 'tagged' }));
        setInputValue(tagName);
      } else {
        dispatch(searchSet({ keyword: inputValue, types: 'title' }));
        setInputValue(inputValue);
      }
      navigate('/search');
    }
  };
  const handlemypage = () => {
    navigate(`/mypage/`);
  };

  return (
    <header className="sticky top-0 z-10 bg-white flex justify-center items-center w-full h-[50px] border-solid border-t-2 border-b border-t-orange-500 border-b-gray-300">
      <Link to="/" className=" h-full hover:bg-gray-300 mr-4">
        <div className="flex  h-full w-[120px] ">
          <img src={'/images/stack_Overflow_logo.svg'} alt="로고이미지" />
        </div>
      </Link>
      <span className=" px-3 py-1 mr-2 text-xs hover:bg-gray-300 rounded-2xl hover:cursor-pointer">
        Products
      </span>

      <div className="w-[900px] mr-4 relative ">
        <input
          className="border-2 w-[100%] h-7 pl-8 text-sm"
          type="search"
          placeholder="Search..."
          ref={inputRef}
          value={inputValue}
          onClick={handledropdown}
          onChange={e => setInputValue(e.target.value)}
          onKeyUp={handleEnter}
        ></input>
        <span className="absolute left-2 top-1.5 text-gray-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        {isOpen ? (
          <Dropdown Handledropdown={handledropdown} inputRef={inputRef} />
        ) : null}
      </div>
      {token ? (
        <div className=" flex flex-row items-center">
          <button
            onClick={() => {
              handlemypage();
            }}
            className=" flex flex-row items-center hover:bg-gray-300"
          >
            <img
              src="/images/profile.jpg"
              alt="프로필"
              className="w-[20px] h-[20px] rounded-lg m-2"
            />
            <p className="text-[10px]">{displayname}</p>
          </button>
          <button onClick={() => setIsLogoutModal(true)}>
            <img
              src="/images/logout.png"
              alt="로그아웃"
              className="w-[40px] h-[40px]"
            />
          </button>
        </div>
      ) : (
        <>
          <Link to="/login" className="flex align-middle ">
            <Button customStyle="bg-[#d8e5ff] border-[#83A6C4] text-[#2e5c8a] hover:bg-[#B9D2E8] active:bg-[#A6C4DF] mr-2 ">
              log in
            </Button>
          </Link>
          <Link to="/member/signup">
            <Button>sign up</Button>
          </Link>
        </>
      )}
      {isLogoutModal && (
        <button
          className="top-0 left-0 absolute w-screen h-screen bg-[#eeeeee] bg-opacity-50"
          onClick={closeModal}
        >
          <div className="top-50% left-50% bg-white p-6 max-w-[268px] shadow-logout-Shadow cursor-default">
            <ul className="flex flex-col text-left mb-4 pb-3 border-b text-[14px]">
              {LOGOUT_LINK_LIST.map(link => (
                <li className="flex group items-center" key={link}>
                  <div
                    className="m-1 w-4 h-4 bg-no-repeat bg-transparent bg-[length:16px] bg-icons"
                    style={{
                      backgroundPosition: LOGOUT_ICON_POSITION[link],
                    }}
                  ></div>
                  <div className="m-1 text-[#0074CC] group-hover:text-[#0A95FF]">
                    {link}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex mb-4 text-[12px]">Log out on all devices</div>
            <div className="flex">
              <Button onClick={handleLogOut} customStyle="m-0.5 p-2.5">
                Log out
              </Button>
              <Button
                onClick={() => setIsLogoutModal(false)}
                customStyle="m-0.5 p-2.5 bg-transparent border-transparent text-blue hover:bg-[#F0F8FF] hover:text-[#0061BD] focus:bg-[#F0F8FF] focus:text-[#0061BD] focus:shadow-[0_0_0_4px_rgba(0,116,204,0.15)] active:bg-[#CDE9FE] active:text-[#0074CC]"
              >
                Cancel
              </Button>
            </div>
            <div className="mt-8 text-[#6A737C] text-[12px] text-left">
              If you’re on a shared computer, remember to log out of your Open
              ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </div>
          </div>
        </button>
      )}
    </header>
  );
}

export default Header;
