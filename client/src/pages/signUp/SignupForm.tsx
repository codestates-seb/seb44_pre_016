import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/button/Button';

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
    box-shadow: 0px 0px 0px 4px black;
    border-color: blue;
  }
`;

function SignupForm() {
  return (
    <div>
      <Form>
        <label htmlFor="name">Display name</label>
        <Input id="name" type="text"></Input>
        <label htmlFor="id">email</label>
        <Input id="email" type="email"></Input>
        <label htmlFor="password">password</label>
        <input type="text" id="password"></input>
        <Button customStyle="mt-5 h-[40px]">sign up</Button>

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
