"use strict";

//Multi parameter needs Paranthesis
var greeting = function greeting(firstName, LastName) {
  return "Hello ".concat(firstName, " ").concat(LastName);
};

console.log(greeting("Ankit", "Singh")); //op:-Hello Ankit Singh  
//Arrow Function in using map

var arr = ['Ankit', 'Joy', 'Peter'];
var nameLength = arr.map(function (name) {
  return name.length;
});
console.log(nameLength); //op [ 5, 3, 5 ]
//Shorter

var nameLength1 = arr.map(function (name) {
  return name.length;
});
console.log(nameLength1); //[ 5, 3, 5 ]