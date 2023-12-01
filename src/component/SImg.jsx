import React from "react";
import "../Style/SImg.css";

function SImg({ src,text }) {
  return (
    <div className="divImg">
      <img src={process.env.PUBLIC_URL + src} alt="없어요" className="ImgS"/>
      <p className="imgText">{text}</p>
    </div>
  );
}

export default SImg;