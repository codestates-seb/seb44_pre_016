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
  answer: number;
  tags: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}

export interface AllQuestionItemData {
  questionId: number;
  questionTitle: string;
  questionContent: string;
  questionVoteCount: number;
  answer: number;
  tags: Tags[];
  profileImage: string;
  nickName: string;
  createdAt: string;
}
