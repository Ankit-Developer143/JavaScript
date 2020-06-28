function Student(firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
}
Student.prototype.greeting = function () {
    return `Hi there ${this.firstName}`;

}

let obj = new Student("Ankit", "Singh");
console.log(obj);
console.log(obj.greeting());


//Here we apply inherit property
function Customer(firstName, LastName, phoneNumber, membership) {
    Student.call(this, firstName, LastName);

    this.phoneNumber = phoneNumber;
    this.membership = membership;

}
//Customer.prototype = Object.create(Student.prototype)

let hank = new Customer("Hank", "Smith", "9885-745-524", "Premium");
console.log(hank);

//* Overwriting greeting method in Customer
// Now the greeting function in Customer.prototype is modified
Customer.prototype.greeting = function () {
    return `Welcome 😄 to Horizon  ${this.firstName}, How may I assist you ❓`;
};

console.log(hank.greeting());

//* But the Person's greeting method is not modified it remains unchanged
console.log(hank.greeting());






