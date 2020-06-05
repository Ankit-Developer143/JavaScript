function sum(...theArgs) {
    return theArgs.reduce((previous,current) => {
        return previous + current;
    });
}
console.log(sum(1,2,3));

//You can give any parameter name insted of manyMoreArgs
function myFun(a,b,...manyMoreArgs) {

    console.log("a",a);
    console.log("b",b)
    console.log("manyMoreArgs",manyMoreArgs)
}
console.log(myFun("one","Two","Three","Four"));



//Argument length
function fun1(...Args) {
    console.log(Args.length);
    
}
fun1();
fun1(1);
fun1(1,2,4,5)


//Function Arguments
function Fun(a,b,c) {  //You can use here ...c to for multiple arguments
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
}
Fun(4,3,2);

//get method

const obj3 = {
    log:['a','b','c'],
    get latest(){
        if(this.log.length==0){
            return undefined;
        }
        return this.log[this.log.length-1];

    }


};
console .log(obj3.latest);
