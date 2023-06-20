import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Main from './pages/Main';
import Questions from './pages/Questions';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';

function App() {
  const questionId = 50;

  return (
    <div className="App">
      <Header />
      <Routes>
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
