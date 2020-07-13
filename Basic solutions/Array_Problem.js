/* Create a function that returns an array of booleans from a given number by iterating thro
 the number one digit at a time and appending true into the array if the digit is 1 and false otherwise. */

function integerBoolean(n) {
	let result = [];
	
	for (let i = 0; i < n.length; ++i)
		result.push(n[i] === '1' ? true : false)
	
	return result;
}
let obj = new integerBoolean("2");
console.log(obj);