//if user buy 6 cup coffee then shopper gives 1 cup coffee extra
function totalcups(num) {
    var extra_cups = 0;
    var normal_cups = 0;
    for (let i = 1; i <= num; i++) {
        normal_cups++;
        if (i % 6 === 0) {
            extra_cups++;
        }
    }
    console.log(extra_cups + normal_cups);
}
var result = new totalcups(6);

