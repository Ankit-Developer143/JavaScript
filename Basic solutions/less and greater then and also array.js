function arrBetween(num1, num2,arr) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1 && arr[i] < num2) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))//op:- [ 5, 4, 7 ]


//const arrBetween = (a,b,c) => c.filter(x => x > a && x < b);