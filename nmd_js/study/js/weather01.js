const API_KEY="69312e4bcce28b39752638a4f8b2ebe9"

function onGeoOk(position) { 
    //latitude 위도 longitude 경도
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live it", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    //console.log(url);
    //fetch는 promise다 promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 거야. 서버에 뭔가 물어봤는데 응답하는데 5분걸린다 고해보자 그러면 서버의 응답을 기다려야해. 그래서 then을 사용하는데 
    //그러면 URL을 fetch하고 그 다음으로 response를 받아야 한다. 그리고 response의 json을 얻어야 한다.
    //fetch(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => { 
        //console.log(data.name, data.weather[0].main)
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            //const name = data.name;
            city.innerText = data.name;
            //const weather = data.weather[0].main;
            //weather.innerText =data.weather[0].main;
            weather.innerText =` ${data.weather[0].main} / ${data.main.temp}`
    });

}
function onGeoError() { 
    alert("Can't find you. No weather for you.")
}

//getCurrentPosition는 2개의 인자가 필요하다
//하나는 모든 게 잘 됐을 때 실행 될 함수
//하나는 에러가 발생했을 때 실행 될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//API 받아올 주소 : openweathermap.org
//API는 다른 서버와 이야기할 수 있는 방법
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=35.209216&lon=129.0633216&appid=69312e4bcce28b39752638a4f8b2ebe9 -> 화씨온도
//https://api.openweathermap.org/data/2.5/weather?lat=35.209216&lon=129.0633216&appid=69312e4bcce28b39752638a4f8b2ebe9&unit=metric -> 섭씨온도
//unit=metric붙이면 섭씨온도로 바꿔줌