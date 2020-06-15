let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;  //i mens ignore case and 'g' mens its global flag and print first element
let result = quoteSample.match(vowelRegex);

console.log(result);