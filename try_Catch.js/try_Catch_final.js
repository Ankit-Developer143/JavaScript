/* 
    try{
        throw new Error("OOPS!")
    }
    catch(e){
        console.log(e.message);
    }
   finally{
        console.log("finally");
    }
 */

function isValidJSON(text) {
    let a = 10
    let b = 0;
    try {
        const result = b / a;
        return result;

        return true;
    } catch (e) {
        console.log(e.message);;
    } finally {
        console.log("finally");
    }
}
console.log(isValidJSON());
//op is Finally and then 0