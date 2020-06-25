class test{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
}
class demo extends test{
    constructor(age){
        super("Ankit","Singh");
        this.age=age;
    }
    show(){
        
        // console.log(fname+""+lname);
        console.log(this.fname+" "+this.lname);
        console.log(`Your Age ${this.age}`);
    }
}
var d = new demo("24");
d.show();