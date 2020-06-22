//map in javascript: we can use any type of key Value
const myMap = new Map();

const key1 = {}, key2 = {}, key3 = {};

set the map value
myMap.set(key1, 'this is a string 1')
myMap.set(key2, 'this is a string 2')
myMap.set(key3, 'this is a string 3')
console.log(myMap);


get the map Value
const op = myMap.get(key1)//op:-this is a string 1
console.log(op);

/* let arr = [1,2,3,4,5,6];
arr.map(x => {
});
console.log(arr);//op:-[ 1, 2, 3, 4, 5, 6 ]
console.log(arr[0])//op: [1] */

/* let arr = [1, 2, 3, 4, 5, 6];
let Value = arr.map(x => x * 2) //op:-[ 2, 4, 6, 8, 10, 12 ]
console.log(Value);
 */
const cart = [{ product: 'lenovo', model: 'G50' }, { product: 'mobile', model: 'android' }];
console.log(cart);


const Product = cart.map(x => x.product)//;op:-[ 'lenovo', 'mobile' ]
const model = cart.map(x => x.model);//op:-[ 'G50', 'android' ]
const price = cart.map(x => x.price);//[ undefined, undefined ]


console.log(Product);
console.log(model);
console.log(price);







