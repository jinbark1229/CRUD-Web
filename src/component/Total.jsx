import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Total() {
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
        <div className="MainImg">
            {data ? (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Total;
