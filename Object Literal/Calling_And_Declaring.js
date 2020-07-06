const Person = {
    Name: "Ankit",
    age: 40,
    hobbies: ['sports', 'music'],
    Address: {
        city: 'Goregaon',
        state: 'maharashtra'
    },
    getBirhdayYear: function () {
        return 1997 - this.age;

    }

}

console.log(Person);

console.log(Person.hobbies[0]);//Music

console.log(Person.Address['city']);//goregaon

/* console.log(Person.state); we cannot call like this bcoz its show 'Undefined'*/


console.log(Person.Address.state);//op maharashtra

console.log(Person.getBirhdayYear());//1957