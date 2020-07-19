function who() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Ankit"));
    }, 2000)

}
function where() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("from Mumbai"))
    },)

}

function What() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Just Talking ...."))
    }, 4000)

}
async function Print() {
    /* const a = await who();
    const b = await where();
    const c = await What(); */


    
    //Same Or
    const[a,b,c] =await Promise.all([who(),where(),What()])

    /* Promise.all returns an array with the resolved values once all the passed-in promises have resolved. */
    
    console.log(`${a} ${b} ${c}`);

}
Print()