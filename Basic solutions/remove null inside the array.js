function removeNull(arr) {
    let result = arr.filter((val) => val !== null)
    return result
	
}
console.log( removeNull(["a", null, "b", null]));

//op:-[ 'a', 'b' ]