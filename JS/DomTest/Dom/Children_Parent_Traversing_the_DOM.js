console.log( "welcome to Ankit page");
let cont=document.getElementById("first");

let pro=document.getElementsByClassName("heading");
//change text
document.getElementById("first").innerHTML="child first";
document.getElementById("first").innerText="by by";

//change style
document.getElementById("first").style.color="blue";

//check length
let a=document.anchors.length;
let b=document.links.length;

//check documents values
let c=document.all;
console.log(a);
console.log(b);
console.log(c);




console.log(pro);



