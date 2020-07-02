//Map.prototype.clear()

const map1 = new Map();
map1.set('key1', 'value1')
map1.set('key2', 'value2')

console.log(map1);
/* op:-Map { 'key1' => 'value1' }
   Map { 'key1' => 'value2' } */


console.log(map1.clear());
console.log(map1.size); //size 0

