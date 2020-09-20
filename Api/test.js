
 function testing() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + "mumbai" + '&appid=67f8338e80b637bb046dd3f5632a4a02')
        .then(Response => Response.json()) //convert data into json format
        .then(db => {
            data =db
        })
        .catch(err => alert("Wrong city Name !"))
}


console.log(testing());
console.log(data);
