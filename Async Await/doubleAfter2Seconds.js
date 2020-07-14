 function doubleAfter2Seconds() {
    return new Promise(resolve =>{
        setTimeout(() => resolve(2*2),2000)

    });
    
}


//OR
doubleAfter2Seconds().then(x => console.log(x))  //4 

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * 2), 2000)

    });

}
doubleAfter2Seconds(10) + doubleAfter2Seconds(30)
    .then(y => console.log(y)) //op;-60