/* Count the Syllables */

function count(str) {
    return str.match(/[aeiou]/gi).length;
    
}
console.log(count("hehe"));//2