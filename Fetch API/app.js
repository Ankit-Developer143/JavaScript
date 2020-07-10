document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


//create function
function getText() {
    //fetch 
    fetch('data.txt')    //=>like xhr.open()
        //create function (Response Setting) 

        .then(function (Response) {  //onload function inside data conversion
            return Response.text();
        })
        //After conversion Here Print Data 
        .then(function (dataValue) {
            console.log(dataValue);

            //Store data in HTML
            document.getElementById('output').innerHTML = dataValue;
        })
        //Show Error
        .catch(function (err) {
            console.log(err);
        });
}

function getJson() {
    fetch('data.json')
        .then(function (res) {
            return res.json()
        })

        .then(function (data1) {
            console.log(data1);

            let output = ' ';
            data1.forEach(function (post) {
                output += `<li>${post.title}</li>
            <li>${post.body}</li> `

            });
            document.getElementById('output').innerHTML = output;

        })
        .catch(function (err) {
            console.log(err);
        });



}

function getApi() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json()
        })
        .then(function (data2) {
            console.log(data2);

            let output = ' ';
            data2.forEach(function (post) {
                output += `<li>${post.login}</li>`

            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });


}





