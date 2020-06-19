//array.copyWithin(target, start, end)
var arr = ['Ankit','Ram','Shyam' , 'Mukesh']
var result = arr.copyWithin(0,1)
console.log(result);
//op:-[ 'Ram', 'Shyam', 'Mukesh', 'Mukesh' ] and here replace index value[0] to one and end index value double 

var integer =[0,1,2,3,4,5,6,7,8,9]
var result1 = integer.copyWithin(0,1) /* 0 value replace with 1 and end value get double */
var result1 = integer.copyWithin(0,1,4) /* 0 index replace with 1 and index value[3] element 4 are get double */

console.log(result1); 
/* op;-[
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 9
  ] */
  
  /* [
    1, 2, 3, 3, 4,
    5, 6, 7, 8, 9
  ] */

  const array1 = ['A', 'B', 'C', 'D', 'E'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array [ 'D', 'B', 'C', 'D', 'E' ]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array [ 'D', 'D', 'E', 'D', 'E' ]
