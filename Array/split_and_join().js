/* Notes:- When the string is empty, split() returns an array containing one empty string, rather than an empty array.
 If the string and separator are both empty strings, an empty array is returned. */



/* var arr = ['Dog', 'Elephant', 'cow']
var str = arr.toString();

//convert string to array
var result = str.split()

//op:- string  Dog,Elephant,cow
console.log(typeof str, str);

//op:- object [ 'Dog,Elephant,cow' ] convert in array
console.log(typeof result, result);

console.log(Array.isArray(result));//true
 */


 //one More Example
var arr1 = ['Dog', 'Elephant', 'cow']
var str1 = arr1.toString()

var res = str1.split('', 2);
/* op:- provide the limits
[ 'D', 'o' ] */

console.log(str1);
console.log(typeof res);//object
console.log(Array.isArray(res));//true

//one more 
var str2 =' ';
console.log(typeof str2);//string

var rst = str2.split()

console.log(rst);//op:-[ ' ' ]

console.log(Array.isArray(rst)); //true array