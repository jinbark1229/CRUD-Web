import React from "react";
import SImg from "../component/SImg";
import Slogan from "../component/Slogan";
function New() {
  return (
    <div>
      <Slogan></Slogan>
      <SImg src="/img/allps.png" text="ALPS란?"></SImg>
      <div style={{ display: "flex" }}>
        <div style={{}}><div>메뉴</div> <div>처리과정</div> <div>관리</div> <div>관련 기사</div> </div>
        <div>
          <p>해양수산부에서는 국민들의 궁금한 점이나 청원사항을 게시판을 통해 수용하여 이를 일본 측에 직접 전달하여 파악한 정보를 국민들에게 일일브리핑 형태로 제공하고 있습니다.
          </p><br /><p>
            다음을 참조하시기 바랍니다</p>
        </div></div>
    </div>
  )
}
export default New;