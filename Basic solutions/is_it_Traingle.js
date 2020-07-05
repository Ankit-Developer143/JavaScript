function isItTraingle(a, b, c) {

    if (a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }

}
console.log(isItTraingle(8, 18, 10));

//Valid  traingle mens sub total 180  