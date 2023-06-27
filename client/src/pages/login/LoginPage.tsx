import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import { userinfoLogin, userinfoGet } from '../../redux/userInfoReducer';

// 로그인가능한 아이디
// sss@gmail.com
// asdasd72
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialInfo: {
  email: string;
  password: string;
} = { email: '', password: '' };

function Login() {
  const navigation = useNavigate();
  const [loginInfo, setloginInfo] = useState(initialInfo);
  const [isinvalidEmail, setIsinvalidEmail] = useState(false);
  const [isinvalidPassword, setisinvalidPassword] = useState(false);
  const [loginMSG, setloginMSG] = useState('');
  const dispatch = useDispatch();
  // email,password 유효성 검사 정규식
  const regexEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const regexPassword = /^[a-zA-Z0-9]{7,}$/;

  // 이메일 input 작성할때마다 정규식

  const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloginInfo({ ...loginInfo, email: e.target.value });

    if (regexEmail.test(e.target.value)) {
      setIsinvalidEmail(true);
    } else {
      setIsinvalidEmail(false);
    }
  };
  /** password 값 설정 및 유효성검사 */
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloginInfo({ ...loginInfo, password: e.target.value });
    if (regexPassword.test(e.target.value)) {
      setisinvalidPassword(true);
    } else {
      setisinvalidPassword(false);
    }
  };

  const handleUserInfo = async (memberId: string) => {
    fetch(`${BASE_URL}/members/${memberId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        dispatch(
          userinfoGet({
            displayName: data.displayName,
            location: data.location,
            profileContent: data.profileContent,
            profileImage: data.profileImage,
            profileTitle: data.profileTitle,
          }),
        );
      })
      .catch(err => {
        console.log(err);
        navigation('/error');
      });
  };
  const handlelogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isinvalidEmail || !isinvalidPassword) {
      setloginMSG('이메일또는 패스워드가 유효하지 않습니다.');
      console.log(loginMSG);
      return;
    }
    fetch(`${BASE_URL}/members/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(loginInfo),
    })
      .then(data => {
        if (data.status === 201 || data.status === 200) {
          localStorage.setItem(
            'accessToken',
            data.headers.get('Authorization'),
          );
          localStorage.setItem('memberId', data.headers.get('memberId'));

          dispatch(
            userinfoLogin({
              memberId: data.headers.get('memberId'),
              accessToken: data.headers.get('Authorization'),
            }),
          );

          handleUserInfo(data.headers.get('memberId'));

          navigation('/');
        } else {
          console.log('요청이 실패했습니다.');
        }
      })
      .catch(err => {
        console.log(err);
        navigation('/error');
      });
  };

  return (
    <div className="w-[100%] h-[800px] flex justify-center items-center bg-[#f1f2f3] ">
      <div className="w-[250px]  ">
        {/* 아이콘 */}
        <div className="ta-center fs-title mx-auto m-4 flex justify-center">
          <a href="https://stackoverflow.com">
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>{' '}
          </a>
        </div>
        {/* 구글로그인 */}
        <button
          className=" w-[100%] border-solid  border-[1px] border-gray-300 bg-white p-2 rounded-[5px] hover:bg-gray-50 mb-3 text-[13px] "
          data-provider="google"
          data-oauthserver="https://accounts.google.com/o/oauth2/auth"
          data-oauthversion="2.0"
        >
          <svg
            aria-hidden="true"
            className="native svg-icon iconGoogle"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="#4285F4"
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
            ></path>
            <path
              fill="#34A853"
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
            ></path>
            <path
              fill="#FBBC05"
              d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
            ></path>
            <path
              fill="#EA4335"
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
            ></path>
          </svg>
          Login in with Google{' '}
        </button>
        {/* 폼 */}
        <form
          onSubmit={handlelogin}
          className="w-[100%]  flex flex-col p-[24px] bg-white shadow shadow-md shadow-lg shadow-lg border border-solid border-gray-200  "
        >
          {/* 이메일 인풋 */}
          <label htmlFor="email" className="capitalize font-bold text-[13px]">
            email
          </label>
          <input
            className="my-2 py-1 border border-solid border-gray-200 rounded-md"
            id="email"
            type="email"
            onChange={handleEmailValue}
          ></input>
          {/* 패스워드 */}
          <label
            htmlFor="password"
            className="capitalize font-bold mt-3 flex justify-between text-[13px]"
          >
            password
            <p className="text-[13px] text-blue font-normal">
              forgot password?
            </p>
          </label>
          <input
            type="password"
            id="password"
            className="my-2 py-1 border border-solid border-gray-200 rounded-md"
            onChange={handlePasswordValue}
          ></input>
          {/* 전송버튼 */}
          <Button customStyle="h-[40px] mt-2">log in</Button>
        </form>
        {/* 하단 글 */}
        <div className="mx-auto mt-6 text-[10px] flex flex-col items-center ">
          {/* 한줄 */}
          <div>
            Don’t have an account?{' '}
            <a
              href="/users/signup?ssrc=head&amp;returnurl=https%3a%2f%2fstackoverflow.com%2f"
              className="text-blue"
            >
              Sign up
            </a>
          </div>
          {/* 한줄 */}
          <div className="flex mt-3">
            <div className="mt12">
              Are you an employer?{' '}
              <a
                href="https://careers.stackoverflow.com/employer/login"
                className="text-blue"
              >
                Sign up on Talent{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
