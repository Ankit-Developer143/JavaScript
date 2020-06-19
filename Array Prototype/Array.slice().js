/* Note:-Array.slice(start,end) or only (end) */

let arr = [0, 1, 2, 3, 4, 5, 6]
let result = arr.slice(1, 4);
console.log(result);
//op:-[ 1, 2, 3 ]



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); //here array start printing op from index[2] to end of array
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));//(Start,end)
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

function forecast(arr) {
    // Only change code below this line
  arr.slice(2,4);
    return arr.slice(2,4);;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  //op:-[ 'warm', 'sunny' ]
  
