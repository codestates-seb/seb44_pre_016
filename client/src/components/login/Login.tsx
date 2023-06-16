import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
//   absolute
//   top-50%;
//   left-50%;
//   background-color: hsl(210, 8%, 85%)
  
`;

const Login = () => {
  return (
    <Container className="">
      <form>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id"></input>
        <label htmlFor="password">비밀번호</label>
        <input type="text" id="password"></input>
        <button>submit</button>
      </form>
    </Container>
  );
};

export default Login;
