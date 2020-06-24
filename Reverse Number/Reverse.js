function pain() {
    var a, no, b, temp = 0;
    var num = Number(document.getElementById('text1').value);
    while (num > 0) {


        a = num % 10;
        num = parseInt(num / 10);
        temp = temp * 10 + a;

    }
    var result1 = document.getElementById('result').innerHTML = "This is Your Result:" + temp;
}