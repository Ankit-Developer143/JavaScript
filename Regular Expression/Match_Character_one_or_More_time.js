let difficultSpelling = "Mississippi";
let myRegex = /is+/g; // change depend on your condition if u use i+ then op:-[ 'i', 'i', 'i', 'i' ]
let result = difficultSpelling.match(myRegex);
console.log(result);
//op:-[ 'ss', 'ss' ] is+ [ 'iss', 'iss' ]   
