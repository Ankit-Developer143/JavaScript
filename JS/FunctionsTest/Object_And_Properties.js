//Build Java script-Objects
const Vehicle ={
    name:"BMW",
    model:2017,
    color:"Black"
};

console.log(Vehicle.name,Vehicle.model)


var myDog = {
"name": "Quincy",
"legs": 3,
"tails": 2,
"friends": []

};

//Dot Notations
var obj1=myDog.name;

//using brackets fetch variable
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; //op:-"water"
  console.log(entreeValue);
  
  //Accessing object Properties Using Variables
  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  var player=16;
  var myplayer=testObj[player]
  console.log(myplayer);

  //Updating Object Properties
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
 console.log(myDog.name="Happy Coder"); 

 //Add the properties inside object
 var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
 };
 myDog['bark']="woof!"
 
 console.log(myDog);

 //Delete the properties of objects
 var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
 delete myDog.friends;
 console.log(myDog);

  
