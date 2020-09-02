let arr = [1,2,3,4,5,6]

let newArr = []
for(let i = 0;i<arr.length;i++){
    newArr.push(arr[i]**2)
    
}
console.log(newArr);
//op:-  [ 1, 4, 9, 16, 25, 36 ]



//using Map 
let result = arr.map((val) =>val**2)
console.log(result);
//op:- Same Result   [ 1, 4, 9, 16, 25, 36 ]