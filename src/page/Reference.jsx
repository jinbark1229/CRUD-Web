import React from "react";
import SubImg from "../component/SubImg";
import Slogan from "../component/Slogan";
import "../Style/Subpage.css";
import { Link } from "react-router-dom";
function Reference() {
  return (
    <div>
      <Link to="/"><Slogan></Slogan></Link>
      <div className="topBaner">
        <Link to="/Alps">ALPS?</Link><br/>
        <Link to="/Seafood">수산물 정보</Link><br/>
        <Link to="/New">최신동향</Link>
      </div>
      <SubImg src="/img/allps.png" text="ALPS란?"></SubImg>
      <div style={{ display: "flex" }}>
      <div className="subMenu"><div className="menu">메뉴</div> <div className="process">처리과정</div> <div className="manage">관리</div> <div className="news">관련 기사</div> </div>
        <div className="subText">
          <h1>참고할 사이트-사이트맵</h1>
              <br/>
          <h3>참고한 사이트는 다음과 같습니다.</h3><br/>
          <div>
            <li>도쿄전력 https://www.tepco.co.jp/en/hd/responsibility/index-e.html</li>
            <hr/>
            <li>국제원자력 기구 https://www.iaea.org/</li>
            <hr/>
            <li>KBS 후쿠시마 원전 방류 오염수 이슈 탭 https://news.kbs.co.kr/news/listIssue.html?icd=19649#1</li>
            <hr/>
            <li>처리수 포털 사이트 https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html</li>
            <hr/>
          </div>
        </div></div>
    </div>
  )
}
export default Reference;