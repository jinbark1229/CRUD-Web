import React from "react";
import "../Style/SImg.css";
import "../Style/Subpage.css"

function SubBanner({ src, text }) {
  return (
    <div className="">
      <div className="subTop">
        <img src={process.env.PUBLIC_URL + src} alt="없어요" className="ImgS subTopImg" />
        <p className="imgsText">{text}</p>
      </div>
    </div>
  );
}

export default SubBanner;