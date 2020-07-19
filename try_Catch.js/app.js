try {
    //nonExistentFunction();
    function first() {
        console.log("hello");
    }
  } catch (error) {
    console.error(error);
    //OP:- expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  first();


  /* Notes=======>>>>>.
  
try...catch
try...finally
try...catch...finally
  
  
  */