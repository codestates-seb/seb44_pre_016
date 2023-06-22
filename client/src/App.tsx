import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import Header from './components/header/Header';
import Main from './pages/Main';
import Questions from './pages/Questions';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import AskQuestion from './pages/AskQuestion/AskQuestion'

function App() {
  const questionId = 50;
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div className="flex max-w-[1264px] mx-auto w-full">
        {!(
          location.pathname.includes('/login') ||
          location.pathname.includes('/member/signup')
        ) && <NavBar />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/member/signup" element={<SignUp />} />
        </Routes>
      </div>
      <QuestionDetail questionId={questionId} />
      <AskQuestion />
      <Footer />
    </div>
  );
}

export default App;
