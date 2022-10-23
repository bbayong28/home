const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용한다.
//중요한 정보를 담은게 아니라서 대문자로 작성!
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


loginForm.addEventListener("submit", onLoginSubmit)