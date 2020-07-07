var oldheading = document.querySelector(".header1");


/* *******************************************Replace*********************************************** */
//create Element
var newHeading = document.createElement('h1');

//Create id 
newHeading.id = "id1";
//Create Attribute & append 
newHeading.appendChild(document.createTextNode("Bye"));

//Parent class
var parent = document.querySelector('.main')

//replace child with parents
parent.replaceChild(newHeading, oldheading)

console.log(newHeading);//old;-heading Hello and old replace with new heading and created Bye;


/* *******************Remove Element**************************************************** */

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove Element
lis[0].remove();//op:-Before:-list1,list2,list3,list4, After:-list2,list3,list4

list.removeChild(lis[1]) //op :-list3,list4



