/*apply arithmatic operation addition ,substraction ,multiply,and division 
and return if any condition result is 24 then return that condition those who satisfy 
if addition answer 24 then return add  */

//Way 1
function operation(num1, num2) {
    if (num1 / num2 == 24 || num1 + num2 == 24 || num1 - num2 == 24 || num1 * num2 == 24) {
        return 'yesh got it'
    } else {
        return 'null';

    }

}
console.log(operation(48, 2));//yesh got 

//way 2 use else if