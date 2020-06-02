const obj1 = {
    foo(){
        return 'bar';
    }
};
console.log(obj1.foo());

const obj = {
    a: 'foo',
    b() { return this.a }
  };
  console.log(obj.b()) 