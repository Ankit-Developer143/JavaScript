let myvar=34;
console.log(myvar,typeof myvar)

//conversion into string
myvar=String(34);
console.log(myvar,typeof myvar)
//all are same

//if we check length in array (object) then the actual length is element present in array brackets
//here the length of array is 9

let myarr1=[1,2,3,4,5,6,7,8,9];
console.log(myarr1,typeof myarr1);
console.log(myarr1.length)




//if we convert the datatype like array to string
myarr1 =String([1,2,3,4,5,6,7,8,9]);
console.log(myarr1.length,"the data type is:"+(typeof myarr1));
//op:-the length of array is 17 bcoz its calculate  character not brackets 


//*To String same as String 

let i=54;
console.log(i.toString(),typeof i.toString())

let date1 =new Date()
console.log(date1.toString());




