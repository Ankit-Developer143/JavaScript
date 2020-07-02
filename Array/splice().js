//let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
var result = fruits.splice(0, 2); //delete count start from 0 to index 1
console.log(result);
console.log(fruits);

/* op:

  remove:[ 'Apple', 'Banana' ]

original Array: [ 'Mango', 'Orange' ]

*/

//Remove old add new element in array without creating new array

var fruits1 = ['Apple', 'Banana', 'Mango', 'Orange'];
var result1 = fruits1.splice(0, 2, 'val1', 'val2')/* here 0 to index[1] delete and replace with new values */

console.log(fruits1);/* op:-[ 'val1', 'val2', 'Mango', 'Orange' ] */


