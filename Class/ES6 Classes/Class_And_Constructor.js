class Person {
    /* Constructor */
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    /* Method */
    greeting() {
        return `this is my first name ${this.fname}`
    }
    ageValidation() {
        if (this.age > 18) {
            return "valid";
        } else {
            return "invalid"
        }
    }

}

const obj = new Person("ankit", "singh", "14")
console.log(obj.greeting());     //op:-this is my first name ankit
console.log(obj.ageValidation());//invalid

console.log(typeof (obj.age)); //String