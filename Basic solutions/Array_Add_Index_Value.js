function addIndex(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]+i);
        
    }
    return newArray;
    
}
console.log(addIndex([1,2,3,4])); //op:-[ 1, 3, 5, 7 ]