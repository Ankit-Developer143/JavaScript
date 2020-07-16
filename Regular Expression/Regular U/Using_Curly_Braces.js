let re = /hel{2}o/i;   //Must Occur Exactly {m} amount of times like Examples:--->>>he{'ll'}o ||   let re = /h[e <--{2}]llo/i; the str is h'ee'llo e are two times

re = /hel{2,}o/i      //Atleast  two "ll" or More (min:2 &&  max:mutiple);
re = /hel{2,4}o/i     //Atleast  two "ll" or More (min:2 &&  max:4);  range{2 to 4 }

//parathesis
re = /^([0-9]x){3}$/i // op:- 3 times 3x start with [0-9] end with 3x



const str = "3x3x3x"
const result = str.match(re);
console.log(result);







