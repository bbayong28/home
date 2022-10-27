import React, { useEffect, useState } from "react"

function App() { 
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (e) => {
    setCost(e.target.value);
    setNeed(1);
  }
  const handleInput = (event) => {
    setNeed(event.target.value);
  } 

  useEffect(() => {
    //개발자도구 열어서 Network가면 tickers 있음. 많은 코인 정보를 받았음.
    //response로 부터 json을 추출해내고 싶음  .then을 써줌
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
    <h1>The coins!{loading ? "" :`Here are..${coins.length} coins`}</h1>
    {loading ? <strong>loading...</strong> : <select onChange={onChange}>
      <option>Select Coin!</option>
      {coins.map((coin , index) =>
      <option 
        key={index} 
        value={coin.quotes.USD.price} 
        id={coin.symbol}
        symbol = {coin.symbol} >
        {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
        </option>
       )}
    </select>}
    <h2>Please enter the amount</h2>
    <div>
      <input type="number" value={need} onChange={handleInput} placeholder="dollor"/>$
    </div>
    <h2>You can get {need/cost}</h2>
  </div>);
}
export default App;


/*
const conTit

 (
    1: <dfdf/>
    2: <fffff/>
    3: <ee/>
    4: <rr/>
)[conTit] 

*/