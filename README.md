# seb44_pre_016

### 개요
StackOverFlow를 기반으로 한 기능 클론 코딩 프로젝트

### 기술 스택
  ### FE
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Styledcomponent-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" /> <img src="https://img.shields.io/badge/ReduxToolKit-764ABC?style=for-the-badge&logo=redux&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  
<table>
  <tr>
    <td>React-Quill</td>
  </tr>
  <tr>
    <td><img src="https://kenoleon.github.io/Front-End-Web-Dev-UI-UX/assets/images/quilljsLogo.png" width="100"/></td>
  </tr>
</table>

### BE
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" /> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" /> <img src="https://img.shields.io/badge/springSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" /> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" /> <img src="https://img.shields.io/badge/apachetomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black" /> <img src="https://img.shields.io/badge/ngrok-1F1E37?style=for-the-badge&logo=ngrok&logoColor=white" />
<table>
  <tr>
    <td>JWT</td>
  </tr>
  <tr>
    <td><img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/46f2344e-bd78-45d4-9aa5-f4db3628c784" width="100"/></td>
  </tr>
</table>


### 개발 환경 세팅
```bash
npm install
npm start
```

## 팀원
### FE
| <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/6174979d-2472-479e-8383-9d64e9985c28" width="150" height="200"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/3ed373ad-3d5a-4351-bf02-937aef1f09d1" width="150" height="200"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/bf6fd290-fc51-4feb-b0ec-57b9fed06c6c" width="150" height="150"/> |
| --- | --- | --- |
| [김준표(팀장)](https://github.com/KimJunpyo) | [송혜수](https://github.com/shyesoo) | [이은희](https://github.com/joywhy) |

### BE
| <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/3a38327d-15aa-457c-95fe-2739acc94de1" width="150" height="150"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/0a5e9f8d-ecd6-48ca-8faf-8baf80853848" width="150" height="200"/> |  |
| --- | --- | --- |
| [송영범](https://github.com/withme1221) | [유승연](https://github.com/Seungyeon3) | [이준기(부팀장)](https://github.com/ljg980708) |

## 프리뷰 목록

### 로그인, 회원가입
![login](https://github.com/codestates-seb/seb44_pre_016/assets/100808381/e7119fd0-85f1-4e01-a875-4175a70c79f5)
- 회원가입 및 로그인을 할 수 있습니다.
- 로그인 시, 헤더에 유저의 정보가 표시되며, 로그아웃 버튼이 생성되어 로그아웃 할 수 있습니다.

### 프로필 수정
![user_edit](https://github.com/codestates-seb/seb44_pre_016/assets/100808381/9c23528b-3952-474d-a544-99dba6892151)
- 로그인 이후 마이 페이지에 접근할 수 있습니다.
- 마이페이지에서 프로필 정보를 수정 할 수 있습니다.

### 검색(tag 포함)
![search](https://github.com/codestates-seb/seb44_pre_016/assets/100808381/99949452-1c4a-4590-8f3e-01e51029f70f)
- 일반 검색했을 때, 제목에 입력한 검색어가 포함된 데이터를 출력합니다.
- 검색어에 대괄호를 감싸면 태그 검색이 진행되어 태그가 포함된 데이터를 출력합니다.

### 질문 등록하기
![ask_question](https://github.com/codestates-seb/seb44_pre_016/assets/100808381/f6ab1a70-d42f-4035-9943-305710ecb55f)
- 제목, 내용, 태그를 입력하여 질문을 등록할 수 있습니다.
- 특정 글자 수를 넘기지 못하면 다음 입력 칸으로 넘어갈 수 없습니다.
- 본문에는 코드 작성 기능과 서식 기능 등이 구현되어있습니다.
- 태그는 자동검색 기능이 있어 태그 리스트에서 키워드가 포함된 태그들이 있다면 표시해주고 클릭 시 태그가 저장됩니다.

### 질문 상세보기
![question_detail](https://github.com/codestates-seb/seb44_pre_016/assets/100808381/a3aea059-5f92-417e-84cb-35af9f602606)
- 질문의 제목, 내용, 태그, 작성자, 작성일자가 표시됩니다.
- 질문에 답변을 달 수 있습니다.
- 질문 및 답변은 삭제할 수 있습니다.
