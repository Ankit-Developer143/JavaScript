function doubleAfter2Seconds() {
    return new Promise(resolve =>{
        setTimeout(() => resolve(2*2),2000)

    });
    
}
doubleAfter2Seconds().then(x => console.log(x))  //4