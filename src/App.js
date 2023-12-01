import React from "react";
import Slogan from "./component/Slogan";
import MainImg from "./component/MainImg";
import SImg from "./component/SImg"
import "./App.css";


function App() {
  return (
    <div style={{marginLeft:30}}>
      <div className="top">
      <Slogan></Slogan></div><br/><br />
      <div><MainImg></MainImg></div>
      <div className="AppImg">
      <SImg src="/Img/alps.png" text="ALPS?"></SImg>
      <SImg src="Img/marine.png" text="수산물 정보" ></SImg>
      <SImg src="Img/new.png" text="최신동향"></SImg>
      </div>
    </div>
    
  );
}

export default App;
