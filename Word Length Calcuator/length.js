/*var display = function (msg) {
    document.getElementById('output').innerHTML = "the length is" +msg;

}
document.getElementById('btn1').onclick = function (event) {
    display(document.getElementById('str').value.length);

}*/

function submit() {
    var a = document.getElementById("str").value.length;
    document.getElementById("output").innerHTML = "The Result is:" + a;
    document.getElementById("output").style.fontSize = "40px";
}
