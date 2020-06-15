let star = "Twinkle, twinkle, little star";
let find = /twinkle/ig;     // "g" its a global flag
let result = star.match(find);
console.log(result);