function stick(n) {
    let result = 0;

    if (n == 1) {
        return 6;
    } else if (n == 0) {
        return 0;
    } else {
        result = 6 * n;
        return result - n + 1;

    }
}


console.log(stick());