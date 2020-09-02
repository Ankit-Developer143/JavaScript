let arr =[1,2,3,4,5]
let result = arr.map((value,index,arr) => value+arr[index])S
console.log(result);
//op:- [ 2, 4, 6, 8, 10 ]

//basic syntax :- (value,index,arr) it means (arr[i],i,arr)