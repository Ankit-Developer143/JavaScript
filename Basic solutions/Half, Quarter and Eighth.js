//Half, Quarter and Eighth
/* Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number. */

const result = n => {
    return [n/2,n/4,n/8]
}
console.log(result(5));//op:-[ 2.5, 1.25, 0.625 ]