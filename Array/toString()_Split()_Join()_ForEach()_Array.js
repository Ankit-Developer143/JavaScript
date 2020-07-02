
//toString()
/* Converting Array To String */
var animals1 = ['Dog', 'Elephant', 'cow']
var str = animals1.toString()
console.log(str);

/* op array convert in String
Dog,Elephant,cow
*/

//Split()
/* if you try to Split an Array then firstly Array Convert to String And then use Split Method */
var Usesplit = str.split('');
console.log(Usesplit);

/* op:-
[
  'D', 'o', 'g', ',',
  'E', 'l', 'e', 'p',
  'h', 'a', 'n', 't',
  ',', 'c', 'o', 'w'
] */


//Join()
var UseJoin = Usesplit.join("-")
console.log("This is Join Methods " + UseJoin);
/* op:-
This is Join Methods D-o-g-,-E-l-e-p-h-a-n-t-,-c-o-w */



//Simple Array 
var animals = ['Dog', 'Elephant', 'cow']
console.log(animals);

/* op:-[ 'Dog', 'Elephant', 'cow' ] */


//ForEach()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(i => {
})
console.log(fruits);
/* op:-[ 'Banana', 'Orange', 'Apple', 'Mango' ] */


