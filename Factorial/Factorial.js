function Factorial(){

    var i, no, fact;
    fact=1;
    no=Number(document.getElementById("text1").value);
   
    for(i=1; i<=no; i++)  
    {
    fact= fact*i;
    } 
    
   document.getElementById('result').innerHTML=fact;
    }