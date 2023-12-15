import React, { useEffect, useState } from "react";
import SubBanner from "../component/SubBanner";
import Title from "../component/Title";
import "../Style/MainImg.css";
import "../Style/Subpage.css";
import "../Style/TagColor.css";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

function LatestTrends() {
  const [scroll, setScroll] = useState(0);
  const [yes, setYes] = useState("yes");
  const [barScroll, setBarScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll - 300 < 0) {
        setBarScroll(0)
      } else {
        setBarScroll(currentScroll - 300);
      }



      setScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > 400) {
      setYes("yes");
    } else {
      setYes("no");
    }
  }, [scroll]);

  return (
    <div>
      <Link to="/"><Title></Title></Link>
      <SubBanner src="/img/SubBanner3.png" text="최신동향"></SubBanner>
      <div className="subAll">
        <div className="subMenu" style={{ marginTop: barScroll }}>
          <Link to="/Alps">ALPS?</Link><br />
          <Link to="/Seafood">수산물 정보</Link><br />
          <Link to="/LatestTrends">최신동향</Link><br />
          <Link to="/Reference">참고사이트</Link></div>
        <div className="subText">
          <p>
            해양수산부에서는 국민들의 궁금한 점이나 청원사항을 게시판을 통해 수용하여
            이를 일본 측에 직접 전달하여 파악한 정보를 국민들에게 일일브리핑 형태로
            제공하고 있습니다.
          </p>
          <br />
          <Iframe
            src="https://www.mof.go.kr/doc/ko/selectDocList.do?currentPageNo=1&bbsSeq=10&menuSeq=971&recordCountPerPage=&searchEtc1=&searchEtc2=&searchEtc3=&searchEtc4=&searchEtc5=&searchDeptName=&searchStartDate=&searchEndDate=&searchSelect=title&searchValue=%EC%9D%BC%EC%9D%BC%EB%B8%8C%EB%A6%AC%ED%95%91"
            width="1440px"
            height="900"
            scrolling={yes}
            styles={{ border: '2px solid gray', borderRadius: '30px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default LatestTrends;
