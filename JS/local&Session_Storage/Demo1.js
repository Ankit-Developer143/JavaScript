
var impArr=['onion','tomato','ladifinger'];

//set the key and value in local storage
localStorage.setItem('name','Ankit');
localStorage.setItem('name2','Ramesh');

//here use JSON.stringify its take object and return String
localStorage.setItem('onion',JSON.stringify(impArr));//op:-	["onion","tomato","ladifinger"]


//remove one key value 
//localStorage.removeItem('name')

//clear all the Storage
//localStorage.clear();

//get the value from local storge
let display=localStorage.getItem(name);

//print Array Values
display=JSON.parse(localStorage.getItem('onion'));//op:-["onion", "tomato", "ladifinger"] it is array formats
console.log(display);

//Session Storage are similar to Local Storage
//but session storage store the value temprory basis
//And local save permanently
sessionStorage.setItem('College','sPatkar');
sessionStorage.setItem('Position','sStudent');

let display2=sessionStorage.getItem('college');
console.log(display2);

