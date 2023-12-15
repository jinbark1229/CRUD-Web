import React from "react";
import SubBanner from "../component/SubBanner";
import Title from "../component/Title";
import "../Style/Subpage.css";
import "../Style/TagColor.css";
import { Link } from "react-router-dom";

function Reference() {


  const styles = {
    marginTop: '15px',
    marginBottom: '15px',
  };

  return (
    <div>
      <Link to="/"><Title></Title></Link>

      <SubBanner src="/img/SubBanner4.png" text="참고 사이트"></SubBanner>
      <div className="subAll">
        <div className="subMenu">
          <Link to="/Alps">ALPS?</Link><br />
          <Link to="/Seafood">수산물 정보</Link><br />
          <Link to="/LatestTrends">최신동향</Link><br />
          <Link to="/Reference">참고사이트</Link>
        </div>
        <div className="subText">
          <h1>사이트맵</h1>
          <br />
          <ul style={{ margin: '20px', listStyleType: 'square' }}>
            <li>도쿄전력 <a href="https://www.tepco.co.jp/en/hd/responsibility/index-e.html">https://www.tepco.co.jp/en/hd/responsibility/index-e.html</a></li>
            <hr style={styles} />
            <li>국제원자력 기구 <a href="https://www.iaea.org/">https://www.iaea.org/</a></li>
            <hr style={styles} />
            <li>KBS 후쿠시마 원전 방류 오염수 이슈 탭 <a href="https://LatestTrendss.kbs.co.kr/LatestTrendss/listIssue.html?icd=19649#1">https://LatestTrendss.kbs.co.kr/LatestTrendss/listIssue.html?icd=19649#1</a></li>
            <hr style={styles} />
            <li>처리수 포털 사이트 <a href="https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html">https://www.tepco.co.jp/ko/decommission/progress/watertreatment/index-kr.html</a></li>
            <hr style={styles} />
            <li>해양수산부 <a href="https://www.mof.go.kr/index.do">https://www.mof.go.kr/index.do</a></li>
            <hr style={styles} />
            <li>수입식품방사능안전정보 <a href="https://radsafe.mfds.go.kr/CFQCC01F01/">https://radsafe.mfds.go.kr/CFQCC01F01/</a></li>
            <hr style={styles} />
            <li>원자력안전정보공개센터 <a href="https://nsic.nssc.go.kr/rad/environRadiation.do#ocea">https://nsic.nssc.go.kr/rad/environRadiation.do#ocea</a></li>
            <hr style={styles} />
            <li>해양환경정보포털 <a href="https://www.meis.go.kr/mei/observe/emrgncyIvg.do">https://www.meis.go.kr/mei/observe/emrgncyIvg.do</a></li>
            <hr style={styles} />
            <li>국립수산물품질관리원 <a href="https://www.nfqs.go.kr/hpmg/data/actionRadioInvestStatusForm.do?menuId=M0001144">https://www.nfqs.go.kr/hpmg/data/actionRadioInvestStatusForm.do?menuId=M0001144</a></li>
            <hr style={styles} />
            <li>국내유통식품방사능검사현황 <a href="https://radsafe.mfds.go.kr/CFQDD04F02/getCntntsDetail?page=1&limit=10&cntntsView=list&cntntsSn=549217&searchCondition=&searchInpText=">https://radsafe.mfds.go.kr/CFQDD04F02/getCntntsDetail...</a></li>
            <hr style={styles} />
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Reference;