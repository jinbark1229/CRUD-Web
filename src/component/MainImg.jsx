import React from "react";
import { useState, useEffect } from "react";
import "../Style/MainImg.css";
import NoteBoard from "./NoteBoard";


function MainImg() {
  const [banner, setBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prevBanner) => (prevBanner + 2) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Dday = 100;
  const indexs = [
    "/img/Banner.png",
    `오염수 방류 D+${Dday} 일째입니다. 과연 우리의 해양은 안전할까요? 
    지금 우리는 무엇을 해야할까요`,
    "/img/fish.jpg",
    "냠냠"
  ];


function LCursor(){
  const number = banner
  if(number===0){
    setBanner(indexs.length-2)
  }else{
    setBanner(number-2)
  }
}

function RCursor(){
  const number = banner
  if(number===indexs.length-2){
    setBanner(0)
  }else{
    setBanner(+2)
  }
}

  return (
    <div className="Container" style={{ position: "relative", flexDirection: "row-reverse" }}>
      <NoteBoard/>
      <div className="baner">
      <img  src={process.env.PUBLIC_URL + indexs[banner]} alt="없음" style={{ width: 1024, height: 305, borderRadius: 30 }} />
      </div>
      <div className="text" style={{ position: "absolute" }}>
        <p>
          {indexs[banner + 1]}
        </p>
      </div>
      <div className="cursorDiv" style={{ position: "absolute" }} >
        <img src={process.env.PUBLIC_URL + "/img/left.png"} onClick={LCursor} alt="왼쪽 커서" className="cursor"  />
        <img src={process.env.PUBLIC_URL + "/img/right.png"} onClick={RCursor} alt="오른쪽 커서" className="cursor" />
      </div>
    </div>
  );
}
export default MainImg;
