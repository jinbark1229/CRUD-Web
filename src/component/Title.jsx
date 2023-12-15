import React from "react";
import "../Style/Title.css";

function Title() {

  return (
    <div className="topBanner Container">
      <img src={process.env.PUBLIC_URL + "/img/Title.png"} alt="오염수 정보 알리미 :)" style={{ width: 60 }} />
      <span>오염수를 알려드림</span>
    </div>
  )

}

export default Title;