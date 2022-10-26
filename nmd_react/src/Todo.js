import { useState } from 'react'
 
function App() {
  const [toDo, setToDo] = useState("");
  //([])기본값으로 비어있는 array가 되어야 하기 때문에
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  //console.log(toDo)
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(toDo);
    if (toDo === "") { 
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
    
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos({ toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do"
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {/* toDos라는 array를 가져와서 그 array의 item들을 변형해서 li가 되도록 했다. map 함수 첫번째 argument 는 value, 두번째 argument는 index */}
        {toDos.map((item, idx) => (
          /* key는 고유값이어야 함 */
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
      
      
    </div>
  )
}


export default App;


//const food = [1,2,3,4]
//food에 6을 추가 해주고 싶다.
//[6.food] -> [6, Array(4)]   (내가 원하는 모습 x)
//[6, ...food] -> [1,2,3,4,6]   (내가 원하는 모습 o)


//map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 ㅂ꿔주는 역할을 하고 그건 결국 새로운 배열로 return해주어야 함.
//key는 고유값이 어야함.
//map 함수 첫번째 argument 는 value, 두번째 argument는 index