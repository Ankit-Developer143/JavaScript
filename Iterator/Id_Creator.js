/* function* Iter() {
  var num = 1;
  while (true) {
    yield num++
  }
}
var obj = Iter();
console.log(obj.next().value);//op:-1
console.log(obj.next().value);//op:-2
console.log(obj.next().value);//op:-3



 */

 const obj ={
   model:"car",
   price:"20000$"

 }
 for (const objects of obj) {
   console.log(objects);
   
 }