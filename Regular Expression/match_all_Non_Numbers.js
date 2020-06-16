let movieName = "2001: A Space Odyssey";
let find = /\D/g;
var result = movieName.match(find);
console.log(result);

/* op:-[
    ':', ' ', 'A', ' ', 'S',
    'p', 'a', 'c', 'e', ' ',
    'O', 'd', 'y', 's', 's',
    'e', 'y'
  ] */