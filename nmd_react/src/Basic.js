import { useState, useEffect } from "react";

//  function Hello() {
//    
//    useEffect(() => {
//      //버튼을 클릭하면 console에 create가 찍히고 
//      console.log("created :)");
//      //또다시 버튼을 클릭하면 console에 destroy가 찍힘 -> 즉 funcitono을 파괴할때 , function이 없어질때 destroy를 하고 싶었음.
//      // 그럴땐 return 함수를 써줌. 이렇게하면 show하면서  create가, hide 하면서 destroy가 콘솔에 찍힘
//      // 이런 return()=> console.log("destroy :(")함수를 Cleanup function 이라고 부름
//      return()=> console.log("destroy :(")
//    },[])
//    return<h1>Hello</h1>
//  }


// function Hello() {
//   function byeFn() {
//     console.log("Bye :(")
//   }
//   function hiFn() { 
//     console.log("Hi :)");
//     //이 component가 언제 파괴될 지도  알고 싶으면 hiFn을 return해주어야 함 -> 이게  cleanup function
//     return byeFn;
//   }
//   
//   useEffect(hiFn,[])
//   return<h1>Hello</h1>
// }

function Hello() {

  useEffect(function () {
    console.log("hi:)");
    return function () {
      console.log("bye:(");
    };
  }, []);


  useEffect(() => {
    console.log("hi:)");
    return () => console.log("bye:(");
  }, []);  
  
  return<h1>Hello</h1>
}



function App() {  
  const [showing, setShowing] = useState(false); 
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      { showing ? <Hello/> : null}
      <button onClick={onClick}>{ showing? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
