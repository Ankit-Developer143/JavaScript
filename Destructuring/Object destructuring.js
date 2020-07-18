const obj = {
    id:20,
    name:"Ankit"
}
const{id,name} = obj
console.log(id);//op:-20


const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
console.log(o);//op:-{ p: 42, q: true }
console.log(foo);//op:-42
console.log(bar);op:-true