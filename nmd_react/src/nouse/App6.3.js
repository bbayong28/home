import { useState,useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once.")
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.")
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.")
  }, [counter]);
  useEffect(() => { 
    console.log('i run when keyword & counter changes')
  },[keyword, counter])
  // 새로고침 했을 때도(값이 없을때도) console창에 찍힘
  //useEffect(() => {
  //    console.log("Search For", keyword);
  //}, [keyword]);

  //새로고침 했을 때도(값이 없을때도) console창에 찍힘 그래서 조건문(keyword가 빈 값이  아니라면, 그때 keyword를 검색하자.)을 만들어 넣어줌.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword]);
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>      
      <button onClick={onClick}>click me!!!!</button>
    </div>
  );
}

export default App;


// 5.0
//node.js 와 npx create - react - app.으로 기초설정을 했다.


// 5.1
// prop로 이름을 한번 전달 해보고 PropTypes를 체크하기 위해 npm i prop - types를 설치하고 import PropTypes from "prop-types" 해주기!
// css의 module화를 위해 css파일을 만들어 주고 import 해줌
// 학원에서는 App.css로 만들고 import "./App.css"로 연결해서 썼는데,
// 니코쌤은 App.module.css을 써서 import styles from "./App.module.css"으로 연결해줌  사용할때 className = { styles.btn }이런식으로 사용함.
// 여기서 주의!!!! css파일을 만들때 modul.css가 아니면 적용이 안됨.
// 파일1.module.css, 파일2.module.css, 파일3.module.css를 import 해주고 className을 className = { 파일1.btn }, className = { 파일3.title }, className = { 파일3.inner }으로 가져와서 써도됨
// 즉, css의 module화 -> 컴포넌트들이나 스타일들이 독립적이게 유지시켜주는 기능!!


//6.0
// useState가 반환값으로 array를 줄거다.
// state가 변할 때 a모든 component는 다시 실행되고, 모든 code들도 다시 실행된다.
// 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하고  싶을 때는 어떻게 할까 ? 6.1에서 알려주마!!!


//6.1
//특정 코드들이 첫번째 component render에서만 실행되게 하는지 ? state가 변화해도 그 코드는 다시 실행되지 않게!
//useEffect는 두개의 argument를 가지는 함수이다.
//useEffect(한번만 실행하고 싶은 코드 함수, [])   => useEffect(() => { }, [])
//함수를 만들어서 안에 넣어 쓰거나 바로 만들어써도 됨.
                /*
                const iRunOnlyOnece = () => {
                    console.log('i run only once.')
                };
                
                useEffect(iRunOnlyOnece, []); 
                */
                
                //or
                
                /*
                useEffect(() => {
                    console.log("i run only once.")
                },[])
                */
//첫번째 argument는 딱 한번만 실행하고 싶은 코드 두번째 argument는 ..................................6.2에서 공부!!


//6.2


// 6.3
// code를 언제 실행할지 선택하는 useEffect .
// useEffect 는 react.js가 동작하는 관점에서 말하면 방어막 같은것 state를 변화시킬 때 component를 재실행 시키는 것!
//
//       처음실행(렌더)시 딱 한번만 실행하고 다시는 하지 말아라.
//       useEffect(() => {
//         console.log("i run only once.")
//       }, []);
//       시작할 때 + keyword 변화시에 실행하라
//       useEffect(() => {
//         console.log("i run when 'keyword' changes.")
//       }, [keyword]);
//       시작할 때 + counter 변화시에 실행하라
//       useEffect(() => {
//         console.log("i run when 'counter' changes.")
//       }, [counter]);
//       시작할 때 + keyword 나 counter 둘 중 하나가 변화시에 실행하라
//       useEffect(() => {
//         console.log('i run when keyword & counter changes')
//       },[keyword, counter])

