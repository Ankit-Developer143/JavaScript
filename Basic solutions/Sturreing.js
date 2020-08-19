function stutter(word) {

    //let result = word.substr(0,2).concat("...")+word.substr(0,2).concat("...")+word.concat("?");
    let repeat = word.substr(0,2)

    return `${repeat}...${repeat}...${word}`;
	
}
console.log(stutter("enthusiastic"))

//op:-en...en...enthusiastic?