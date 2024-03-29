import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Main from './pages/Main';
import Questions from './pages/Questions';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signUp/SignUpPage';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Search from './pages/Search';
import ErrorPage from './pages/error/ErrorPage';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Mypage from './pages/mypage/Mypage';

function App() {
  const location = useLocation();

  // useEffect()

  return (
    <div className="App">
      <Header />
      <div className="flex max-w-[1264px] mx-auto  w-full ">
        {!(
          location.pathname.includes('/login') ||
          location.pathname.includes('/member/signup')
        ) && <NavBar />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/member/signup" element={<SignUpPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/mypage/" element={<Mypage />} />
          <Route path="/questions/:questionId" element={<QuestionDetail />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
