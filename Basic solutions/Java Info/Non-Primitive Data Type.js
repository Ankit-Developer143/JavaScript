// BigInteger

/* BigInteger is a data numeric type of arbitry langth 
BigInteger created by appending n is the end of integer
For Example:-
 => const bigint = 1234567890123456789012345678901234567890n;
 or we Can declared as =>
 const bigIntfromNumber = BigInt(10)

*/

//Demo

const result = BigInt(10);
console.log(result);
//op:-10n

let demo = 1n + 2n;
console.log(demo); //Error
//op:-3n

//We Can not bigInt to regular Number
/* let trymix = (1n+2)
console.log(trymix); */ //Explicitly Convert BigInt to Number And Vice Versa

let a = 10n;
let b = 20;

/* Number to BigInt */
let res = 10n + BigInt(20);
console.log(res);
//op:-30n

/* BigInt to Number */
let c = 10n;
let d = 20n;
let rst = Number(c + d);
console.log(rst);
//op:-30

