const str = "Ankit Singh"
let re = /h$/; //it mens end with h
    re = /^h$/ //null

let result = str.match(re)
console.log(result);

/* op:-
[ 'h', index: 10, input: 'Ankit Singh', groups: undefined ] */

