function reverseStr(str) {


    //Split 
    var value = str.split("")
    console.log(value);/* op:-[ 'A', 'n', 'k', 'i', 't' ] */


    //Reverse
    var reverseStr = value.reverse();/* [ 't', 'i', 'k', 'n', 'A' ] */
    console.log(reverseStr);

    //Join
    var JoinStr = reverseStr.join("");
    console.log(JoinStr);

}
reverseStr("Ankit");  