import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Style/MainImg.css";

function Total() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터를 가져오는 엔드포인트로 요청
        const response = await axios.get('http://localhost:4001/getData', {
          withCredentials: true,
        });

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
      {data ? (
        <div>
          <table className='apiBoard' border={0}>
            <thead>
              <tr>
                <th><span>일일현황<br />{data.response.body.items.item.dailyDate._text}</span></th>
                <th><span>누적현황<br />{data.response.body.items.item.accumulateYear._text}</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='apitit'>금일 검사 수</span><br /><span className='apiresult'>{data.response.body.items.item.dailyTotCnt._text}</span></td>
                <td><span className='apitit'>누적 검사 수</span><br /><span className='apiresult'>{data.response.body.items.item.accumulateTotCnt._text}</span></td>
              </tr>
              <tr>
                <td><span className='apitit'>금일 통과 수</span><br /><span className='apiresult'>{data.response.body.items.item.dailyPassCnt._text}</span></td>
                <td><span className='apitit'>누적 통과 수</span><br /><span className='apiresult'>{data.response.body.items.item.accumulatePassCnt._text}</span></td>
              </tr>
              <tr>
                <td><span className='apitit'>금일 부적합 판정 건수</span><br /><span className='apiresult'>{data.response.body.items.item.dailyFailCnt._text}</span></td>
                <td><span className='apitit'>누적 부적합 판정 건수</span><br /><span className='apiresult'>{data.response.body.items.item.accumulateFailCnt._text}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>)
}

export default Total;