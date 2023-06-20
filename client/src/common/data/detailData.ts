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
    "title": "질문 제목입니다.",
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
    "title": "또 다른 질문 제목입니다.",
    "votes": 30,
    "content": "또 질문질문합니다~~ 또 모르겠어잉",
    "answerList": [
      {
        "nickName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "content": "또 이렇게 해보세요~!",
        "createdAt": "2023-06-15 16:18:14"
      },
      {
        "nickName": "kimcoding",
        "profileImage": "/images/profile.jpg",
        "content": "아니면 또 이렇게 해보시는거 어때요~!",
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