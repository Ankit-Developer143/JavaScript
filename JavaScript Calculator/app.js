let screen=document.getElementById('screen');
button = document.querySelectorAll('button');

let screenValue='';
//storing the value of button in "item"
for(item of button){
    
    //if user click button then
    item.addEventListener('click',(e)=>{
        //its return innerText and that value store in buttonText
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText)
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
            else if ( buttonText == 'c'){
                screenValue = "";
                screen.value = screenValue;
                
            }
            else if (buttonText == '='){
                screen.value = eval(screenValue);
            }
            else if(buttonText == '%'){
                screenValue += buttonText;
                screen.value %= screenValue;

            }
            else{
                screenValue += buttonText;
                screen.value = screenValue;

            }
        

    })
}
