document.getElementById("button").addEventListener('click', dataload);


function dataload() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);



    xhr.onprogress = function () {
        console.log('GETSTATE', xhr);
    }
    xhr.onload = function () {
        console.log('GETSTATE', xhr.readyState);


        if (this.status === 200 && this.readyState === 4) {

            document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1> `

        }

    }
    xhr.onerror = function () {
        console.log("Request error");

    }
    xhr.send();
}



/*op :- GETSTATE XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} */