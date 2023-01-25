import { 
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import Detail from './routes/Detail';


function App() { 
  return(
      <Routes>
        {/* React Router에 이rul이 변수를 받을거라고 말해주면 됨(:id라고 표시한것) -> Detail.js에 가서 useParams()를 사용 -> 이함수를 사용하면  React Router은 바로 이 변수의 값을 넘겨줌 */}
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/hello" element={<h2>hello</h2>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
  )
}


export default App;
