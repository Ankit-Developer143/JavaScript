//Functions Default

function multiply(a,b=1) {
    return a*b;
}
console.log(multiply(5,2))
console.log(multiply(5))


function addition(a,b) {
    b=(typeof b!=='undefined')? b:1
    return a+b;
    
}
console.log(addition(4)) 

function append(value, array = []) {
    array.push(value)
    return array
  }
  console.log(append(1))
  console.log(append(2))



