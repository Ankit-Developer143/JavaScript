
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

