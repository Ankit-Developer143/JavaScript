function spelling(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.substr(0, i + 1))
    }
    console.log(arr);
}
spelling("bee");




