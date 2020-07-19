function Prime() {
    var i, num, flag = true;
    num = Number(document.getElementById('text1').value);
    num = parseInt(num);
    for (i = 2; i <= num - 1; i++){
        if (num % i == 0) {
            flag = false;
            break;

        }
    }
    if (flag == true) {
        document.getElementById('result').innerHTML = ("This is Prime Number")

    }
    else {

        document.getElementById('result').innerHTML = ("This is Not a Prime Number")
    }


}

