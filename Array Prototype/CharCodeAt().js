/* The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. */

var sentences = "The quick brown fox jumps over the lazy dog."

var index = 4; //q is index 4
var result = (`The character code ${sentences.charCodeAt(index)} equal to char ${sentences.charAt(index)}`)
console.log(result);

//Result:-The character code 113 equal to char q
