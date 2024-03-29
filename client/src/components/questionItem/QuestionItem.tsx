import React from 'react';
import { useNavigate } from 'react-router';
import {
  ONE_DAY_MILLISECOND,
  ONE_HOUR_MILLISECOND,
  ONE_MINUTE_MILLISECOND,
  ONE_SECOND_MILLISECOND,
} from '../../common/data/ConstantValue';
import {
  TopQuestionItemData,
  AllSearchQuestionItemData,
} from '../../common/interface/QuestionList.interface';

import {
  QuestionItemContainer,
  QuestionItemActive,
  QuestionVote,
  QuestionDataContainer,
  QuestionItemTitle,
  QuestionBodyContainer,
  QuestionTagList,
  QuestionTagName,
  QuestionUserContainer,
  QuestionUserProfile,
  QuestionUserName,
  QuestionAnswer,
} from './QuestionItem.styled';

type QuestionItemProps =
  | {
      questionProps: TopQuestionItemData;
    }
  | { questionProps: AllSearchQuestionItemData };

function QuestionItem({ questionProps }: QuestionItemProps) {
  const {
    questionVoteCount,
    answerCount,
    questionTitle,
    questionTag,
    profileImage,
    displayName,
    createdAt,
    questionId,
  } = questionProps;

  const navigate = useNavigate();

  const changeDate = (date: string) => {
    const nowDate = Date.now();
    const oldDate = Date.parse(date);
    let dateDiff = nowDate - oldDate;

    if (dateDiff < ONE_SECOND_MILLISECOND) {
      return 'now';
    }
    if (dateDiff < ONE_MINUTE_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_SECOND_MILLISECOND);
      return `${dateDiff} sec ago`;
    }
    if (dateDiff < ONE_HOUR_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_MINUTE_MILLISECOND);
      return `${dateDiff} min ago`;
    }
    if (dateDiff < ONE_DAY_MILLISECOND) {
      dateDiff = Math.floor(dateDiff / ONE_HOUR_MILLISECOND);
      return `${dateDiff} hour ago`;
    }
    dateDiff = Math.floor(dateDiff / ONE_DAY_MILLISECOND);

    return `${dateDiff} day ago`;
  };

  // const validateNavigation = () => {
  //   const location = useLocation();

  //   if (location.pathname === "/questions") {
  //     navigate(`${questionId}`);
  //   } else if (location.pathname === "/") {
  //     navigate(`/questions/${questionId}`);
  //   }
  // }

  return (
    <QuestionItemContainer>
      <QuestionItemActive>
        <QuestionVote>{questionVoteCount} votes</QuestionVote>
        <QuestionAnswer
          className={
            answerCount ? `border-green border text-green` : `text-[#6A737C]`
          }
        >
          {answerCount} answers
        </QuestionAnswer>
      </QuestionItemActive>
      <QuestionDataContainer>
        <QuestionItemTitle onClick={() => navigate(`${questionId}`)}>
          {questionTitle}
        </QuestionItemTitle>
        <QuestionBodyContainer>
          <ul>
            {questionTag &&
              questionTag.map(tag => (
                <QuestionTagList key={tag.tagId}>
                  <QuestionTagName>{tag.tagName}</QuestionTagName>
                </QuestionTagList>
              ))}
          </ul>
          <QuestionUserContainer>
            <QuestionUserProfile
              src={profileImage && profileImage}
              alt="프로필 사진"
            />
            <QuestionUserName>{displayName && displayName}</QuestionUserName>
            <time className="text-[#6A737C]">{changeDate(createdAt)}</time>
          </QuestionUserContainer>
        </QuestionBodyContainer>
      </QuestionDataContainer>
    </QuestionItemContainer>
  );
}

export default QuestionItem;
