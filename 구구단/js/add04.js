var x = 0;
var sum = 0;
while (1) { 
    x += 3;
    if(x>100)
        break;
    sum += x
    document.write(x + " ")
}
document.write("<p/>")
document.write("1~100까지 수 중 3의 배수 합 : <b>" + sum + "</b>")