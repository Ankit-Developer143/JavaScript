


//Add EventListener
document.getElementById('btn').addEventListener('click', function (e) {

    console.log("Hello World");
    e.preventDefault();

});

//Or

document.getElementById('btn').addEventListener('click', addition);

function addition(e) {
    console.log('clicked');
    let val;
    val = e.target;//target input line of code

    val = e.timeStamp; //always change
    console.log(val);
}












