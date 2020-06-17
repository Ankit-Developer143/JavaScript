let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haStr.match(haRegex);
console.log(result);
//op:-[ 'Hazzzzah', index: 0, input: 'Hazzzzah', groups: undefined ]