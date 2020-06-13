var element = document.getElementById("heading").addEventListener("click",function (e) {
    let variable;
    console.log("You clicked heading")
    location.href;
    //eventObject
    variable = e.target.id;
    variable = e.target.className;
    variable = Array.from(e.target.classList);//all are store in array

    //print Click Positon 
    variable = e.offsetX;//op:-373 depend on click position
    variable = e.offsetY;

    //display how far are you clicking from browser
    variable = e.clientX; //also use mouseover its give live op when u clicking mouse

      console.log(variable);


    
    
});