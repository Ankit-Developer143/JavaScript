function search(arr, item) {

    for (let i = 0; i < arr.length; i++) {
     if (arr[i] === item) {
         return arr[i];
         
     }
        
    }
    return -1;
	
}
/* console.log(search("6","6")); if same hen op is arr[i]=6*/
console.log(search("6","5")); //op is -1