/* In the following example,
 we first declare a function that returns a promise that resolves to a value of 🤡 after 2 seconds. 
 We then declare an async function and await for the promise to resolve before logging the message to the console: 
 
await is a new operator used to wait for a promise to resolve or reject.  await send()
It can only be used inside an async function.
await USE ONLY INSIDE ASYNC FUNCTION
*/

function Send() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Recieved"), 2000)
    });

}

async function recieved() {
    console.log("Calling....");
    const wait = await Send(); //wait until resolve  first that inside value print then resolve value print 
    console.log(wait);
}


recieved()






