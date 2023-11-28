import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [logo, setLogo] = useState("ReactBlog");
  let [title, titleChange] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, likeUp] = useState(0);

  // 자주 변경될 것 같은 html 부분은 state로 만들어두기
  // state 변경하는 법 : 등호로 변경 금지\
  // reference data type 공부

  // state 가 array/object 이면 copy본을 만들어 수정해야함

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          titleChange(copy.sort());
        }}
      >
        정렬
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          titleChange(copy);
        }}
      >
        변경
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              likeUp(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

// 컴포넌트 언제 쓰면 좋은가.
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들 (좋아요 등)
// 컴포넌트 단점 : state 가져다쓸 때 문제 생김
// 서로 다른 함수에 있던 변수를 사용 X

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
