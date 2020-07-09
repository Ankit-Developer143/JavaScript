

document.getElementById("button").addEventListener('click', dataload);


function dataload() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true); //true is optional


    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState); //Ready(optional) State 4 already 

        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send();
}
/* op:-Some Plain Text */



/* Notes*********************************************************************************************************************** */
/* Http request  Status*/
/* 200:"ok"
   403:"Forbidden"
   404:"Not Found"*/

/* Ready State Value
0:request not initialize
1:server connection  established
2:request recieved
3:Process Request
4:request finished and response is ready
*/





















