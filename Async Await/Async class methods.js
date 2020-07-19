class waiter{
    async wait(){
        return await Promise.resolve(3+2)
    }
}
new waiter().wait().then(x => console.log(x)); //5 
class person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    async greeting() {
        return await Promise.resolve(` ${this.fname} `);

    }

}
new person('Ankit', 'Singh').greeting().then(result => console.log(result))//Ankit 
