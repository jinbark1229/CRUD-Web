import React from "react";
import SubImg from "../component/SubImg";
import Slogan from "../component/Slogan";
import "../Style/Subpage.css";
import { Link } from "react-router-dom";
function Seafood() {
  return (
    <div>
      <Link to="/"><Slogan></Slogan></Link>
      <div className="topBaner">
        <Link to="/Alps">ALPS?</Link><br/>
        <Link to="/New">최신동향</Link><br/>
        <Link to="/Reference">참고사이트</Link>
      </div>
      <SubImg src="/img/marine.png" text="수산물 정보"></SubImg>
      <div className="subAll">
        <div className="subMenu"><div className="menu">메뉴</div>
          <div className="process">처리과정</div>
          <div className="manage">관리</div>
          <div className="news">관련 기사</div> </div>
        <div className="subText">
          <h1>수산물 정보</h1>
          <br />
          <h3>
            일일방사능 검사
          </h3>
          <br />
          <p>
            식품의약품안전처 수입식품방사능안전정보에 따르면 식품 등의 기준 및 규격 검체채취 기준에 따라 검체를 채취하여 방사능 검사를 실시 관리하고 있으며 일반식품 1kg당 세슘 100<abbr title="방사능을 나타내는 단위로, 1초에 1개의 원자가 방사선을 방출하는 활동도를 나타냄">Bq(베크렐)</abbr> (단, 영아용 조제식, 성장기용 조제식, 영유아용특수조제식품, 영아용 조제유, 성장기용 조제유 및 유가공품, 아이스크림류 50Bq) 미만이 검출되어야 하며, 요오드 함유량 또한 일반식품 1kg당 100Bq(베크렐) 미만이 검출되어야 합니다.
          </p>
          <h3><br />
            일본산 수입식품
          </h3>
          <p><br />
            일본산 수입식품은 매 수입시 방사성 세슘과 요오드를 검사하는데, 기준치 이하라도 검출시에는 추가방사성 핵종 검사증명서를 제출한 식품만 수입하게 하고 있습니다. 다른 나라 수입 식품은 품목, 생산국에 따라 방사능 검사 빈도가 차등 적용되어 있고, 방사능 검사를 실시해 기준치 이내 적합한 식품등만 수입합니다. 부적합인 경우에는 관세청과 수입자에 통보한 후 제품을 폐기 또는 반송, 적합인 경우 적합한 수입식품 등만 통관하여 유통이 가능하게 조치하고 있습니다.
          </p>
          <h3><br />
            우리 바다, 우리 수산물
          </h3><br />
          <p>
            해양수산부 국립수산물품질관리원 등에서도 방사능 검사 현황을 제공하고 있어 생산단계와 유통단계의 수산물 방사능 검사 현황을 확인할 수 있습니다.해양방사성물질 긴급조사를 통해서도 우리 바다의 안전성 판단을 위한 신속한 정보제공 및 국내 해역에 미칠 영향을 선제적으로 감시하고 있습니다. 우리나라 주변 해류 유입경로 및 오염수의 예상 이동 경로를 고려하여 국내(5개 권역, 75개 정점)해역 및 국외(2개 권역, 8개 정점)해역을 조사하고 있습니다. 조사시 열흘 간격으로 월 3회 조사하며, 1회 조사 시 권역별 5개 정점, 총 25개 정점을 조사합니다(국외해역: 월 1회 8개 정점 조사).분석항목은 세슘134, 세슘137, 그리고 삼중수소입니다.
          </p>
        </div></div>
    </div>
  )
}
export default Seafood