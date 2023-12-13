import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/MainBoard.css";
import Slogan from "./Slogan";

function MainBoard() {
  const [write, setWrite] = useState(true);
  const [memo, setMemo] = useState([]);
  const [memoValue, setMemoValue] = useState("");

  function IWantWrite() {
    setWrite(!write);
  }

  function Completion() {
    if (memoValue.trim() !== "") {
      setMemo((prememo) => [...prememo, memoValue]);
      setMemoValue("");
    }
    setWrite(!write);
  }

  {/*로컬 스토리지 저장*/ }
  useEffect(() => {
    if (memo.length > 0) {
      localStorage.setItem("memos", JSON.stringify(memo));
    }
  }, [memo])

  useEffect(() => {
    const localData = localStorage.getItem("memos")
    if (localData !== null) {
      const JData = JSON.parse(localData);
      // console.log(JData.length)
      setMemo(JData)
    }
  }, [])

  return (
    <div className="Container">
      <Link to="/">
        <Slogan />
      </Link>

      <div className="Board">
        <div>
          <p>게시판 입니다</p>
        </div>
        {/* 게시판 글 */}
        <div>
          <ol className="Items" type="I">
            {/* 메모 표시 */}
            {memo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      {/* 게시판 바닥 */}
      <div className="BoardBottom">
        <div hidden={write}>
          <input type="text" className="InputWrite" value={memoValue} onChange={(e) => setMemoValue(e.target.value)} />
          <button onClick={Completion}>완료</button>
        </div>
        <div hidden={!write}>
          <button onClick={IWantWrite}>게시글 작성</button>
        </div>

      </div>
    </div>
  );
}

export default MainBoard;
