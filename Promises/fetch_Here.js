let outputDiv = document.querySelector(".output");
let table = document.querySelector("#table1");

const http = new EasyHTTP;
//get Users
http.get(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

 http.get(`https://jsonplaceholder.typicode.com/users`)
    .then(data => {
        tableOp = ' ';
        

        //take a Data because of in data all the value store here data mens its represents problem are resolve(print)  
         data.forEach(user => {


            (tableOp += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td><a href="${user.email}">${user.email}</a></td>
			</tr>`)
        
        });
        table.innerHTML += tableOp;
    })
    .catch((err) => console.log(err)); 


    
//* POST method

//creating user data for posting
const userData = {
	name: "Dex Luther",
	username: "dex@luth7445",
	email: "dexLuther232@gmail.com",
};

http.post(`https://jsonplaceholder.typicode.com/users`, userData)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

/*
Output: 
{name: "Dex Luther", username: "dex@luth7445", email: "dexLuther232@gmail.com", id: 11}
email: "dexLuther232@gmail.com"
id: 11
name: "Dex Luther"
username: "dex@luth7445"
__proto__: Object
*/

//* PUT Request for updating the data

http.put(`https://jsonplaceholder.typicode.com/users/2`, userData)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

/*
Output: 
{name: "Dex Luther", username: "dex@luth7445", email: "dexLuther232@gmail.com", id: 2}
email: "dexLuther232@gmail.com"
id: 2
name: "Dex Luther"
username: "dex@luth7445"
__proto__: Object
*/

 http.delete(`https://jsonplaceholder.typicode.com/users/2`)
	.then((data) => console.log(data))
	.catch((err) => console.log(err)); 

/*
Output:
 Resource Deleted...
*/




    /* Notes =======>>>>>>>>>>>>
    
    1.Call Class Name              =>   using New (const obj = new ClassName)
    2.fetch (getUrl)              =>   obj.get('url')
    3.print data (resolve)       =>   if data resolve then print that data >>.then(data => console.log(data) )
    4.print error(reject)        =>   if data reject then print that data >>.then(err => console.log(err) )
    
    
    *****Store Data in DOM*******************************************************************************

    1.fetch(url)

    2. .then(data => { 
            <<<inside function>>>
            let output = ' ' ;                                                               *
      
data.foreach(obj =>{
 output += ` <li>${ }</li>`;
})
id.innerHTML = output;
})
.catch (err => console.log(err))





*/
                

 





