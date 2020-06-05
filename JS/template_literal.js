
//declare Variables
let stdname1="Ankit";
let stdname2="dinesh";

//Es5
console.log("the first Student name is " +stdname1+ ".the second student name is "+stdname2);

//ES6
console.log(`the first student name is ${stdname1} the second student name is`)

//declare variable
const person = {
    name:"ankit",
    address:"laxminagar",
    course:"python"
};

//ES5
let msg=("my name is " +person.name + "\naddress " +person.address+ "cource is "+person.course);
console.log(msg)

//ES6
let data= `my name is ${person.name} and my addres  is ${person.address} and my cource is ${person.course}`;



let address="goregaaon";
let fname="Ankit";
let lname="Singh";

let box=`hello ${address}   
<h1>this is first line</h2>
<p>do you know what is your first name ${fname}
and last name ${lname} 
` ;
console.log(box)

