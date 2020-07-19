const set4 = new Set([100, 'Ankit', { state: 'Maharashtra' }, true])

//op:-BEFORE
console.log(set4);//   op:-Set { 100, 'Ankit', { state: 'Maharashtra' }, true }


//delete set value 
set4.delete(100)

//After
console.log(set4);//op:-Set { 'Ankit', { state: 'Maharashtra' }, true }

