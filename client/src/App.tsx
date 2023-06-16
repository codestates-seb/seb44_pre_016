import React from 'react';
import './App.css';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';

function App() {
  const questionId = 50;

    return (
        <div className="App">
            <QuestionDetail questionId={questionId}/>
        </div>
    );
}

export default App;