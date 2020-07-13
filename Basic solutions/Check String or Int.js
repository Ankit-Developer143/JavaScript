function intOrString(param) {
    if (typeof param === 'int') {
        return 'int';
    } else {
        return 'str';
    }
}
console.log(intOrString("5"));