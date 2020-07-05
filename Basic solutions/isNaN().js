/* The isNaN() function determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; 
you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015. */

function validStrNumber(n) {
	return isNaN(n) ? false : true;
}
console.log(validStrNumber("45"));