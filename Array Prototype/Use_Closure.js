/* Use Closure to Protect Properties Within an Object from Being Modified Externally */

function Bird() {
    let hatchedEgg = 10; // private variable

    /* publicly available method that a bird object can use */
    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();

console.log(ducky.getHatchedEggCount());  // returns 10