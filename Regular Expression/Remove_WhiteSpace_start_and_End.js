let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, "");
console.log(result);

//op:- Space remove op:-Hello, World!