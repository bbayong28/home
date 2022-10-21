const clock = document.querySelector("#clock")

function sayHello () {
    console.log("hello")
}

//setInterval은 '매번' 일어나야하는 무언가(ex. 2초마다, 5초마다...), 2개의 인자를 받는다.
// 첫번째 인자(argument) : 내가 실행하고자 하는 function
//두번째 인자(argument) : 호출되는 function 간격을 몇 ms(milliseconds)로 할 지
setInterval(sayHello, 2000)


//setTimeout은 '얼마 후' 일어나야하는 무언가(ex. 2초후, 5초후 시작...), 2개의 인자를 받는다.
// 첫번째 인자(argument) : 내가 실행하고자 하는 function
//두번째 인자(argument) : 호출되는 function 을 몇ms만큼 기다릴 지 
setTimeout(sayHello, 5000)

function getClock() {
    const date = new Date();
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

//website가 load되자마자 getClock()을 실행하고 매초마다 다시 실행되도록!!!!
getClock() 
setInterval(getClock,1000)
