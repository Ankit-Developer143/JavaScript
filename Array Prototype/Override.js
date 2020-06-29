/* 
Override the fly() method for Penguin 
*/

function Bird() { }

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() { }

//ChildObject.prototype = Object.create(ParentObject.prototype)
Penguin.prototype = Object.create(Bird.prototype)

//ChildObject.prototype.methodName = function() {...};
Penguin.prototype.constructor = Penguin; //Then the ChildObject received its own methods by chaining them onto its prototype: 

Penguin.prototype.fly = function () {
    return "I am Walking"
}




