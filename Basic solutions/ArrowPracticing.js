function dividesEvenly(a, b) {
	return a % b === 0 ? true : false
}
console.log(dividesEvenly(4,2));

//Arrow Function
var oddEven = (a,b) => a%b ===0 ? true:false;
console.log(oddEven(4,2));    

/* both op
true 
true

*/