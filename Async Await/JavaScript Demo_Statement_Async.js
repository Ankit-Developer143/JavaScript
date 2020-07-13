function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            //print
            resolve('resolved')

        }, 2000);
    });

}
async function asyncCall() {
    console.log('calling');

    //wait instruction
    const result = await resolveAfter2Seconds();
    console.log(result);

}
asyncCall();

