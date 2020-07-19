

async function myFunc() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000)
    });
    const error = true;

    //if not a error  then system response else show something went wrong 
    if (!error) {
        const res = await promise; //wait until promise is resolved and then response
        return res;
    } else {
        await Promise.reject('Something went wrong');
    }
}
myFunc()
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

