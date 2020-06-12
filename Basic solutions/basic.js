alert("Give me a next Question Answer?");
var name = prompt('Enter Your Name',"name");

var conf= confirm(`Your Name is ${name}`);

alert(`Your is ${name} and that is ${conf}`);

var age=prompt("What is Your Age :","Enter Your Age Here");
var con=confirm(`Do you Agree ${age} This is Your Age`);

if(age>=18){
    document.writeln("<b>")
    document.write(`congo! you eligible bcoz your age is ${age}`);
    document.body.style.fontSize="50px";
    document.body.style.backgroundColor="pink";
}
else{
    document.write(`sorry you are not aligible bcoz your age is ${age}`);
}




