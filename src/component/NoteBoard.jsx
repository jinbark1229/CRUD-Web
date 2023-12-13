import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoteBoard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터를 가져오는 엔드포인트로 요청
        const response = await axios.get('http://localhost:4001/getData');
        setData(response.data);
        // console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    // fetchData 함수 호출
    fetchData();
  }, []);
  return (
    <div className="notice">
      <Link to="Board">+더보기</Link>
      {data ? (
        <div>
          <table border={1}>
            <tbody>
              <tr>
                <th>일일현황{data.response.body.items.item.dailyDate._text}</th>
                <th>누적현황{data.response.body.items.item.accumulateYear._text}</th>
              </tr>
              <tr>
                <th>금일 검사 수<br />{data.response.body.items.item.dailyTotCnt._text}</th>
                <th>누적 검사 수<br />{data.response.body.items.item.accumulateTotCnt._text}</th>
              </tr>
              <tr>
                <th>금일 통과 수<br />{data.response.body.items.item.dailyPassCnt._text}</th>
                <th>누적 통과 수<br />{data.response.body.items.item.accumulatePassCnt._text}</th>
              </tr>
              <tr>
                <th>금일 부적합 판정 건수<br />{data.response.body.items.item.dailyFailCnt._text}</th>
                <th>누적 부적합 판정 건수<br />{data.response.body.items.item.accumulateFailCnt._text}</th>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}


    </div>)
}

export default NoteBoard;
