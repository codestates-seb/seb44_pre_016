export interface AnswerListItem {
  memberId: number;
  answerId: number;
  answerContent: string;
  profileImage: string;
  displayName: string;
  createdAt: string;
}

export interface Tag {
  tagId: number;
  tagName: string;
  tagContent: string;
}

export interface DummyData {
  questionId: number;
  questionTitle: string;
  questionContent: string;
  questionTag: Tag[];
  memberId: number;
  profileImage:string;
  displayName: string;
  answerList: AnswerListItem[];
  createdAt: string;
}

export const detailData: DummyData[] = [
  {
    "questionId": 50,
    "questionTitle": "How to design a good JWT authentication filter",
    "questionContent": "질문 내용입니다~~ 모르겠어잉",
    "questionTag": [
      {
          "tagId": 1,
          "tagName": "java",
          "tagContent": "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers."

      },
      {
          "tagId":3,
          "tagName": "spring",
          "tagContent": "spring blah blah"
          
      }
    ],
    "memberId": 1,
    "profileImage": "/images/profile.jpg",
      "displayName": "dumbpotato24",
    "answerList": [
      {
        "memberId": 1,
        "answerId": 1,
        "displayName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "answerContent": "이렇게 해보세요~!",
        "createdAt": "2023-06-15 16:18:14"
      }
    ],
    "createdAt": "2023-06-15 16:18:14"
  },
  {
    "questionId": 49,
    "questionTitle": "merge sort program in java",
    "questionContent": "I do not know everything",
    "questionTag": [
      {
          "tagId": 1,
          "tagName": "java",
          "tagContent": "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers."

      },
      {
          "tagId":3,
          "tagName": "spring",
          "tagContent": "spring blah blah"
          
      }
    ],
    "memberId": 1,
    "profileImage": "/images/profile.jpg",
      "displayName": "dumbpotato24",
    "answerList": [
      {
        "memberId": 1,
        "answerId": 2,
        "displayName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "answerContent": "i don't know too.<p></p><pre class='ql-syntax' spellcheck='false'>let num = 10;</pre>",
        "createdAt": "2023-06-15 16:18:14"
      },
      {
        "memberId": 1,
        "answerId": 3,
        "displayName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "answerContent": "hello my name is <h1>hyesoo</h1>",
        "createdAt": "2023-06-15 16:18:14"
      }
    ],
    "createdAt": "2023-06-16 12:18:00"
  }
];