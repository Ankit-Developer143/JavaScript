//Creating Set
const set3 = new Set([1, 'Ankit', { state: 'Maharashtra' }, true])
//console.log(set3);

//ITERATING SET USING FOR OF
for (const item of set3) {
    console.log(item);

}

//forEach loops
set3.forEach((value) => {
    console.log(value);
})




//Using Key Iterates
for (const item of set3.keys()) {
    console.log(item);
    
}  


//Using Value Iterates
for (const item of set3.values()) {
    console.log(item);
    
} 

/* Both Loops op:-
1
Ankit
{ state: 'Maharashtra' }
true */
