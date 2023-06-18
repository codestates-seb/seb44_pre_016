import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Main from './pages/Main';
import QuestionItem from './components/QuestionItem';
import Login from './components/login/Login';
import Button from './components/button/Button';
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <QuestionItem />
      <header>
        <Link to="/login">
          <Button variant="login">log in</Button>
        </Link>
        <Link to="/member/signup">
          <Button variant="default">sign up</Button>
        </Link>
      </header>
      <Routes>
        {/* routes 에 직접 스타일을 줄 수 있을까? */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
