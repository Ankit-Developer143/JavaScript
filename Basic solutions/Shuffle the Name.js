function nameShuffle(str) {
    let res = str.split(" ")
    return res.reverse().join(" ")

	
}
console.log(nameShuffle("Donald Trump"));

//op:-[ 'Trump', 'Donald' ]