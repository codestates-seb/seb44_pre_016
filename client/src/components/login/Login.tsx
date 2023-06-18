import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import Button from "../button/Button";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Login = () => {
  return (
    <Container className="">
      <form className='' >
        <label htmlFor="id">아이디</label>
        <input type="text" id="id"></input>
        <label htmlFor="password">비밀번호</label>
        <input type="text" id="password"></input>
        <Button variant="default" size='md' >sign up</Button>
      </form>
    </Container>
  );
};

export default Login;
