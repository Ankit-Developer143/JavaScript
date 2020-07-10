//Multi parameter needs Paranthesis

const greeting = (firstName, LastName) => {
    return (`Hello ${firstName} ${LastName}`)

}
console.log(greeting("Ankit", "Singh")); //op:-Hello Ankit Singh


//Arrow Function in using map
const arr = ['Ankit', 'Joy', 'Peter']

const nameLength = arr.map(function (name) {
    return name.length;
})
console.log(nameLength);//op [ 5, 3, 5 ]

//Shorter
const nameLength1 = arr.map(name => name.length)
console.log(nameLength1);//[ 5, 3, 5 ]