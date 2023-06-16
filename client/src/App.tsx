import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Main from './pages/Main';
import QuestionItem from './components/QuestionItem';
import Login from './components/login/Login';

const Button = styled.button`
  border-radius: 0.3rem;
  background-color: rgb(225, 236, 244);
  border: 1px solid hsl(205, 41%, 63%);
  /* text-transform: uppercase; */
  text-transform: capitalize;
  font-size: 13px;
  color: rgb(57, 115, 157);
  cursor: pointer;
  padding: 10.5px 8px;
`;
const SignUp = styled(Button)`
  background-color: rgb(10, 149, 255);
  color: rgb(255, 255, 255);
  font-weight: bold;
`;
function App() {
    return (
        <div className="App">
            <QuestionItem />
            <header>
        <Link to="/login">
          <Button type="sigin">Log in</Button>
        </Link>
        <SignUp type="sigup">sign up</SignUp>
      </header>
      <Routes>
        {/* routes 에 직접 스타일을 줄 수 있을까? */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        </div>
    );
}

export default App;
