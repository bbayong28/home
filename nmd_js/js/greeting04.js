const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용한다.
//중요한 정보를 담은게 아니라서 대문자로 작성!
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //console.log(username);
    const username = loginInput.value;
    //localStorage.setItem("username",username)
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) { 
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//const savedUsername = localStorage.getItem("username")
const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);    
    loginForm.addEventListener("submit", onLoginSubmit);
} else { 
    //show the greeting
    paintGreetings(savedUsername);
}