
//BASIC REDUCTION   
/* The reduce method cycles through each number in the array much like it would in a for-loop. */
var arr = [5, 5, 5, 5]
var sum = arr.reduce((a, b) => a + b);
console.log(sum);
/* op :- 20 */

//this is the for loop addition method similar to reduce method
var c = 0
for (let i = 0; i < arr.length; i++) {
    c = c + arr[i];
}
console.log(c);
/* op :- 20 */



//The ES5 version of the Reduce Method In JavaScript​

var arr = [5,5,5,5]
var sum = arr.reduce(function (a,b) {
    return a+b;
    
})
console.log(sum);


/* We use const instead of var and we replace the word function with a “fat arrow” (=>) after 
the parameters, and we omit the word ‘return’.*/
