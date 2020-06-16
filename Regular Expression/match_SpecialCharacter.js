//find alphanumeric 
var str = "**Tutorix is the best e-learning 1 platform%!";
var regpat = /\w/g;
var result4 = str.match(regpat);
console.log(result4);

/* op:-[
    'T', 'u', 't', 'o', 'r', 'i',
    'x', 'i', 's', 't', 'h', 'e',
    'b', 'e', 's', 't', 'e', 'l',
    'e', 'a', 'r', 'n', 'i', 'n',
    'g', 'p', 'l', 'a', 't', 'f',
    'o', 'r', 'm'
  ]  its not accept special character only */

 /*  if we use /\w+/  then the op is:-[
    'Tutorix', 'is',
    'the',     'best',
    'e',       'learning',
    '1',       'platform'
  ] */

  
// only print no-word Character mens (Special character ) rest ignore  space also print
var str = "**Tutorix is the best e-learning 1 platform%!";
var regpat = /\W/g;
var result5 = str.match(regpat);
console.log(result5);
/* op:- [
    '*', '*', ' ', ' ',
    ' ', ' ', '-', ' ',
    ' ', '%', '!'
  ] */

  var str = "**Tutorix is the best e-learning 1 platform%!";
var regpat = /\W+/g;
var result6 = str.match(regpat);
console.log(result6);
/* op:-[
    '**', ' ', ' ',
    ' ',  ' ', '-',
    ' ',  ' ', '%!'
  ] */