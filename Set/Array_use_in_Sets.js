//Array
const arr = ["Ankit"];
console.log(Array.isArray(arr));//true

//Array convert in Set  
const set5 = new Set(arr)
console.log(set5);//op:-Set { 'Ankit' }

console.log(Array.isArray(set5));//false 



//Array to set using for of
for (const item of arr) {
    const set7 = new Set(item);
    console.log(set7);

}//op:-Set { 'A', 'n', 'k', 'i', 't' }






