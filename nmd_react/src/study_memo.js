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


// 6.4
// Cleanup function에 대해 배운다(그렇게 많이 쓰이진 않음)
// 클릭하면 show가 되고 다시 클릭하면 hide가 되는 버튼이 있다.
// show하면서  create가, hide 하면서 destroy가 콘솔에 찍히게 하고 싶은데 그냥 console 에 적으면  show 할때 솔에 찍힘.
// funcition을 파괴할때, function이 없어질때 destroy를 하고 싶었을 땐 return 함수를 써줌. 이렇게하면 show하면서 create가, hide 하면서 destroy가 콘솔에 찍힘.
// 이런 return()=> console.log("destroy :(")함수를 Cleanup function 이라고 부름


// 7.0
//js의 push()함수 array(배열)의 마지막에 새로운 요소를 추가하고 난 후 변견된 배열의 길이를 반환하는 함수.
//to-do를 추가할 때 우리가 갖고있는 이 array(toDos)를 가져가서 한 가지를 더 넣고 싶을땐 setToDo("")요롷게 한다
// 가져가려고 앞에ToDo = ""를 적어서 ToDo = "" setToDo("")라고 적으면 안됨. 우리는 state를 일일히 직접적으로 수정할 수 없다는걸기억해야한다.
// 요점 state를 수정하지 않는 다는 점
// 배열 불러오기
// const food =[1,2,3,4] 가 있는데 배열에 6을 추가하고 싶을땐?
// [6, food]라 많이들 생각하지만 배열을 불러와야하는 것이기 때문에 저렇게 적으면 안됨 결과 -> [6, array(4)]로 나옴
// [6, ...food] 가 정답이다 -> [6,1,2,3,4]
// ex) PS> $data = 'Zero','One','Two','Three'
// PS> $data[3..1]
// Three
// Two
// One



// 7.1
// 수정하는 삼후를 사용할 때 두가지옵션이 있다는 걸 기억해야 한다.
// 1. 값을 보낼 때 setToDo("")이런식으로 보낼 수 있다. ToDo -> 이 값은 우리가 저장한 DAta를 가지고 있다.
// 그래서 만일 setToDo("")가 비어있는 string값으로 불려졌다면 toDo가 비어있는 string이 될거라는 것
// 2. 단순히 갑을 보내는게 아니라 함수를 보내는 방법
// 함수를 보낼 때 function의 첫번째 argument로 현재 state로 보냄
// 이 state를 계산하거나  새로운 state를 만들 수 있음     *currentArray*

// 7.2
//map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할을 하고 그건 결국 새로운 array로 return 해주어야 함.
//key는 고유값이어야함.
//map함수 -> 첫번째 argument는 value여야하고, 이건 각각의 toDo를 의미함.
// 두번째 argument는 index.
// toDos.map((item, index) => (
//    <li key={idx}>
//        {item}
//    </li >
// ))

// 7.3
// 영화 앱 만들기
//   fetch(
//      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
//    )
//      .then((response) => response.json())
//      .then((json) => {
//        setMovie(json.data.movies);
//        setLoading(false);
//        });
//  }, []);
// 위 처럼 적었던걸 async-await을 해서
//  const getMovies = async () => {
//    const json = await (
//    await fetch(
//      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
//    ).json();
//    //const json = await response.json();
//    setMovie(json.data.movies);
//    setLoading(false);
//  };
// 이렇게 적어준다./

// 7.4
// 옵셔널 체이닝(?.)
// 프로퍼티가 없는 중첩 객체를 에러없이 접근할 수 있음.(남용하지 말기)
// ?앞의 변수는 꼭 선언되어 있어야 한다.
// ex -> user?.address; 라면 user은 let,const, var을 사용해 정의 되어야 함.
// 옵셔널 체이닝은 선언이 왼료된 변수를 대상으로만 동작한다.


//7.5
// React router -> 페이지 전환
// npm i react-router-dom@6
// @6부터는 Switch 대신 Route로 바뀜
// @6 이전 <Route><Home/></Route>
// @6 이후 <Route element = {<Home/>} />
// 이것도 가능 <Route element = {<h2>hello</h2>} />
// Router 안에 Routes안에 Route!!!!!!!!!!
// Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다. html의 <a>태그와 비슷함.
// Link 새로고침 필요 X, <a>태그 새로고침 필요 O
// React Router은 다이나믹(동적) url을 지원해주기도 함 (다이나믹이란?  url에 변수를 넣을 수 있다는 의미)

// 7.6
// useParams()


//7.7
// npm i gh-pages -> 결과물을 github pages에 업로드 할 수 잇게 해주는 나이스한 패키지.
// npm run build -> 빌드시켜주는데 압축하고, 최적화하는 등 모든걸 해야하니까 시간이 조금 걸림.
// package.json에가서
// "hompage": "https://bbayong28.github.io/home/nmd_react/" 를 하단에 추가시켜주고
// script에 "deploy" : "gh-pages -d build", "predeploy":"npm run build"를 추가시켜준다
// 그리고 build 파일을 삭제해줌.








