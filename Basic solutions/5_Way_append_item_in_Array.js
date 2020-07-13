/* Using Push */
var arr = ['horse']
arr.push('dog', 'cat')
console.log(arr); //op:-[ 'horse', 'dog', 'cat' ]


/* full new array push in old array */
var old = ['fruits', 'vegitables', 'dryfruits']
var newArr = ['banana', 'flours', 'almond']
old.push(...newArr)
console.log(old);
//op:-[ 'fruits', 'vegitables', 'dryfruits', 'banana', 'flours', 'almond' ]



/* Using Splice */
arr.splice(arr.length, 0, 'monkey', 'donkey')
console.log(arr);//op:-[ 'horse', 'dog', 'cat', 'monkey', 'donkey' ]

//concatination
var newarr = arr.concat('pig');
console.log(newarr);
//op:-[ 'horse', 'dog', 'cat', 'monkey', 'donkey', 'pig' ]


//using index Values
const Animal = ['pig'];
Animal[0] = ('cow')
console.log(Animal);
//op:-[ 'cow' ]