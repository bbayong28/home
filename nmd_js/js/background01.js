const images = ["0.jpg", "1.jpg", "2.png", "3.png", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage)

const bgImages = document.createElement("img");

bgImages.src = `./img/${chosenImage}`
bgImages.classList.add('bg_img')
//bgImages.style.width = "100%"
//bgImages.style.height = "100vh"

//console.log(bgImages);

//appendChild() -> bgImages를 body에 append시키는것 append -> 가장 뒤에, prepend -> 가장 위에
document.body.appendChild(bgImages)
//이미지가 html에서 가장 위에 감.
//document.body.prepend(bgImages)