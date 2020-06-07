
//Nested Objects
var myStorage = {
   "car":{
       "inside":{
           "glove box":"map",
           "passenger seat": "crumbs"
       },
       "outside":{
           "trunck":"Jack"
       }

   } 
};
var display= myStorage.car.inside["glove box"];
console.log( display);

//Fetch and print the properties of array

var myPlants = [
//list[0]
    {
    type:"flower",
    list:["rose","tulip"] 
},

//list[1]
{
    type:"tree",
    list:["pine","bamboo"]
}
];
var myValue=myPlants[1].list[1];
console.log( myValue);
