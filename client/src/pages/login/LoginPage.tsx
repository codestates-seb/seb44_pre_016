import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';

function Login() {
  const initialInfo: {
    email: string;
    password: string;
  } = { email: '', password: '' };
  const [loginInfo, loginInfoSet] = useState(initialInfo);
  const [emptyEmail, emptyEmailSet] = useState(false);
  const [emptyPassword, emptyPasswordSet] = useState(false);
  const [invalidEmail, invalidEmailSet] = useState(false);
  const [invalidPassword, invalidPasswordSet] = useState(false);
  const [loginFailed, loginFailedSet] = useState(false);
  const [login, setLogin] = useState(null);
  //  const [login, setLogin] = useRecoilState(loginState);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const handeLogin = async (email, password) => {
    // eslint-disable-next-line
    const emailRegex = // eslint-disable-next-line
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex = /^[A-Za-z\d!@#$%^&*()_+~\-=]{8,40}$/;

    // 비어있으면 empty메세지 출력
    if (email === '') emptyEmailSet(true);
    // 유효하지않으면(이메일 형식) invalid 메세지 출력
    else if (!emailRegex.test(email)) {
      emptyEmailSet(false);
      invalidEmailSet(true);
    }

    // 비어있으면 empty메세지 출력
    if (password === '') emptyPasswordSet(true);
    // 유효하지않으면(8자 이상) invalid 메세지 출력
    else if (!passwordRegex.test(password)) {
      emptyPasswordSet(false);
      invalidPasswordSet(true);
    }

    // login 전송 , 성공시 Common페이지 이동 및 loginstate true로 변경
    if (
      email &&
      password &&
      emailRegex.test(email) &&
      passwordRegex.test(password)
    ) {
      try {
        const response = await axios.post(
          'https://95a4-124-50-73-190.ngrok-free.app/bluelight/member/login',
          {
            username: email,
            password,
          },
        );

        // Extract the JWT token from the response and store it in state
        setToken(response.data.token);

        // Update the login state with the user's email and token
        setLogin({
          username: email,
          token: response.data.token,
        });

        // Navigate to the home page on successful login
        navigate('/');
      } catch (error) {
        // handle failed login
        console.error(error.response.data.message);
        loginFailedSet(true);
      }
    }
  };

  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[288px]">
        <form className="w-[100%] flex flex-col p-[24px] shadow shadow-md shadow-lg shadow-sm border border-solid border-gray-200  ">
          <label htmlFor="id" className="capitalize font-bold ">
            email
          </label>
          <input
            className="my-2 py-2 border border-solid border-gray-200 rounded-md"
            id="email"
            type="email"
            value={loginInfo.email}
            onChange={event =>
              loginInfoSet({ ...loginInfo, email: event.target.value })
            }
          ></input>
          <label htmlFor="password" className="capitalize font-bold ">
            password
          </label>
          <input
            type="text"
            id="password"
            className="my-2 py-2 border border-solid border-gray-200 rounded-md"
          ></input>
          <Button>log in</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
