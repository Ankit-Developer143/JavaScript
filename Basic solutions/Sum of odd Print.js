/*  function sumofodd(n){
    let a = 0;
    for (let i=1;i<=n;i+=2){  //op: Jump 1,3,5
     a+=i  
    }
    return a
}
console.log(sumofodd(5));//OverAll Op:-9 

 */

 
function scoreCalculator =(easy, med, hard) =>[...arguments].filter(x =>x<0)?"invalid": easy*5+med*10+hard*20;
console.log(1,2,3);