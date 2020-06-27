function Dog(name) {
    this.name = name;
    
}

Dog.prototype = {
    //property
    Quantity:2,
    
    //Have Two Method

    eat:function () {
        console.log("This is method first");
        
    },
    Describe:function () {
        console.log("This is my Name",+this.name);
        
    }
}
var Result = new Dog('Ankit');
console.log(Result.eat());