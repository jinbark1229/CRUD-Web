import React from "react";
import SImg from "../component/SImg";
import Slogan from "../component/Slogan";
function Reference() {
  return (
    <div>
      <Slogan></Slogan>
      <SImg src="/img/allps.png" text="ALPS란?"></SImg>
      <div style={{ display: "flex" }}>
        <div style={{}}><div>메뉴</div> <div>처리과정</div> <div>관리</div> <div>관련 기사</div> </div>
        <div>
          <h1>참고할 사이트-사이트맵</h1>

          <h3>참고한 사이트는 다음과 같습니다.</h3>
          <ol>
            <li>도쿄전력 https://www.tepco.co.jp/en/hd/responsibility/index-e.html</li>
            <li>국제원자력 기구 https://www.iaea.org/</li>
            <li>KBS 후쿠시마 원전 방류 오염수 이슈 탭 https://news.kbs.co.kr/news/listIssue.html?icd=19649#1</li>
            <li>처리수 포털 사이트 https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html</li>
          </ol>
        </div></div>
    </div>
  )
}
export default Reference;