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
import Footer from './components/footer/Footer';

function App() {
  const questionId = 50;

  return (
    <div className="App">
      <Header />
      <div className="w-[1000px] border-red border-[3px] mx-auto flex row-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Main />
              </>
            }
          />
          <Route
            path="/:questions"
            element={
              <>
                <Nav />
                <Questions />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/member/signup" element={<SignUp />} />
        </Routes>
      </div>
      <QuestionDetail questionId={questionId} />
      <Footer />
    </div>
  );
}

export default App;
