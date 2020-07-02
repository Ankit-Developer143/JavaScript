
//For Loops Simple 
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/* op is  [1,2,3,4,5,6,7,8,9]*/


let arr1 = ["Ankit", "john", "Gandhi", "Ali"]
for (let i = 0; i < arr1.length; i++) {
}
console.log("The output is " + arr1);
/* op:- The output is Ankit,john,Gandhi,Ali */



//for of
let arr = ["Ankit", "john", "Gandhi", "Ali"]
for (iterate of arr) {
    console.log(iterate);
}
/* Second op is
Ankit
john
Gandhi
Ali
 */


 //Store in another Variable

 var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
 var text = '';
 
 for (let i = 0; i < cars.length; i++) {
     text += cars[i];
     
     
 }

 
console.log(text);

/* op:- BMWVolvoSaabFordFiatAudi */


