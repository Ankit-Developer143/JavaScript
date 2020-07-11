class EasyHTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })

    }
    //Make HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            // While making a POST Request we have to add in object with some info
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data)

            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    //Make an Update PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }
}

/* Notes :=======>>>>>>

**GET**
1.Create class    =>  for All
2.get             =>  get(url)
3.return          =>  new Promises((resolve , reject) => {})
4.fetch           =>  fetch(url)
5.conversion      =>  .then(res => res.JSON())
6.call Promises   =>  .then(data => resolve(data))
7.call error      =>  .catch()



**POST**
1.post           =>   post(url)
2.return         =>   new Promises((resolve , reject) => {})
3.fetch (url,data)    =>   fetch(url,{method:" POST",headers:{"content-type":"application/json",},body:JSON.stringify(data)})
4.conversion      =>  .then(res => res.JSON())
5.call Promises   =>  .then(data => resolve(data))
6.call error      =>  .catch()





*/