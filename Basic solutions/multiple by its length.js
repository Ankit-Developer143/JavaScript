function multiplyByLength(arr) {
	var ans = [];
	for (i = 0; i < arr.length; i++) {
		ans.push(arr[i] * arr.length);
	}
	return ans
}
console.log(multiplyByLength([2, 3, 1, 0]));

//op:-[ 8, 12, 4, 0 ]

