import React from "react";
import Slogan from "../component/Slogan";
import SubImg from "../component/SubImg";
import "../Style/MainImg.css";
import "../Style/Subpage.css";
import "../Style/Acolor.css";
import { Link } from "react-router-dom";


function SLPS() {
  function Mark(Name) {
    return () => {
      const component = document.getElementById("slpsComponent");
      const all = component.querySelectorAll('*')
      all.forEach(all => {
        all.style.backgroundColor = '';
      });

      const marks = document.querySelectorAll(`.${Name}`);
      marks.forEach(mark => {
        mark.style.backgroundColor = 'yellow';
      });
    }
  }

  return (
    <div id="slpsComponent">
      <Link to="/"><Slogan></Slogan></Link>
      <SubImg src="/img/allpsBanner.png" text="ALPS란?"></SubImg>
      <div className="subAll">
        <div className="subMenu">
          <Link to="/Alps">ALPS?</Link><br />
          <Link to="/Seafood">수산물 정보</Link><br />
          <Link to="/New">최신동향</Link><br />
          <Link to="/Reference">참고사이트</Link>
        </div>
        <div className="subText">
          <h1>Advanced Liquid Processing System</h1>
          <p>
            다핵종 제거설비는 2011년 후쿠시마 원자력 발전소 사고 이후 2012년에 개발된 설비로
            양수 및 여과 시스템으로 일련의 화학 반응을 통해 오염된 물에서 62가지의 방사성 핵종을 제거할 수 있습니다.
            그러나 오염수에서 <span className="suso">삼중수소</span>를 제거 할 수 없습니다.
          </p>
          <img src={process.env.PUBLIC_URL +"/img/alpsWater.png"} alt="" />
          <br />

          <h3>
            왜 삼중수소를 제거할 수 없는가?
          </h3><br />

          <p>물에서 <span className="suso">삼중수소</span>를 제거하는 것은 기술적으로 매우 어렵습니다. <span className="suso">삼중수소</span>는 수소의 <span className="dongwi">동위원소</span>이며, 삼중수소를
            함유한 물을 일반 수소를 함유한 물과 거의 동일한 화학적 특징을 가지고 있습니다.
            <span className="suso">삼중수소</span>가 소량의 물에 고농축되었을 경우 <span className="hakyun">핵융합 시설</span>에서 회수할 수 있는 기술이 존재하지만, 후쿠시마 제1원전의
            오염수는 <span className="suso">삼중수소</span>의 농도가 낮아 기술을 적용할 수 없습니다.
          </p>
          
          <img src={process.env.PUBLIC_URL +"/img/clean.png"} alt="" />
          <br />
          <h3>
            ALPS 처리수의 관리
          </h3><br />
          <p>
            후쿠시마 제1원전에서 생산된 오염수는 준비된 탱크에 처리되어 현장에 보관되고 있었으나 저장되는 물의 양이
            꾸준히 증가하여 탱크 공간이 최대 용량에 이르렀고 오염수 폐기가 필요하다고 여겨져 2021년 4월, 일본 정부에서
            국내 규제 승인을 받아 ALPS 처리수를 처리하는 방침을 발표했습니다.
          </p>
          <p>
            <span className="Tritium">트리튬</span> 이외의 방사성 물질 농도가 국가 기준을 충족시킬 때까지 재정화 처리하고 <span className="Tritium">트리튬</span>의 규제 기준을
            충분히 충족시키도록 해수로 희석하는 것이 해양 방출 공정입니다.
          </p>
        </div>
      </div>
      <div className="subAll">
        <br />
        <br />
        <div className="subWord">
          <p>
            당신이 몰랐던 단어
            <li><span onClick={Mark("suso")}>삼중수소</span>: 세 개의 수소 원자로 이루어진 분자</li>
            <li><span onClick={Mark("dongwi")}>동위원소</span>: 같은 원소이지만 중성자의 수가 서로 다른 원자의 형태를</li>
            <li><span onClick={Mark("hakyun")}>핵융합 시설</span>: 두 가지 가벼운 원자핵이 융합하여 에너지를 생성하는 시설</li>
            <li><span onClick={Mark("Tritium")}>트리튬</span>:수소의 동위원소로, 핵융합 연구에서 사용되며, 중성자 발생과 깨끗한 에너지 생성에 관심을 받는 원소</li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SLPS;