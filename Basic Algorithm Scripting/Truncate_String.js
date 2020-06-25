/* function truncateString(str, num) {


    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
}
console.log(truncateString("Hello my name is ankit singh solanki",5)); */


let f = function(str,num) {
    if (str.length>num) {
        return str.slice(0,num);
        
    }else{
        return str;
    }
    
}
console.log(f("This is my String Name",5));
