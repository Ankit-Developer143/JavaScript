var btn = document.getElementById("btn1");
btn.addEventListener('click', func1);
btn.addEventListener('mousedown',func2);
btn.addEventListener('dblclick',func3);




function func1(e) {
    console.log("Thnks", e);
    e.preventDefault();
}
function func2(e) {
    console.log("Thnx its mouse down",e);
    e.preventDefault()
}
function func3(e) {
    console.log("Thnx its double click",e);
    e.preventDefault()
}




