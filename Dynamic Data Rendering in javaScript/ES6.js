//with template (es6)

let html2 = `<ul>
<li>Name:${Name}</li>
<li>College:${college}</li>
<li>Age:${age}</li>
<li>City:${city}</li>
<li>Address:${ address}</li>
</ul>`
document.getElementById('data').innerHTML = html2;