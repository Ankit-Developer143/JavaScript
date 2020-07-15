//Simple try catch block

 try {
    throw new Error("OOPS!")//Store in OOPS

}
catch (e) {
    console.log("inner", e.message);

}//op:-inner OOPS! 


//Nested try Catch Finally
try {
    try {
        throw new Error("OOPS!")  //store in e
    }
    catch (e) {
        console.log("inner", e.message);
        throw e;
    } finally {
        console.log("Finally");
    }
} catch (ex) {
    console.log("catch", ex.message);
}

/*
inner OOPS!
Finally
catch OOPS! */








