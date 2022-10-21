const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

//submit은 엔터를누르거나 버튼을 클릭할때 발생한다는 사실을 기억하자!
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

function handleLinkClick(event) { 
    //alert("clicked!!!") 을 하면 alert창을 띄우고 확인누르면 새창 열림
    event.preventDefault();
    console.dir(event)
}

loginForm.addEventListener("submit", onLoginSubmit)
