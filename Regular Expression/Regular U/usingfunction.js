
const  str = "hello world"
let  re = /hello/

const result  = re.exec(str)
console.log(result);         /* op:- */

function Regex(re,str) {
    if(re.test(str)){
    console.log(`${str} match found ${re.source}`);
    }else{
        console.log(`${str} Not Found ${re.source}`);
    }
    
}
Regex(re,str)