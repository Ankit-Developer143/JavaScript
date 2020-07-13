 function sumofodd(n){
    let a = 0;
    for (let i=1;i<=n;i+=2){  //op: Jump 1,3,5
     a+=i  
    }
    return a
}
console.log(sumofodd(5));//OverAll Op:-9 

