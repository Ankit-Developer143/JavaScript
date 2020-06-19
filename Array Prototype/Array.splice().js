/* Array.splice(Start,deletecount,item) */


/* Remove 0 (zero) elements before index 2, and insert "drum" and "guitar" */
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)// removing element start to index[2] and delete all after index[2]
console.log(removed);
// myFish is ["mandarin", "sturgeon"] 
// removed is [], no elements removed


/* Removed 1 at index 3 */
let a = ["A","B","C","D"];
let output = a.splice(2,1)
console.log(output);
//[ 'C']
