function Animal() {
}
   Animal.prototype={
    eat() {
        console.log("Hello");
    }
}
let Duck = Object.create(Animal.prototype);
console.log(Duck.eat());
        
   
    