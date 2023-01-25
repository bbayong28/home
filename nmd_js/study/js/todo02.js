const toDoForm = document.getElementById("todo-form");
//const toDoInpit = toDoForm.querySelector("input");
const toDoInpit = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
// application이 시작될 때마다 toDos array는 항상 비어있기 때문에 새로운 것만 저장된다.
//그래서 newToDo를 작성하고 form을 submit 할 때마다 newToDo를 toDos array (빈 array)에 그냥 push 하게 된다.

//const toDos = []; let을 바꿈으로써 업데이트가 가능하도록 됨
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { 
    event.preventDefault();    
    const newTodo = toDoInpit.value;
    toDoInpit.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    //toDos.push(newTodo);
    toDos.push(newTodoObj);
    //paintToDo(newTodo);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

function sayHello(item) { 
    console.log("this is the turn of", item )
}


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if (savedToDos !== null) {  
    const parsedToDos = JSON.parse(savedToDos);
    //toDos에 paintToDo를 넣어서 전에ㅔ 있던 toDo들을 복원할 거임
    toDos = parsedToDos;
    //console.log(parsedToDos)
    //새로입력한것만 저장되고 새로고침하면 기존건 날라감
    //왜냐하면 application이 시작될 때 toDos array는 항상 비어있기 때문에
    parsedToDos.forEach(paintToDo);    
}

paintToDo({text:"a", id:1212121})
