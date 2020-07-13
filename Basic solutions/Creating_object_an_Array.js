const Animals = {
    Dog: 'barking',
    cat: 'meow'

}

/* Call only keys */
var ObjectanArray = Object.keys(Animals);
console.log(ObjectanArray); //op:-[ 'Dog', 'cat' ]

/* Call only Values */
var ObjectanArray = Object.values(Animals)
//op:-[ 'barking', 'meow' ]

/* Call Both and object convert to an array */
var ObjectanArray = Object.entries(Animals)

console.log(ObjectanArray);
//op:-[ [ 'Dog', 'barking' ], [ 'cat', 'meow' ] ]



