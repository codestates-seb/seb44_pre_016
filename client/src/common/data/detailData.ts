export interface AnswerListItem {
  nickName: string;
  profileImage:string;
  content: string;
  createdAt: string;
}

export interface DummyData {
  questionId: number;
  title: string;
  votes: number;
  content: string;
  answerList: AnswerListItem[];
  profileImage:string;
  nickName: string;
  createdAt: string;
}

export const detailData: DummyData[] = [
  {
    "questionId": 50,
    "title": "How to design a good JWT authentication filter",
    "votes": 49,
    "content": "질문 내용입니다~~ 모르겠어잉",
    "answerList": [
      {
        "nickName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "content": "이렇게 해보세요~!",
        "createdAt": "2023-06-15 16:18:14"
      }
    ],
    "profileImage": "/images/profile.jpg",
    "nickName": "dumbpotato24",
    "createdAt": "2023-06-15 16:18:14"
  },
  {
    "questionId": 49,
    "title": "merge sort program in java",
    "votes": 30,
    "content": "I do not know everything",
    "answerList": [
      {
        "nickName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "content": "i don't know too.<p></p><pre class='ql-syntax' spellcheck='false'>let num = 10;</pre>",
        "createdAt": "2023-06-15 16:18:14"
      },
      {
        "nickName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "content": "hello my name is <h1>hyesoo</h1>",
        "createdAt": "2023-06-15 16:18:14"
      }
    ],
    "profileImage": "/images/profile.jpg",
    "nickName": "dumbpotato24",
    "createdAt": "2023-06-16 12:18:00"
  },
  {
    "questionId": 48,
    "title": "배고파요.",
    "votes": 30,
    "content": "배고픈데 저메추해주세요",
    "answerList": [],
    "profileImage": "/images/profile.jpg",
    "nickName": "dumbpotato24",
    "createdAt": "2023-06-16 12:18:00"
  }
];