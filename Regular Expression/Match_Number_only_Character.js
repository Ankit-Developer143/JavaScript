let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;//if we use .length its give the selected number length;
console.log(result);
//op:-[ '2', '0', '0', '1' ] result give splitting condition
 
let movieName1 = "2001:2002 A Space Odyssey";
let numRegex1 = /\d+/g; // Change this line
let result1 = movieName1.match(numRegex1);//if we use .length its give the selected number length;
console.log(result1);
/* its give actual form[ '2001', '2002' ] */
