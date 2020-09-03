function difference(nums) {
	return Math.max(...nums) - Math.min(...nums)
}
console.log(difference([10, 15, 20, 2, 10, 6]));