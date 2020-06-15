let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[a-z0-9]/ig; // start which letter you want and which one is ignore its depend on you
let result = quoteSample.match(myRegex); // 
console.log(result);



//Match Single Characters Not Specified(Do not want to match mens ignore    )
let quoteSample1 = "3 blind mice.";
let myRegex1 = /[^aeiou^0-9]/gi; // Change this line
let result4 = quoteSample1.match(myRegex1);
console.log(result4);