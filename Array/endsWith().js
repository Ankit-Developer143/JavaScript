//literal
const str1 = 'Cats are the best!';
console.log(str1.endsWith('!'));


//using for-loops
function isPlural(word) {
    if (word.endsWith('i')) {
        return true;
    } else {
        return false;
    }
}
console.log(isPlural("hey my name is ankit singh solanki"));//true 

//Arrow Function
const str = (word) => word.endsWith('l') ? true : false;

console.log(str("hello")); //false