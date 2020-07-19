//change text
document.addEventListener('mouseenter', function (e) {
    document.getElementById("heading").innerHTML = "hello world";
});

var element = document.getElementById('submit');
element.addEventListener('click',function (e) {
    console.log("thnx your page finally submit");
    
});

var display = document.getElementById('submit');
display.addEventListener('mouseenter',function () {
    console.log("mouse enter");
    
});




