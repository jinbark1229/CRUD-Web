import React, { useEffect, useState } from "react";
import SubImg from "../component/SubImg";
import Slogan from "../component/Slogan";
import "../Style/MainImg.css";
import "../Style/Subpage.css";
import "../Style/Acolor.css";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

function New() {
  const [scroll, setScroll] = useState(0);
  const [yes, setYes] = useState("yes");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // 스크롤 값에 따라 yes 상태를 업데이트
    if (scroll > 500) {
      setYes("yes");
    } else {
      setYes("no");
    }
  }, [scroll]);

  return (
    <div>
      <Link to="/"><Slogan></Slogan></Link>

      <SubImg src="/img/waterBanner.png" text="최신동향"></SubImg>
      <div className="subAll">
      <div className="subMenu">
        <Link to="/Alps">ALPS?</Link><br/>
        <Link to="/Seafood">수산물 정보</Link><br/>
        <Link to="/New">최신동향</Link><br/>
        <Link to="/Reference">참고사이트</Link></div>
        <div className="subText">
          <p>
            해양수산부에서는 국민들의 궁금한 점이나 청원사항을 게시판을 통해 수용하여
            이를 일본 측에 직접 전달하여 파악한 정보를 국민들에게 일일브리핑 형태로
            제공하고 있습니다.
          </p>
          <br />
          <p>다음을 참조하시기 바랍니다</p>
          <Iframe
            src="https://www.mof.go.kr/doc/ko/selectDocList.do?currentPageNo=1&bbsSeq=10&menuSeq=971&recordCountPerPage=&searchEtc1=&searchEtc2=&searchEtc3=&searchEtc4=&searchEtc5=&searchDeptName=&searchStartDate=&searchEndDate=&searchSelect=title&searchValue=%EC%9D%BC%EC%9D%BC%EB%B8%8C%EB%A6%AC%ED%95%91"
            width="1440px"
            height="900"
            scrolling={yes}
          />
        </div>
      </div>
    </div>
  );
}

export default New;
