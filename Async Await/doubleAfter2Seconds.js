/* In the following example, we first declare a function that returns a promise that resolves to a value of 🤡 after 2 seconds. 
We then declare an async function and await for the promise to resolve before logging the message to the console: */

function doubleAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => resolve(2 * 2), 2000)

    });

}
doubleAfter2Seconds().then(x => console.log(x))  //4 



//OR
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * 2), 2000)

    });

}
doubleAfter2Seconds(10) + doubleAfter2Seconds(30)
    .then(y => console.log(y)) //op;-60