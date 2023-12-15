import React from "react";
import { useState, useEffect } from "react";
import "../Style/MainImg.css";
import "../Style/Title.css";
import "../Style/TagColor.css";
import Total from "./Total";
import Title from "./Title";
import SImg from "./SImg";
import { Link } from "react-router-dom";



function MainImg() {
  const [banner, setBanner] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prevBanner) => (prevBanner + 2) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const [Dday, setDday] = useState(100);

  useEffect(() => {
    const discharge = new Date("2023-11-20");
    const today = new Date();

    const diffTime = today - discharge;
    const Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setDday(Days);
  }, []);


  const indexs = [
    "/img/MainBanner1.png",
    (
      <span style={{ fontWeight: "bold" }}>
        오염수 3차 방류
        <span style={{ color: 'red', fontWeight: "bold" }}> D+{Dday} </span>
        일째입니다. <br />과연 우리의 해양은 안전할까요?
      </span>
    ),
    "/img/MainBanner2.png",
    (<span style={{ color: "white", fontWeight: "bold" }}>
      건강한 우리바다<br /> 안전한 우리식탁
    </span>),"/img/MainBanner3.png",(<span style={{ color: "white", fontWeight: "bold" }}>
    안전한 우리 해양 수산물<br />우리 모두의 노력으로
    </span>)
  ];

  function LCursor() {
    const number = banner
    if (number === 0) {
      setBanner(indexs.length - 2)
    } else {
      setBanner(number - 2)
    }
  }

  function RCursor() {
    const number = banner
    if (number === indexs.length - 2) {
      setBanner(0)
    } else {
      setBanner(number+2)
    }
  }

  return (
    <div>

      {/* 슬로건 */}
      <Title />
      <div className="Container">
        <div className="innerwrap">
          {/* 배너 */}
          <div className="banner">
            <img src={process.env.PUBLIC_URL + indexs[banner]} alt="없음" />
            <div className="bannertxt">
              <p>
                {indexs[banner + 1]}
              </p>
            </div>
            <div className="cursorDiv" style={{ position: "absolute" }} >
              <img src={process.env.PUBLIC_URL + "/img/Left.png"} onClick={LCursor} alt="왼쪽 커서" className="cursor" />
              <img src={process.env.PUBLIC_URL + "/img/Right.png"} onClick={RCursor} alt="오른쪽 커서" className="cursor" />
            </div>
          </div>
          {/* 게시판 */}
          <Total />
        </div>
        {/* 퀵메뉴 */}
        <div className="quick">
          <div className="SubImg">
            <Link className="divImg" to="Alps"><SImg src="/img/Alps.png" text="ALPS란?" ></SImg></Link>
            <Link className="divImg" to="Seafood"><SImg src="/img/SeafoodInfo.png" text="수산물 정보" ></SImg></Link>
            <Link className="divImg" to="LatestTrends"><SImg src="/img/LatestTrends.png" text="최신동향"></SImg></Link>
            <Link className="divImg" to="Reference"><SImg src="/img/ReferenceSites.png" text="참고사이트"></SImg></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainImg;
