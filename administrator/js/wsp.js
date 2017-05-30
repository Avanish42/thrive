//FUNCTION TO VALIDATE FIELDS
function wspValidate() {
    //    Check First Name
    var IsError = 'no';
    var elem = '';
    elem = document.getElementById("wsp_fname").value;
    if (elem == "") {
        document.getElementById("wsp_fname_error").innerHTML = "Enter First Name";
        document.getElementById("wsp_fname").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
        document.getElementById("wsp_fname").style.border="none";
        var text = /^[A-Za-z]+$/;
        if (CareerFirstname.value.match(text)) {
            document.getElementById("wsp_fname_error").innerHTML = "";
        }
        else {
            document.getElementById("wsp_fname_error").innerHTML = "Enter Valid First Name";
            document.getElementById("fname_error").style.border="1px solid red";
            IsError = 'yes';
        }
    }
    
     
        
    //    Check Phone Number
   var elem = document.getElementById("wsp_phone").value;
    if (elem == "") {
        document.getElementById("wsp_phone_error").innerHTML = "Enter valid Phone Number";
        document.getElementById("wsp_phone").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
        var number = /^[0-9]+$/;
        if (Phoneno.value.match(number)) {
            document.getElementById("wsp_phone_error").innerHTML = "";
            document.getElementById("wsp_phone").style.border="1px solid red";
        }
        else {
            IsError = 'yes';
            document.getElementById("wsp_phone_error").innerHTML = "Enter Valid Phone Number";
            document.getElementById("wsp_phone").style.border="1px solid red";
        }
    }
    
    //    Check Email Id  
    elem = document.getElementById("wsp_email").value;
    if (elem == "") {
        document.getElementById("wsp_email_error").innerHTML = "Enter E-mail Address";
         document.getElementById("wsp_email").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
         document.getElementById("wsp_email").style.border="none";
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= elem.length) {
            document.getElementById("wsp_email_error").innerHTML = "Not a valid E-mail Address";
              document.getElementById("wsp_email").style.border="1px solid red";
            
            IsError = 'yes';
        }
        else {
            document.getElementById("wsp_email_error").innerHTML = "";
        }
    }
    if (IsError == 'yes') {
        return false;
    }
    else {
        send_email();
        return true;
    }
   
}