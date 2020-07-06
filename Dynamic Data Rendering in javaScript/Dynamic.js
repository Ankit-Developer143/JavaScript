const Name = "Ankit Singh";
const college = "Patkar  college"
const age = 31;
const city = 'mumbai';
const address = 'Goregaon';

let html1;

//html
html = '<ul><li>Name: ' + Name + '</li><li>College:' + college + '</li><li>Age: ' + age + '</li></ul>'
document.getElementById('data').innerHTML = html;

//Or Without template (es5)

html1 = '<ul>' +
    '<li>Name: ' + Name + '</li>' +
    '<li>College: ' + college + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';
document.getElementById('data').innerHTML = html1;

//with template (es6)

let html2 = `<ul>
<li>Name:${Name}</li>
<li>College:${college}</li>
<li>Age:${age}</li>
<li>City:${city}</li>
<li>Address:${ address}</li>
</ul>`
document.getElementById('data').innerHTML = html2;
/* op
Name:Ankit Singh
College:Patkar college
Age:24
City:mumbai
Address:Goregaon */

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