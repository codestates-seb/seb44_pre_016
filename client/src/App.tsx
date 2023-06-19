import React from 'react';
import './App.css';
import QuestionItem from './components/QuestionItem';
import data from './common/data/data.json';

export interface Tags {
  tagId: number;
  tagName: string;
}

export interface QuestionItemData {
  questionId: number;
  title: string;
  votes: number;
  answer: number;
  tags: Tags[];
  memberId: number;
  profileImage: string;
  nickName: string;
  createdAt: string;
}

function App() {
  return (
    <div className="App">
      {data.map(e => (
        <QuestionItem questionProps={e} key={e.questionId} />
      ))}
    </div>
  );
}

export default App;
