function getMultipliedArr(arr) {
	let output = 0;
	for(let i=0;i<arr.length;i++){
		console.log(arr[i]*2);
		
    }
}
getMultipliedArr([5, 382, 0]) 


// Or Using Map
const getMultipliedArr = arr =>{
    return arr.map(e => e*2);
}
console.log(getMultipliedArr([5, 382, 0]));//op:-[ 10, 764, 0 ]