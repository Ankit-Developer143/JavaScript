//Using Function ,ternary operator and addition inside html (es6);
function hello() {
    return 'hello';

}
let html3 = `<ul>
<li>Name:${Name}</li>
<li>College:${college}</li>
<li>Age:${age}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'over 30' : 'under 30'}</li>
</ul>`

document.getElementById('data').innerHTML = html3;