var x = 1;
var sum = 0;
while (1) { 
    sum += x;
    x++;
    if (x == 10001)
        break;
}
document.write("1~10000까지 합 : <b>" + sum + "</b>")