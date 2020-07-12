/* Filter Strings from Array */

//Example filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

const arr = [1, 2, 3, "a", "b", 4];
function filterArray(arr){
	return arr.filter(val => Number.isInteger(val));
}
console.log(filterArray(arr));//op:-[ 1, 2, 3, 4 ]
