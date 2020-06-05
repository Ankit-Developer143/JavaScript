//concatination
let myname='Ankit';
let greeting=' Good Morning';
console.log(myname + greeting);

html="<h1>This is html tag</h1>"+
"<p>This is paragraph One</p>"
html=html.concat('this','') //using this to add multiple string
console.log(html);

//find length
console.log(html.length);

//lowercase
console.log(html.toLowerCase());

//UpperCase
console.log(html.toUpperCase()); //this all are does not affect on main String value

//indexof check element position
console.log(html.indexOf('One'));//op:-46

//check element through index value
console.log(html[1]); //op:-h

//lastIndexOf
console.log(html.lastIndexOf('T'));//check the value in last index

//charAt
console.log(html.charAt(4)); //op:-T

//endsWith  return boolean 
console.log(html.endsWith('s')) //return boolean value op:-true

//include to check the variable present or not
console.log(html.includes('is'));//true

//substring print index element using index value
console.log(html.substring(0,2));

//includes and slice are identical but if we use index value(-4) then slice print end 4 value but includes return all the string
console.log(html.slice(-4)); //op:-this

//split (break all the word) seprate the variable
console.log(html.split(' '));
console.log(html.split('>'));//remove > split and remove > and print as it is 

//replace 
console.log(html.replace('this','it')) //only affect one variable








