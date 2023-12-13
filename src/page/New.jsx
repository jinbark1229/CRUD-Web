import React from "react";
import SubImg from "../component/SubImg";
import Slogan from "../component/Slogan";
import "../Style/MainImg.css";
import "../Style/Subpage.css";

function New() {
  return (
    <div>
      <Slogan></Slogan>
      <SubImg src="/img/new.png" text="관리"></SubImg>
      <div className="subAll">
        <div className="subMenu"><div className="menu">메뉴</div> <div className="process">처리과정</div> <div className="manage">관리</div> <div className="news">관련 기사</div> </div>
        <div className="subText">
          <p>해양수산부에서는 국민들의 궁금한 점이나 청원사항을 게시판을 통해 수용하여 이를 일본 측에 직접 전달하여 파악한 정보를 국민들에게 일일브리핑 형태로 제공하고 있습니다.
          </p><br /><p>
          다음을 참조하시기 바랍니다</p>  
        </div>
      </div>
    </div>
  )
}
export default New;