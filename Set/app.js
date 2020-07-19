//Creating Sets only unique Value are Acceptable
const set1 = new Set();
set1.add(100);
set1.add("hello");
set1.add({ name: 'Ankit' });
set1.add(true);

//Not allow duplicate Values
//set1.add(100);

console.log(Array.isArray(set1)); //false
console.log(typeof set1);//object
console.log(set1);
//op:-Set { 100, 'hello', { name: 'Ankit' }, true } 


/* ******************************************************************************************************* */

//Or this way creating set above is similar to this
const set2 = new Set([1, true, 'String']);
console.log(Array.isArray(set2));//false
console.log(set2);
//op:-Set { 1, true, 'String' }
/* ******************************************************************************************************88 */


//Check Values Present or Not in Set1
console.log(set1.has("hello", 100));//true
console.log(set1.has('Ankit'));//false bcoz its a reference object store another location(Heap)
console.log(set1.has(true));//true


/* ******************************************************************************************************* */
//Check Length of set
console.log(set1.size);//op:-4






















