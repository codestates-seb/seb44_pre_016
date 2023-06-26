export interface QuestionListPageProps {
  page: string;
}

export interface Tags {
  tagId: number;
  tagName: string;
}

export interface TopQuestionItemData {
  questionId: number;
  questionTitle: string;
  questionVoteCount: number;
  answerCount: number;
  questionTag: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}

export interface AllSearchQuestionItemData {
  questionId: number;
  questionTitle: string;
  questionContent: string;
  questionVoteCount: number;
  answerCount: number;
  questionTag: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}
