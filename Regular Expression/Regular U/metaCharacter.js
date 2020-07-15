let star = "Twinkle, twinkle, little star";
let find = /^t/i;     // ^ its
/* let result = find.test(star)//true */
let result = star.match(find)
console.log(result);

/* [
  'T',
  index: 0,
  input: 'Twinkle, twinkle, little star',
  groups: undefined
] */