import React from "react";
import SubImg from "../component/SubImg";
import Slogan from "../component/Slogan";
import "../Style/Subpage.css";
import { Link } from "react-router-dom";
function Reference() {
  return (
    <div>
      <Link to="/"><Slogan></Slogan></Link>

      <SubImg src="/img/www.png" text="참고 사이트"></SubImg>
      <div style={{ display: "flex" }}>
      <div className="subMenu">
        <Link to="/Alps">ALPS?</Link><br/>
        <Link to="/Seafood">수산물 정보</Link><br/>
        <Link to="/New">최신동향</Link><br/>
        <Link to="/Reference">참고사이트</Link></div>
        <div className="subText">
          <h1>참고할 사이트-사이트맵</h1>
              <br/>
          <h3>참고한 사이트는 다음과 같습니다.</h3><br/>
          <div>
            <li>도쿄전력 <a href="https://www.tepco.co.jp/en/hd/responsibility/index-e.html">https://www.tepco.co.jp/en/hd/responsibility/index-e.html</a></li>
            <hr/>
            <li>국제원자력 기구 <a href="https://www.iaea.org/">https://www.iaea.org/</a></li>
            <hr/>
            <li>KBS 후쿠시마 원전 방류 오염수 이슈 탭 <a href="https://news.kbs.co.kr/news/listIssue.html?icd=19649#1">https://news.kbs.co.kr/news/listIssue.html?icd=19649#1</a></li>
            <hr/>
            <li>처리수 포털 사이트 <a href="https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html">https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html</a></li>
            <hr/>
            <li>해양수산부 <a href="https://www.mof.go.kr/index.do">https://www.mof.go.kr/index.do</a></li>
          <hr />
          <li>수입식품방사능안전정보 <a href="https://radsafe.mfds.go.kr/CFQCC01F01/">https://radsafe.mfds.go.kr/CFQCC01F01/</a></li>
          <hr />
          <li>원자력안전정보공개센터 <a href="https://nsic.nssc.go.kr/rad/environRadiation.do#ocea">https://nsic.nssc.go.kr/rad/environRadiation.do#ocea</a></li>
          <hr /><li>해양환경정보포털 <a href="https://www.meis.go.kr/mei/observe/emrgncyIvg.do">https://www.meis.go.kr/mei/observe/emrgncyIvg.do</a> </li>
          <hr />
          <li>국립수산물품질관리원 <a href="https://www.nfqs.go.kr/hpmg/data/actionRadioInvestStatusForm.do?menuId=M0001144">https://www.nfqs.go.kr/hpmg/data/actionRadioInvestStatusForm.do?menuId=M0001144</a></li>
          <hr />
          <li>국내유통식품방사능검사현황 <a href="https://radsafe.mfds.go.kr/CFQDD04F02/getCntntsDetail?page=1&limit=10&cntntsView=list&cntntsSn=549217&searchCondition=&searchInpText=">https://radsafe.mfds.go.kr/CFQDD04F02/getCntntsDetail...</a></li>
          <hr />
          </div>
        </div></div>
    </div>
  )
}
export default Reference;