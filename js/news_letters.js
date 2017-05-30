
//FUNCTION TO VALIDATE THE USER INPUTS
function Signupvalidate(){
//    Check First Name For Desktop
     var IsError='no';
        var elem='';
        elem=document.getElementById("fname").value;
        if(elem==""){
            document.getElementById("fname_error").innerHTML="Enter First Name";
            IsError = 'yes';
        }else{
            var text=/^[A-Za-z]+$/;
            if(fname.value.match(text)){
            document.getElementById("fname_error").innerHTML="";
            IsError = 'yes';
            }else{
            document.getElementById("fname_error").innerHTML="Enter Valid First Name";
            }
        }
    
    //    Check First Name For Mobile
    
       elem=document.getElementById("mobile_fname").value;
        if(elem==""){
            document.getElementById("mobile_fname_error").innerHTML="Enter First Name";
            IsError = 'yes';
        }else{
            var text=/^[A-Za-z]+$/;
            if(mobile_fname.value.match(text)){
            document.getElementById("mobile_fname_error").innerHTML="";
            IsError = 'yes';
            }else{
            document.getElementById("mobile_fname_error").innerHTML="Enter Valid First Name";
            }
        }
    
//    Check Last Name For Desktop
    
    elem=document.getElementById("lname").value;
    if(elem==""){
        document.getElementById("lname_error").innerHTML="Enter Last Name";
        IsError = 'yes';
    }else{
        var text=/^[A-Za-z]+$/;
        if(lname.value.match(text)){
        document.getElementById("lname_error").innerHTML="";
        IsError = 'yes';
    }else{
        document.getElementById("lname_error").innerHTML="Enter Valid Last Name";
        }
    }
    
    //    Check Last Name For Mobile
    
    elem=document.getElementById("mobile_lname").value;
    if(elem==""){
        document.getElementById("mobile_lname_error").innerHTML="Enter Last Name";
        IsError = 'yes';
    }else{
        var text=/^[A-Za-z]+$/;
        if(mobile_lname.value.match(text)){
        document.getElementById("mobile_lname_error").innerHTML="";
        IsError = 'yes';
    }else{
        document.getElementById("mobile_lname_error").innerHTML="Enter Valid Last Name";
        }
    }
    
    
//    Check Email Id For Desktop
    
    elem=document.getElementById("email").value;
    if(elem==""){
        document.getElementById("email_error").innerHTML="Enter Email Address";
        IsError = 'yes';
    }else{
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=elem.length) {
            document.getElementById("email_error").innerHTML="Not a valid e-mail address";
            IsError = 'yes';
        }else{
            document.getElementById("email_error").innerHTML="";
        }
    }
    
    //    Check Email Id For Mobile
    
    elem=document.getElementById("mobile_email").value;
    if(elem==""){
        document.getElementById("mobile_email_error").innerHTML="Enter E-mail Address";
        IsError = 'yes';
    }else{
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=elem.length) {
            document.getElementById("mobile_email_error").innerHTML="Not a valid E-mail address";
            IsError = 'yes';
        }else{
            document.getElementById("mobile_email_error").innerHTML="";
        }
    }
    
//    Final Error Check
    if(IsError=='yes'){
        return false;
    }else{
        return true;
    }
}






 /*<!------------------- JS CODE FOR RADIO BUTTONS BUTTONS --------------------------->*/
        
    function changeImage() {
        if (document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png") {
            document.getElementById('RadioButtonImage').src = "images/attachments/radioButton-2.png";
            document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png";
            document.getElementById("Radio1").checked= true;
            document.getElementById("Radio2").checked= false;
            
        }
        else {
            document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png";
        }
    }

    function changeImage2() {
        if (document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png") {
            document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton-2.png";
            document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png";
            document.getElementById("Radio1").checked= false;
            document.getElementById("Radio2").checked= true;
        }
        else {
            document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png";
        }
    }
   function  radio1() {
       document.getElementById("radiobtn1").style.display ="none";
       document.getElementById("radiobtn2").style.display ="inline";
      }
    function  radio2() {
       document.getElementById("radiobtn2").style.display ="none";
       document.getElementById("radiobtn1").style.display ="inline";
      }
     function  radio3() {
       document.getElementById("radiobtn3").style.display ="none";
       document.getElementById("radiobtn4").style.display ="inline";
      }
    function  radio4() {
       document.getElementById("radiobtn4").style.display ="none";
       document.getElementById("radiobtn3").style.display ="inline";
      }
     