import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) { 
  return (
    <header>
      {/* <h1><a href='/' onClick={function (e) { 
        e.preventDefault(e)
        props.onChangeode();
      }}>{ props.title }</a></h1> */}
      <h1><a href='/' onClick={ (e) => { 
        e.preventDefault()
        props.onChangeode();
      }}>{ props.title }</a></h1>
    </header>
  )
}

function Nav(props) {

  //const lis = [
  //    <li><a href='/read/1'>html</a></li>,
  //    <li><a href='/read/2'>css</a></li>,
  //    <li><a href='/read/3'>js</a></li>
  //]
  const lis = []
  
  for (let i = 0; i < props.topics.length; i++) { 
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(e) => { 
      e.preventDefault();
      
      //슷자를 속성(props)에 넣으면 문자가 됨 그래서 props.onChangeMode(e.target.id); => 문자가됨 그걸 Number() 써서 묶어줌. 그럼 숫자가 됨.
      props.onChangeMode(Number(e.target.id));
    }
    }>{ t.title }</a></li>)
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) { 
  return (
    <article>
      <h2>{ props.title }</h2>
      {props.body}
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(e) => { 
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name='title' placeholder='title' /></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"/> </p>
      </form>
    </article>
  )
}

function Update(props) { 
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(e) => { 
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name='title' placeholder='title' value={title} onChange={(e) => {
          //console.log(e.target.value);
          setTitle(e.target.value);
        }} /></p>
        <p><textarea name='body' placeholder='body' value={body} onChange={(e) => { 
          //console.log(e.target.value);
          setBody(e.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"/></p>
      </form>
    </article>
  )
}


function App() {
  //const mode = 'WELCOME'

  //const _mode = useState('WELCOME')
  //const mode = _mode[0];
  //const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME'); 

  const [id, setId] = useState(null); 
  const [nextId, setNextId] = useState(4);

  //const topics = [
  //  {id : 1, title : 'html', body : 'html is...'},
  //  {id : 2, title : 'css', body : 'css is...'},
  //  {id : 3, title : 'js', body : 'js is...'}
  //]
  const [topics, setTopics] = useState([
    {id : 1, title : 'html', body : 'html is...'},
    {id : 2, title : 'css', body : 'css is...'},
    {id : 3, title : 'js', body : 'js is...'}
  ])

  let content = null;
  let contextControl = null;
  if (mode == 'WELCOME') { 
    content = <Article title="welcome" body="Hello, WEB"/>
  }
  else if (mode == 'READ') { 
    //content = <Article title="Read" body="Hello, Read" />
    let title, body = null;
      for (let i = 0; i < topics.length; i++) { 
        console.log(topics[i].id, id)
        if (topics[i].id == id) { 
          title = topics[i].title
          body = topics[i].body
      }
    }
    content = <Article title={title} body={body} />
    //contextControl = <li><a href='/update'>Update</a></li>
    contextControl = <li><a href={'/update/' + id} onClick={e => {
      e.preventDefault();
      setMode('UPDATE')
    }}>Update</a></li>
  } else if (mode == 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }} />
  } else if (mode == 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id == id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => { 
      console.log(title, body)
      const newTopics = [...topics]      
      const UpdatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i<newTopics.length; i++) { 
        if (newTopics[i].id === id) { 
          newTopics[i] = UpdatedTopic;
          break;
        }
      }
      setTopics(newTopics)
      setMode('READ')
    }} />
  }

  return (
    <div className="App">
      {/* <Header title="WEB" onChangeMode={function () {alert('Header')} }/> */}
      <Header title="WEB" onChangeMode={() => {
        //alert('Header')
        //mode = 'WELCOME'
        setMode('WELCOME');
      }} />
      {/* <Nav topics="topics"/> // 이렇게 하면 안되고 중괄호로 싸야함 */}
      <Nav topics={topics} onChangeMode={(id) => { 
        //alert(id)
        //mode = 'READ';
        setMode('READ');
        setId(_id);
      }} />
      { content }
      {/* <Article title="welcome" body="Hello, WEB"/>    */}
      <ul>
        <li>
          <a href='/create' onClick={(e) => {
            e.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
