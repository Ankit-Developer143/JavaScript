/* 
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species.
 You have to implement a function that returns the total number of legs of all the animals.
 */

var count = (chicken, cows, pig) => (chicken * 2) + (pig + cows) * 4;
console.log(count(1, 1, 1));

 //here legs sub-totals = 10