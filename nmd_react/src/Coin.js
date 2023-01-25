import React, { useEffect, useState } from "react"

function App() { 
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    //개발자도구 열어서 Network가면 tickers 있음. 많은 코인 정보를 받았음.
    //response로 부터 json을 추출해내고 싶음 .then을 써줌
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      //.then((json) => console.log(json)); -> (2500) 어떻게 하면 이 데이터 들을 component에 보여줄 수 있을까? 이 데이터를 state에 넣으면 된다!!!!
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <h1>The Conins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
      <select>
          {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
        </select>
      )}
      
    </div>
  )
} 

export default App;