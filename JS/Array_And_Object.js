const arr=[1,2,3,4,5,6,7,9];
let myarr2=new Array(24,54,78,32,44);
console.log(myarr2);

//array properties

//isArray properties give boolean value
console.log(Array.isArray(arr));

//pop remove last element in array
console.log(arr.pop())
console.log(arr)

//push add element last in the array
console.log(arr.push(25))
console.log(arr)

//unshift add the element  first  position in the array
console.log(arr.unshift(22));

//Check position
console.log(arr.indexOf(4));
console.log(arr)


//reverse 
console.log(arr.reverse());
console.log(arr)


//append
const marks4=[5,4,5,4,5,7];
//console.log(marks4.concat(arr))
console.log(arr.concat(marks4))
console.log(arr)