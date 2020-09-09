// Object is Not Iterable object example :- const obj = {'key1': 'value1'};

const a = [1, 2, 3];
const b = [...a];
console.log(b);
//op:-[ 1, 2, 3 ]

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
console.log([...arr1, ...arr2]) //op:-[ 0, 1, 2, 3, 4, 5 ]


