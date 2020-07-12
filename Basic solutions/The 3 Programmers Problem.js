/* The 3 Programmers Problem */
/* Question>>>
You hired three programmers and you (hopefully) pay them.
 Create a function that takes three numbers (the hourly wages of each programmer) and returns
 the difference between the highest-paid programmer and the lowest-paid. */
function programmers(one, two, three) {
    /* return Math.max(one,two,three)-Math.min(one,two,three)    or*/
    let low = Math.min(one, two, three);
    let high = Math.max(one, two, three);
    return Number(high) - Number(low)

}
console.log(programmers(10, 15, 20));
//op:-10

