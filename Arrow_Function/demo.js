//Arrow functions, the basics
let a = function sum(a, b) {
    return a + b;

}
console.log(a(2, 4));


//(2 parameter ) =>method 2
let sum = (a, b) => a + b;
console.log(sum(2, 5));

//(parameter 1) => method 3
let double = n => n * 2;
console.log(double(4));
//op:-8

//there are no arguments
let sayHi = () => {
    alert("Hello!")
}
//console.log(sayHi());

//dynamically create a function
let age = prompt("What is Your Age ?", 18);

let welcome = (age < 18) ?
    () => alert("Hello!") : () => alert("Greetings!");
console.log(welcome());

//Multiline arrow functions
//Note:- /   / if we use curly braces, then we need an explicit "return"
let sum1 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(sum1(2, 2));

//Replace Function Expressions with arrow functions 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask("DO YOU Agree ?",
    function () {
        alert("You agreed");
    },
    function () {
        ("You Cancelled The execution");
    });


//Return object
const sayHello = () => ({ msg: 'hello' })
console.log(sayHello());
    //op:-{ msg: 'hello' }




