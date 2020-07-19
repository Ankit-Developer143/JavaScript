function form_validation(){  
    var name=document.myform.name.value;  
    
    //var x = document.forms["myform"]["name"].value;
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }  
    }