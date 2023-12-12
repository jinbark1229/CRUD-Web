import React from "react";
import Slogan from "../component/Slogan";
import SubImg from "../component/SubImg";
import "../Style/MainImg.css";
import "../Style/Subpage.css";

function SLPS() {
  return (
    <div>
      <Slogan></Slogan>
        <SubImg src="/img/allps.png" text="ALPS란?"></SubImg>
        <div className="subAll">
            <div className="subMenu"><div className="menu">메뉴</div> <div className="process">처리과정</div> <div className="manage">관리</div> <div className="news">관련 기사</div> </div>
            <div className="subText">
              <h1>Advanced Liquid Processing System</h1>
              <p>
                다핵종 제거설비는 2011년 후쿠시마 원자력 발전소 사고 이후 2012년에 개발된 설비로
                양수 및 여과 시스템으로 일련의 화학 반응을 통해 오염된 물에서 62가지의 방사성 핵종을 제거할 수 있습니다.
                그러나 오염수에서 <abbr title=" 세 개의 수소 원자로 이루어진 분자">삼중수소</abbr>를 제거 할 수 없습니다.
              </p><br/>

              <h3>
                왜 제거할 수 없는가?
              </h3><br/>

              <p>물에서 삼중수소를 제거하는 것은 기술적으로 매우 어렵습니다. 삼중수소는 수소의 동위원소이며, 삼중수소를
                함유한 물을 일반 수소를 함유한 물과 거의 동일한 화학적 특징을 가지고 있습니다.
                삼중수소가 소량의 물에 고농축되었을 경우 핵융합 시설에서 회수할 수 있는 기술이 존재하지만, 후쿠시마 제1원전의
                오염수는 삼중수소의 농도가 낮아 기술을 적용할 수 없습니다.
              </p><br/>

              <h3>
                ALPS 처리수의 관리
              </h3><br/>

              <p>
                후쿠시마 제1원전에서 생산된 오염수는 준비된 탱크에 처리되어 현장에 보관되고 있었으나 저장되는 물의 양이
                꾸준히 증가하여 탱크 공간이 최대 용량에 이르렀고 오염수 폐기가 필요하다고 여겨져 2021년 4월, 일본 정부에서
                국내 규제 승인을 받아 ALPS 처리수를 처리하는 방침을 발표했습니다.
              </p>
              <p>
                트리튬 이외의 방사성 물질 농도가 국가 기준을 충족시킬 때까지 재정화 처리하고 트리튬의 규제 기준을
                충분히 충족시키도록 해수로 희석하는 것이 해양 방출 공정입니다.
              </p>
            </div>
        </div>
    </div>
  );
}

export default SLPS;
