import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Main from './pages/Main';
import Questions from './pages/Questions';
import Login from './components/login/Login';
import Button from './components/button/Button';
import SignUp from './components/signUp/SignUp';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';

function App() {
  const questionId = 50;

  return (
    <div className="App">
      <header>
        <Link to="/login">
          <Button customStyle="bg-[#d8deff] border-[#83A6C4] text-[#487299] hover:bg-[#B9D2E8] active:bg-[#A6C4DF]  ">
            log in
          </Button>
        </Link>
        <Link to="/member/signup">
          <Button>sign up</Button>
        </Link>
      </header>
      <Routes>
        {/* routes 에 직접 스타일을 줄 수 있을까? */}
        <Route path="/" element={<Main />} />
        <Route path="/:questions" element={<Questions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member/signup" element={<SignUp />} />
      </Routes>
      <QuestionDetail questionId={questionId} />
    </div>
  );
}

export default App;
