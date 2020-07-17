
const str = "hello"
const str = "grey"   //optional use
const str = "gre?"  //escaping use 


//MeteCharacter Symbol
re = /^h/i;         //Must Start with h
re = /d$/i;         //Must End With
re = /^hello$/i;   //Must begin and end with hello
re = /h.llo/i;     //Match any one character
re = /h*lo$/i;    //Match any character 0 or More times op:-"lo"

re = /gre?a?y/i;   //optional character here either we write grey or greay both are Acceptable

re = /gre?a?y?/i;  //Escaping character here y is optional op:-'gre' /gre?a?y\?/i; '\' pre fix value remove optional

const result = str.match(re);
console.log(result);





