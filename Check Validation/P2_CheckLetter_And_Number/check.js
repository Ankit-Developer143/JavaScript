function alphanumeric( ) {
    var letter=/^[0-9a-zA-Z]+$/;
    var check=document.form1.text1;
if(check.value.match(letter)){
    alert('Your registration Number Is Accepted:You Can Try Another')
    return true;
}
else{
    alert('Please Enter alphanumeric character:Try Again')
    return false;

}
}