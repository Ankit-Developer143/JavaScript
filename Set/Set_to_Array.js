const set6 = new Set([1, 2, 3, 4, 5, 6]);
console.log(set6);


//Convert Set To Array
const arr = (Array.from(set6))
console.log(arr);


//Using Loops For conversion of set to array
for (const item of set6) {
    const arr1 = Array.from(item)

}
console.log(arr1);