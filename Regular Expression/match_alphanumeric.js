var alphanumeric="ankit 12 45 78 45 singh 78 94 5";
var find = /\w/;// w+ are use to match alphanumeric value in given string
var result = find.test(alphanumeric);
console.log(result);
//op:-true


//match
var alphanumeric="ankit 12 45 78 45 singh 78 94 5";
var find = /\w+/;
var result1 = alphanumeric.match(find);
console.log(result1);
//op:-'ankit'
