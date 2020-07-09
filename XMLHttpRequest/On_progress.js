document.getElementById("button").addEventListener('click', dataload);


function dataload() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function () {
        console.log('GETSTATE', xhr);
        if (this.status === 200 && this.readyState === 4) {
            console.log(xhr.responseText);

        }

    }
    xhr.send();
}

/* GETSTATE XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} */