function isFourLetters(arr) {
    return arr.filter((val) => val.length == 4)
	
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
//[ 'Pair' ]