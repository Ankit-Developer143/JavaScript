

document.getElementById("button").addEventListener('click', dataload);


function dataload() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true); //true is optional

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }

    }
    xhr.send();
}



/* op:-Some Plain Text */

/* Http request  Status*/
/* 200:"ok"
   403:"Forbidden"
   404:"Not Found"*/




