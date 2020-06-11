function add(){
    num1 = document.getElementById("id1").value;
    num2 = document.getElementById("id2").value;
   
    document.getElementById("result").innerHTML = +num1 + +num2;
}
function substractby() {
    num1 = document.getElementById("id1").value;
    num2 = document.getElementById("id2").value;

    document.getElementById("result").innerHTML = num1 - num2;

}
function multiplyby() {
    num1 = document.getElementById("id1").value;
    num2 = document.getElementById("id2").value;

    document.getElementById("result").innerHTML = num1 * num2;

}
function divideby() {
    num1 = document.getElementById("id1").value;
    num2 = document.getElementById("id2").value;

    document.getElementById("result").innerHTML = num1 / num2;
}
function percentageby() {
    num1 = document.getElementById("id1").value;
    num2 = document.getElementById("id2").value;

    document.getElementById("result").innerHTML =(num1*100/num2)+"%";
}
