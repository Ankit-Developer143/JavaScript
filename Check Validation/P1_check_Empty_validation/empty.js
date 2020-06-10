function required() {
    var empt=document.form1.text1.value;
    if (empt === '') {
        alert('This Field is requird please enter Values:enter Input')
        return false;
        
    }else{
        alert('code accepted:you can try another one');
        return true;
    }
    
}