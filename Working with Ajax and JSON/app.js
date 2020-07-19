
document.getElementById("button1").addEventListener('click', loadcustomer);
document.getElementById('button2').addEventListener('click', loadcustomers);

function loadcustomer(e) {
    //Create
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'customer.json', true);

    //Function onload
    xhr.onload = function () {

        if (this.status === 200) {

            //Converter
            const customer = JSON.parse(this.responseText);

            //ul
            const output = `<ul>
            
            <li>id: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>phone: ${customer.phone}</li>
            </ul>
            
            `;
            //Store
            document.getElementById('Customer').innerHTML = output;
        }
    }
    xhr.send();

}

function loadcustomers() {

    //create xhr object
    const xhr1 = new XMLHttpRequest();

    //Open
    xhr1.open('GET', 'customers.json', true);

    //Condition onload
    xhr1.onload = function () {
        if (this.status === 200) {

            //convert String Array and store in customers
            const customers = JSON.parse(this.responseText);

            //iterate^
            let output = '';
            customers.forEach(customer => {

                //create ul
                output += `<ul>
            
                <li>id: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>phone: ${customer.phone}</li>
                </ul>
                
                `;
                //store ul
                document.getElementById('id2').innerHTML = output;

            });
        }
    }
    xhr1.send();
}





/* Note creating Steps*********************************************************************************************************** */

//addEventListener
//create function   
//create xhr  (inside function)
//Open        (xhr.open('GET','filename'))
//onload      (xhr.onload)
//condition   (this.status === 200 or 403 or 404)
//convert     (JSON.parse(this.responseText))

//iterate     (obj.forEach(customer =>{})   ) ***full JSON Obj Iterate using this*******

//create ul   (create list and store in Side Variable)

//save        (Save output id or class.innerHTML)

/* **************************************************************************************************************************** */