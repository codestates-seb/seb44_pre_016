import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Main from './pages/Main';
import Questions from './pages/Questions';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  const questionId = 50;

  return (
    <div className="App">
      <Header />
      <div className="flex max-w-[1264px] mx-auto w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:questions" element={<Questions />} />
        </Routes>
      </div>
      <Routes>
        {/* routes 에 직접 스타일을 줄 수 있을까? */}
        <Route path="/login" element={<Login />} />
        <Route path="/member/signup" element={<SignUp />} />
      </Routes>
      <QuestionDetail questionId={questionId} />
      <Footer />
    </div>
  );
}

export default App;
