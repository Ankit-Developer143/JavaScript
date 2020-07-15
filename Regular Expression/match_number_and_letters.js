let quoteSample = "Blueberry 3.141592653s are delicious.";
// start which letter you want and which one is ignore its depend on you
let myRegex = /[0-9]/ig;
let myRegex = /[a-z0-9]/ig;//op:-All Print

let result = quoteSample.match(myRegex); // 
console.log(result);
/*1st op [
    '3', '1', '4', '1',
    '5', '9', '2', '6',
    '5', '3'
  ] */



//Match Single Characters Not Specified(Do not want to match mens ignore)
let quoteSample1 = "3 blind mice.";
let myRegex1 = /[^aeiou^0-9]/gi;// its Ignore that Character and Numbers
let result4 = quoteSample1.match(myRegex1);
console.log(result4);

/* op:-[
  ' ', 'b', 'l',
  'n', 'd', ' ',
  'm', 'c', '.'
] */