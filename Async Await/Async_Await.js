

async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000)
    });
    const error = false;
    if (!error) {
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }


}
myfunc()
    .then(value => console.log(value))
    .catch(err => console.log(err))




    /* Notes
    1. function
    2.new Promise
    3.condition                  if(!error) await Promise else  await Promise.reject
    4. calling function          functionName()
    5. .then                     .then(value => console.log(value))
    6. .then  (for error)         .catch(err => console.log(err))
    */

