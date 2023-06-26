import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionItem from '../questionItem/QuestionItem';
import { TopQuestionItemData } from '../../common/interface/QuestionList.interface';
import { QuestionContainer } from './QuestionList.styled';

function TopQuestionList() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [topQuestionData, setTopQuestionData] = useState([]);

  useEffect(() => {
    const fetchTopData = async () => {
      try {
        const response = await axios.get<TopQuestionItemData[]>(
          `${BASE_URL}/`,
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          },
        );
        setTopQuestionData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopData();
  }, []);

  return (
    <QuestionContainer>
      {topQuestionData &&
        topQuestionData.map(question => (
          <QuestionItem
            pageType="Top"
            questionProps={question}
            key={question.questionId}
          />
        ))}
    </QuestionContainer>
  );
}

export default TopQuestionList;
