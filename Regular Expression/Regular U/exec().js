//exec() return result in an Array
//if match found then return result if Not found then return null
//Tests for a match in a string. Returns the first match

let word = /hello/
const result = word.exec('hell') //op:-null

const result = word.exec('hello') //op:-[ 'hello', index: 0, input: 'hello', groups: undefined ]

const result1 = word.exec('hello w')//op:-[ 'hello', index: 0, input: 'hello w', groups: undefined ]

console.log(result);
console.log(result1);