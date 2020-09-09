function demo(args){
    return args
}
console.log(demo(12,24)); //op:- 12 and type is Object



function demo1(...args){
    return args
}
console.log(demo1(12,24)); 
//op:- [ 12, 24 ]


//Sorted the object
function demo2(...args){
    return args.sort()
}
console.log(demo2(12,24,42,78,21)); 
//op:-[ 12, 21, 24, 42, 78 ]














