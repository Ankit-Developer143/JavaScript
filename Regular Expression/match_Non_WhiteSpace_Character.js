let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);
console.log(result);

/* op:-[
    'W', 'h', 'i', 't', 'e', 's', 'p',
    'a', 'c', 'e', 'i', 's', 'i', 'm',
    'p', 'o', 'r', 't', 'a', 'n', 't',
    'i', 'n', 's', 'e', 'p', 'a', 'r',
    'a', 't', 'i', 'n', 'g', 'w', 'o',
    'r', 'd', 's'
  ]
 */