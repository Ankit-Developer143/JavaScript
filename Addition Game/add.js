//random number appear when start game
var number1;
var number2;

number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

//Answer
var answer = number1 + number2;

//add click handler with check answer
var checkAnswer = document.getElementById('text1');
var value = checkAnswer.value;
var btn = document.getElementById("btn");


btn.onclick = function () {
    value = checkAnswer.value;
    if (value == answer) {
        alert('You are correct');
    } else {
        alert('You are incorrect, the answer was ' + answer);
    }

    document.getElementById('text1').value = "";
    document.getElementById('number1').innerHTML = "";
    document.getElementById('number2').innerHTML = "";
    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById('number1').innerHTML = number1;
    document.getElementById('number2').innerHTML = number2;

    answer = number1 + number2


};

