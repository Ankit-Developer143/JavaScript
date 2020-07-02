//iterate one by one
const months = ['Jan', 'March', 'April', 'June'];
var Iterator = months.entries();

var result = (Iterator.next().value)//op:-[ 0, 'Jan' ]
var result = (Iterator.next().value)//op:-[ 1, 'March' ]
var result = (Iterator.next().value)//op:-[ 2, 'April' ]



console.log(result);
