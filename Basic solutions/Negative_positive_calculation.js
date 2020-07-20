
function distanceHome (arr) {
	const reducer = (accumlator,currentValue) => accumlator+currentValue;
	
	return( Math.abs(arr.reduce(reducer)))
	
	
}
console.log(distanceHome ([3, 4, -5, -2]));