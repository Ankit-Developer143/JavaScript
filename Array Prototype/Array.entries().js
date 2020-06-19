//The entries() method returns a new Array Iterator object that contains the key/value pairs
// for each index in the array.


var arr = ["a","b","c","d"]
var iterator = arr.entries();

console.log(iterator.next().value);//op:-[ 0, 'a' ]
console.log(iterator.next().value);//op:-[ 1, 'b' ]
console.log(iterator.next().value);//op:-[ 2, 'c' ]
console.log(iterator.next().value);//op:-[ 3, 'd' ]

/* Using a for…of loop */
var a = ['a', 'b', 'c'];
var iterator = a.entries();
for(let e of iterator)
console.log(e);

/*op:- [ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ] */

