 window.onload = function() {
    const wrap =  document.querySelector('.wrap');
    const slider = wrap.querySelector('.slider');
    const slider_item = slider.querySelectorAll('li')
    const move_btn = wrap.querySelector('.arrow');

    /* ul의 넓이 계산해주기 */
    const liWidth = slider_item[0].clientWidth;
    const sliderWidth = liWidth * slider_item.length;
    slider.style.width = `${sliderWidth}px`;

    /* 리스너 설치하기 */
    let currentIdx = 0; // 슬라이드 현재 번호
    let translate = 0; // 슬라이드 위치값
    move_btn.addEventListener('click', moveSlide);

    function moveSlide(event) {
        event.preventDefault();
        if (event.target.className === 'xi-arrow-right') {
             if (currentIdx !== slider_item.length -1) {
                translate -= liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx += 1;
            }
        } else if (event.target.className ===  'xi-arrow-left') { 
            if (currentIdx !== 0) {
                translate += liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx -= 1;
            }
        }
    }

}

/* append 붙이면 loop됨 */
 
