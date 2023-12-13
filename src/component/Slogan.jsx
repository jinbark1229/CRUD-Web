import React from "react";
import "../Style/Slogan.css";

function Slogan() {

  return (
    <div className="topBanner Container">
      <img src={process.env.PUBLIC_URL + "/img/slogan.png"} alt="오염수 정보 알리미 :)" style={{width:60}} />
      <span>오염수를 알려드림</span>
    </div>
  )

}

export default Slogan;