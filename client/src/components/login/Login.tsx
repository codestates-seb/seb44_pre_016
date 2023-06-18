import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
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

const Login = () => {
  return (
    <Container>
      <div>
        <Form>
          <label htmlFor="id">email</label>
          <input type="text" id="id"></input>
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
