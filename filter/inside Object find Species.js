let animals = [
    { name: "FluffyKins 🐇", Species: "rabbit" },
    { name: "DexLuthor 🐕", Species: "dog" },
    { name: "Trenton 🐕", Species: "dog" },
    { name: "Joey 🐕", Species: "dog" },
    { name: "FetchFishy 🐟", Species: "fish" },
    { name: "Dianna 🐟", Species: "fish" },
    { name: "CatePurry 🐈", Species: "cat " },
    { name: "BobBear 🐻", Species: "bear" },
    { name: "Todd 🐻", Species: "bear" },
    { name: "AlexLeon 🦁", Species: "lion" },
];



//Using Filter

let result = animals.filter((value) => value.Species == "dog")
console.log(result);

// [
//     { name: 'DexLuthor 🐕', Species: 'dog' },
//     { name: 'Trenton 🐕', Species: 'dog' },
//     { name: 'Joey 🐕', Species: 'dog' }
//   ]


//Using Map Just Simple Iterate and its expression gives boolean value
result = animals.map((value) => value.Species)
console.log(result);

// op: -[
//     'rabbit', 'dog',
//     'dog', 'dog',
//     'fish', 'fish',
//     'cat ', 'bear',
//     'bear', 'lion'
// ]







//Using For Loops

let newArr = []

for (let i = 0; i < animals.length; i++) {
    if (animals[i].Species == "dog") {
        newArr.push(animals[i])
    }
}
console.log(newArr);
    // Same Output
    // [
    //     { name: 'DexLuthor 🐕', Species: 'dog' },
    //     { name: 'Trenton 🐕', Species: 'dog' },
    //     { name: 'Joey 🐕', Species: 'dog' }
    //   ]