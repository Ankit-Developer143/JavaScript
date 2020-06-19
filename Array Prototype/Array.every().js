/* The every() method tests whether all elements in the array pass the test implemented by the provided function.
 It returns a Boolean value. */
const isBelow = (currentValue) => currentValue < 10;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.every(isBelow);
console.log(result);

//op:-true
