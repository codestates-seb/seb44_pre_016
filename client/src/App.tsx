import React from 'react';
import './App.css';
import QuestionItem from './components/QuestionItem'
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';

function App() {
  const questionId = 50;

    return (
        <div className="App">
            <QuestionItem />
            <QuestionItem />
            <QuestionDetail questionId={questionId}/>
        </div>
    );
}

export default App;