/* The JavaScript for/in statement loops through the properties of an object: */


/* You can also use for…in to iterate over the index values of an iterable like an array or a string: */
let str = 'Turn the page';

for(let index in str){
    console.log(`index of ${str[index]}:${[index]}`);
}
/* op:-
index of T:0
index of u:1
index of r:2
index of n:3
index of  :4
index of t:5
index of h:6
index of e:7
index of  :8
index of p:9
index of a:10
index of g:11
index of e:12 */