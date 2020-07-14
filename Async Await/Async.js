
//Simple only async return function  without await
/* Async functions always return a promise, so the following may not produce the result you’re after: */
async function myfunc() {
    return 'Hello'

}
myfunc()
    .then((value) => {
        console.log(value);

    })






