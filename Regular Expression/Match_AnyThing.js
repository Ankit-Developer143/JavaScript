var str1 = " bun sun run bun";
var str2 = "ankit ramesh mahesh suresh"
var str3 = /.un/;
var result = str3.test(str1);
console.log(result); //true



let humStr = "I'll hum a human song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let display = humStr.match(huRegex); // Returns ["hum"]
console.log(display);
//hugStr.match(huRegex); // Returns ["hug"]


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result2 = unRegex.test(exampleStr);
console.log(result2);// op:-true