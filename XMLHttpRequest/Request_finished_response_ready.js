/* 1:server connection  established */
/* 4:request finished and response is ready */

document.getElementById("button").addEventListener('click', loaddata);

function loaddata() {

    //Create xhr object
    const xhr = new XMLHttpRequest();

    /* **************************************************************************************************************************** */
    /* console.log('READYSTATE',xhr.readyState); if we write here the 
    READYSTATE value is 0 */
    /* **************************************************************************************************************************** */

    //Open
    xhr.open('GET', 'data.txt', true);

    /* **************************************************************************************************************************** */
    //console.log('READYSTATE', xhr.readyState); op:-1 "write READYSTATE or else" */
    /* **************************************************************************************************************************** */


    //Create Function
    xhr.onreadystatechange = function () {

        console.log('READYSTATE', xhr.readyState);

        if (this.status === 200 && this.readyState === 4) {
            console.log(xhr.responseText);
        }

    }
    xhr.send()

}