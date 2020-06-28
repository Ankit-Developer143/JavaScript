//Create Constructor
function Person(Firstname, lastname,age) {
    this.Firstname = Firstname;
    this.lastname = lastname;
    this.age = age;
}


//Create Method
Person.prototype.getfullname = function () {
    return ` ${this.Firstname} ${this.lastname}`;
}
//Restore Age Value
Person.prototype.getAge = function (newAge) {
    this.age = newAge;
}

//Age Validation
Person.prototype.getValidation = function () {
    if (this.age == undefined) {
        console.log("Please enter value");
    }
    else if (this.age >= 18) {
        console.log("Good");
    } else {
        console.log('not ');
    }
}
//create reference Object Using new Keyword
let result = new Person("Ankit", "Solanki",20); 

//Age
result.getAge(18);//first call this age

//print
console.log(result);
//call the method
result.getValidation();

/* op:- 

Person { Firstname: 'Ankit', lastname: 'Solanki', age: 18 }

Good */







