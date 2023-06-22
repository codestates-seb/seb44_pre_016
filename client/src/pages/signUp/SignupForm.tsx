import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/button/Button';

const Form = styled.form`
  width: 100%;
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
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 8px 9px;
  background-color: #fff;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;
  &:focus {
    border-color: blue;
  }
`;

function SignupForm() {
  const navigation = useNavigate(); // ?
  // const isLogin = useSelector((state: RootState) => state.userInfos); //
  const dispatch = useDispatch();
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isidValid, setisidValid] = useState(false); // 아이디 유효한지
  const [ispasswordValid, setisPasswordValid] = useState(false); // 패스워드 유효한지
  const [signupMSG, setSignupMSG] = useState('');
  const [emailMSG, setEmailMSG] = useState(''); // 이메일 주소값
  const [passwordMSG, setPasswordMSG] = useState(''); // 패스워드 값

  // 네임 input 작성할때마다 signUpInfo 안에 네임 값을 넣는 함수
  const handleNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({ ...signUpInfo, name: e.target.value });
  };

  // email 정규식과 패스워드 정규식
  const regexEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  // 이메일 input 작성할때마다 정규식
  const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({ ...signUpInfo, email: e.target.value });
    return regexEmail.test(e.target.value)
      ? setisidValid(true)
      : setisidValid(false);
  };
  // 비밀번호 정규식 최소 8글자 문자1개 숫자1개
  const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({ ...signUpInfo, password: e.target.value });
    return regexPassword.test(e.target.value)
      ? setisPasswordValid(true)
      : setisPasswordValid(false);
  };
  const handleSignUp: React.MouseEventHandler = async (e: React.MouseEvent) => {
    // 요청보내기 전에 유효성검사
    if (!isidValid || !ispasswordValid) {
      setSignupMSG('이메일또는 패스워드가 유효하지 않습니다.');
      console.log(signupMSG);
      return;
    }
    e.preventDefault();

    fetch(
      'https://95a4-124-50-73-190.ngrok-free.app/bluelight/members/signup',
      {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json', // json fetch시
        },
        body: JSON.stringify(signUpInfo),
      },
    )
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          // 응답이 성공적인 경우
          console.log('요청이 성공했습니다.');
          console.log(data);
          navigation('/login');
          // 여기에서 추가적인 처리를 수행할 수 있습니다.
        } else {
          // 응답이 실패한 경우
          console.log('요청이 실패했습니다.');
          // 실패에 대한 처리를 수행할 수 있습니다.
        }
      })
      .catch(error => {
        console.log('에러', error);
        navigation('/error');
      });
  };
  return (
    <div>
      <Form>
        <label htmlFor="name">Display name</label>
        <Input id="name" type="text" onChange={handleNameValue}></Input>
        <label htmlFor="id">email</label>
        <input id="email" type="email" onChange={handleEmailValue}></input>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordValue}
        ></input>
        <Button customStyle="mt-5 h-[40px]" onClick={handleSignUp}>
          {/* */}
          sign up
        </Button>

        <div className="text-[13px] text-gray-400 mt-10">
          By clicking “Sign up”, you agree to our
          <a
            href="https://stackoverflow.com/legal/terms-of-service/public"
            target="_blank"
            className="-link"
            rel="noreferrer"
          >
            terms of service
          </a>{' '}
          and acknowledge that you have read and understand our{' '}
          <a
            href="https://stackoverflow.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>{' '}
          and <a href="/conduct">code of conduct</a>.
        </div>
      </Form>
    </div>
  );
}

export default SignupForm;
