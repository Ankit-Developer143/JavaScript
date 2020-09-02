let promise = new Promise((resolve,reject)=>{  //here our own choice to write either one parameter or two
    setTimeout(() =>{
        let animal = "dog"
        if(animal == "dog"){
            resolve("This is Dog")
        }else{
            reject("this is Not A Dog")
        }
    },1000)
})
promise.then((value) =>{
    console.log(value);
    
})


//op:-This is DogProm       


