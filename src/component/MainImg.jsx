import React from "react";
import { useState, useEffect } from "react";
import "../Style/MainImg.css";
import "../Style/Slogan.css";
import NoteBoard from "./NoteBoard";
import Slogan from "./Slogan";
import SImg from "./SImg";

function MainImg() {
    const [banner, setBanner] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setBanner((prevBanner) => (prevBanner + 2) % 4);
    }, 5000);
    return () => clearInterval(interval);
    }, []);

    const Dday = 100;
    const indexs = [
        "/img/Banner.png",
        `오염수 방류 D+${Dday} 일째입니다. 과연 우리의 해양은 안전할까요?`,
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
    <div className="Container">
        {/* 슬로건 */}
        <Slogan></Slogan>
        <div className="innerwrap">
            {/* 배너 */}
            <div className="banner">
                <img  src={process.env.PUBLIC_URL + indexs[banner]} alt="없음"/>
                <div className="bannertxt">
                    <p>
                    {indexs[banner + 1]}
                    </p>
                </div>
                <div className="cursorDiv" style={{ position: "absolute" }} >
                    <img src={process.env.PUBLIC_URL + "/img/left.png"} onClick={LCursor} alt="왼쪽 커서" className="cursor"  />
                    <img src={process.env.PUBLIC_URL + "/img/right.png"} onClick={RCursor} alt="오른쪽 커서" className="cursor" /> 
                </div>
            </div>
            {/* 게시판 */}
            <NoteBoard/>
        </div>
        {/* 퀵메뉴 */}
        <div className="quick">
            <div className="AppImg">
                <SImg src="/img/alps.png" text="ALPS란?"></SImg>
                <SImg src="/img/marine.png" text="수산물 정보"></SImg>
                <SImg src="/img/new.png" text="최신동향"></SImg>
                <SImg src="/img/new.png" text="참고사이트"></SImg>
            </div>
        </div>
    </div>
    
    );
}
export default MainImg;
