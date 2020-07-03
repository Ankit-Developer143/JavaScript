/* The destructuring assignment syntax is a JavaScript expression that makes
 it possible to unpack values from arrays, or properties from objects, into distinct variables */

var a, b, rest;
[a, b] = [1, 2]
console.log(a);//op:-1
console.log(b);//op:-2



[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rest);
//op:-
[
    3, 4, 5, 6,
    7, 8, 9, 10
]