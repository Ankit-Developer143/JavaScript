function match(s1, s2) {
    var r1 = s1.toLowerCase();
    var r2 = s2.toLowerCase();

    if (r1 === r2){
        return true
    }else{
        return false
    }
}
console.log(match("Ankit","ankit"));