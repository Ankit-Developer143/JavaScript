/* USe Brackets [] Character Sets  */
let re = /gr[ae]y/i;  //either write grey or gray both are optional but (must be Present a or e)
re = /[GF]rey/;    //Must be G or F CaseSensitive
re = /[^GF]rey/;  //Start With any Character except G or F re = /^[GF]rey/ begin with G or F
re = /[A-Z]/g;   //Start With Any UpperCase  if str = "Xerox" then  op:-[x]
re = /[a-z]/g;   //if str = "Xerox" then  op:-[ 'e', 'r', 'o', 'x' ] only accept lowerCase
re = /[0-9]/g;  //str = "1Xerox"  then op:-[1]


//Literal Object
const str = "1Xerox"
const result = str.match(re)
console.log(result);











