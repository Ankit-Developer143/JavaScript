document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


//create function
function getText() {
    //fetch 
    fetch('data.txt')    //=>like xhr.open()
        //create function (Response Setting) 

        .then(Response => Response.text()) //onload function inside data conversion

        //After conversion Here Print Data 
        .then(dataValue => {
            console.log(dataValue);

            //Store data in HTML
            document.getElementById('output').innerHTML = dataValue;
        })
        //Show Error
        .catch(err => console.log(err))
}

/* Steps ======>>>>>>>>>>>>>>>>>>>

1. function
2.fetch
3. conversion            .then function and use function parameter.JSON () 
4.print single data (Multiple Data) use that function parameter.forEach()         .then function(paremeter)
5.inside function print or store data 


*/
function getJson() {
    fetch('data.json')
        .then(res => res.json())

        .then(data1 => {
            console.log(data1);

            let output = ' ';
            data1.forEach(post => {
                output += `<li>${post.title}</li>
            <li>${post.body}</li> `

            });
            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err))




}

function getApi() {
    fetch('https://api.github.com/users')
        /* .then(function (res) {
            return res.json()
        }) */
        .then(res => res.json())
        .then(data2 => {
            console.log(data2);

            let output = ' ';
            data2.forEach(post => {
                output += `<li>${post.login}</li>`

            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        });
}

















