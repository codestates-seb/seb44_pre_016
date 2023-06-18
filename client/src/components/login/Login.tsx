import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 288px;
  }
`;
const Form = styled.form`
  width: 100%;
  /* border:1px solid red; */
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  > input {
    margin: 2px 0;
    padding: 7px 9px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
  }
  > label {
    text-transform: capitalize;
    font-weight: bold;
  }
`;
const commonInput = css`
  width: 100%;
  margin-top: 5px;
  padding: 8px 9px;
  background-color: #fff;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 0px 4px black;
    border-color: blue;
  }
`;

const Input = styled.input`
  ${commonInput}
`;

const Login = () => {
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
          'https://polls.api-blueprint.org/member/login',
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
    <Container>
      <div>
        <Form>
          <label htmlFor="id">email</label>
          <Input
            id="email"
            type="email"
            value={loginInfo.email}
            onChange={event =>
              loginInfoSet({ ...loginInfo, email: event.target.value })
            }
            border-color={emptyEmail || loginFailed ? '#d0390e' : null}
            // focusBorder={emptyEmail || loginFailed ? '#d0390e' : null}
            // shadow={emptyEmail || loginFailed ? 'rgb(246,224,224)' : null}
          ></Input>
          <label htmlFor="password">password</label>
          <input type="text" id="password"></input>
          <Button variant="default" size="md">
            log in
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
