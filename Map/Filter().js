/* var newArray = array.filter(function(item) {
  return condition;
}); */


var arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    var element = arr.filter(function (arr) {
        return arr < 4;
    });


}
console.log(element);
/* op:-[ 1, 2, 3 ] */