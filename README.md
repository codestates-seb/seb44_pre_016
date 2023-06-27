# seb44_pre_016

### 개요
StackOverFlow를 기반으로 한 기능 클론 코딩 프로젝트

### 기술 스택
<table>
  <tr>
    <td>JS</td>
    <td>REACT</td>
    <td>tailwindCSS</td>
    <td>styled-components</td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" width="180" height="180"/></td>
    <td><img src="https://blog.kakaocdn.net/dn/doBY5S/btrlEmJSNSs/qmgj8lzzHRkt2b0WX5nSN1/img.png" width="180" height="180"/></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="180" height="180"/></td>
    <td><img src="https://i.ibb.co/ydkG6cv/img.png" width="180" height="180"/></td>
  </tr>
  <tr>
    <td>RTK</td>
    <td>React-Quill</td>
    <td>TypeScript</td>
    <td></td>
  </tr>
  <tr>
    <td><img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.svg" width="180" height="180"/></td>
    <td><img src="https://kenoleon.github.io/Front-End-Web-Dev-UI-UX/assets/images/quilljsLogo.png" width="180"/></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="180" height="180"/></td>
    <td></td>
  </tr>
</table>


### 개발 환경 세팅
```bash
npm install
npm start
```


## 팀원
| <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/e09ce90c-1f3d-4d97-a8dc-c6eb934d803e" width="180" height="180"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/51310a0f-8b12-49b0-8fd3-1e9773e2aaa2" width="180" height="180"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/ab2ae20e-6494-47e8-a857-3a8fc7c7aa8f" width="180" height="180"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/f4dfd3dc-089c-4f15-9357-4fb8446dbbbd" width="180" height="180"/> | <img src="https://github.com/codestates-seb/seb44_pre_016/assets/100808381/ca97ea2f-0c9c-4f7b-ae5d-b8f69ce05b07" width="180" height="180"/> | <img src="" width="180" height="180"/> |
| --- | --- | --- | --- | --- | --- |
| [김준표](https://github.com/KimJunpyo) | [송혜수](https://github.com/shyesoo) | [이은희](https://github.com/joywhy) | [송영범](https://github.com/withme1221) | [유승연](https://github.com/Seungyeon3) | [이준기](https://github.com/ljg980708) |



## 프리뷰 목록

### 로그인, 회원가입
- 회원가입 및 로그인을 할 수 있습니다.
- 로그인 시, 헤더에 유저의 정보가 표시되며, 로그아웃 버튼이 생성되어 로그아웃 할 수 있습니다.

### 검색(tag 포함)
![무비모달](https://github.com/FE-Sprint-Study/Movie-Wiki/assets/100808381/6dfb08ab-7a98-464c-a06b-eb301d1475f3)
- 일반 검색했을 때, 제목에 입력한 검색어가 포함된 데이터를 출력합니다.
- 검색어에 대괄호를 감싸면 태그 검색이 진행되어 태그가 포함된 데이터를 출력합니다.

### 질문 등록하기
![무한스크롤1](https://github.com/FE-Sprint-Study/Movie-Wiki/assets/100808381/b41aee1f-a613-47bd-abff-53e930541975)
- 제목, 내용, 태그를 입력하여 질문을 등록할 수 있습니다.
- 특정 글자 수를 넘기지 못하면 다음 입력 칸으로 넘어갈 수 없습니다.
- 본문에는 코드 작성 기능과 서식 기능 등이 구현되어있습니다.
- 태그는 자동검색 기능이 있어 태그 리스트에서 키워드가 포함된 태그들이 있다면 표시해주고 클릭 시 태그가 저장됩니다.

### 질문 상세보기
![캐러셀](https://github.com/FE-Sprint-Study/Movie-Wiki/assets/100808381/ffd460e8-0232-4944-8c18-4c28b9bc23ed)
- 질문의 제목, 내용, 태그, 작성자, 작성일자가 표시됩니다.
- 질문에 답변을 달 수 있습니다.
