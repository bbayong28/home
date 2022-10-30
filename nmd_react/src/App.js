import { 
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import Detail from './routes/Detail';


function App() { 
  return(
      <Routes>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/hello" element={<h2>hello</h2>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
  )
}


export default App;
