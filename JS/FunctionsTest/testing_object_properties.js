var myObj = {
    
    gift: “pony”,
    pet: “kitten”,
    bed: “sleigh”
    };
    
    function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp) === true) {
     console.log( myObj.checkProp);
    } else {
    console.log(“Not Found”);
    }
    
    }
    
    // Test your code by modifying these values
    console.log(checkObj(“gift”) ); 


  


  