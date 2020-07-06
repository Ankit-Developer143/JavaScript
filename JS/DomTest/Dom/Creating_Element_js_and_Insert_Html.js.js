const li = document.createElement('li');

const text = document.createElement('textarea');

//Creating id
li.id = "list-item";

//Creating class
li.className = "list-class"

//set Attribute
li.setAttribute('title', 'new-item');

//create text inside li
li.appendChild(document.createTextNode("Hello world"))

//Append child in HTML page
document.getElementById("ul-content").appendChild(li)

console.log(li);

text.id = "text";
text.className = "text-class";
text.setAttribute('title', "title")
text.appendChild(document.createTextNode("This is text area"));

document.getElementById("form").appendChild(text);

console.log(text);
















