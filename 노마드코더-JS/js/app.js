const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) { 
    //이걸 호출하면 브라우저의 기본동작을 막아줌
    event.preventDefault();
    //console.log(loginInput.value);
    //const username = loginInput.value;
    /* 
    if (username === "") {
        alert("이름을 작성해 주세요!")  //html에서 input에 require하면됨
    } else if (username.length > 15) { //html에서 input에 maxlength="15"하면됨
        alert("이름이 너무 길어요!")
    } 
    */
    console.log(loginInput.value)

}

loginForm.addEventListener("submit", onLoginSubmit)
