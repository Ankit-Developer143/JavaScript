var btn = document.getElementById('btn');


//
btn.addEventListener("click", runEvent)  //click and run
btn.addEventListener("dblclick", runEvent); //run when double Click
btn.addEventListener("mousedown", runEvent) //click and hold then it would fire
btn.addEventListener("mouseenter", runEvent) //only drag (mouseOver) and it will fire
btn.addEventListener("mouseleave", runEvent)//opposite
btn.addEventListener("mouseover", runEvent)
btn.addEventListener("mouseout", runEvent)
btn.addEventListener("mousemove", runEvent)//use like game


function runEvent(e) {

    console.log(`Type : ${e.type}`);

}





