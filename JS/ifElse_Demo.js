//variable Declaration
let age=28;
const isDrive=true;
let vari;


//if-else Statment
if(age==18){
    console.log("Age is Valid")
}
else{
    console.log("Age is Not Valid")
}


//else if
if(age==10){
    console.log("valid")
}
else if(age==18){
    console.log("Age is equal to 18 it mens Valid")
}
else{
    console.log("Invalid")
}

//if both condition satisfy then value are true
if(isDrive && age>18){
    console.log("You can Drive")
}
else{
    console.log("Don't Drive");
}

//Check Variable are defined or not using undefined data Type


 if(typeof vari!=='undefined'){
     console.log("variable are Defined")
 }
 else{
     console.log("Not Defined");
 }

 //ternary operator
 console.log(age==18? 'Age is valid':'Age is Not Valid');


 //Switch case

 switch (age) {
     case 18:
        console.log("Age is Valid");
         break;

     case 28:
        console.log("your age is more than 18 "); 
 
     default:
        console.log("age is not valid");
         break;
 }