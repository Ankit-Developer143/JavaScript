function pain() {
    var a, b, num, temp = 0;
    num = Number(document.getElementById('text1').value);
    b = num;
    while (num > 0) {
        a = num % 10;
        num = parseInt(num / 10);
        temp = temp * 10 + a;
    }
    if (temp == b) {
        var result = document.getElementById('result').innerHTML = (`The number ${temp} is palindrome`);


    }
    else {
        document.getElementById('result').innerHTML = (`The number ${temp} is not palindrome`);
    }


}