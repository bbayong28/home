const toDoForm = document.getElementById("todo-form");
//const toDoInpit = toDoForm.querySelector("input");
const toDoInpit = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

//JSON.stringify는 javascript object나 array 또는 어떤 javascript 코드건 간에 string으로 만들어줌
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

/* 7.2 */
//삭제
function deleteToDo(event) { 
    //console.dir(event.target.parentElement)
    const li = event.target.parentElement;
    li.remove();
}

/* 7.1 7.2 */
function paintToDo(newToDo) {
    //console.log("i will paint", newToDo)
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    //console.log(li)
    toDoList.appendChild(li);
}

/* 7.0 7.1*/
function handleToDoSubmit(event) { 
    //form에 뭐 적고 enter누르면 새로고침 되던게 막힘
    event.preventDefault();
    //console.log(toDoInpit.value);
    //input의 현재 value를 새로운 변수(newToDo)에 복사하는 것 따라서 그 다음에 우리가  ""으로 비우든 무슨 짓을하든 newToDo변수와 아무 상관이 없어거 값유지
    //따라서 newToDo는 input의 value를 비우기 전 값을 나타내는 string이다
    const newTodo = toDoInpit.value;
    //console.log(toDoInpit.value); gkgk
    toDoInpit.value = "";
    //console.log(newToDo, toDoInpit.value); gkgk, "" -> gkgk, (공백)
    //텍스트(newTodo)를 toDos array에 push하고
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

