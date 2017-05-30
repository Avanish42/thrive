//FUNCTION TO VALIDATE FIELDS
function connectvalidate(){
    var IsError='no';
    var elem='';

    //    Check First Name
    elem=document.getElementById("Firstname").value;
    if(elem==""){
        document.getElementById("Firstname_error").innerHTML="Enter First Name";
        document.getElementById("Firstname").style.border="1px solid red";
        IsError = 'yes';
    }else{
         document.getElementById("Firstname").style.border="none";
        var text=/^[A-Za-z]+$/;
        if(Firstname.value.match(text)){
        document.getElementById("Firstname_error").innerHTML="";
        }else{
            IsError = 'yes';
            document.getElementById("Firstname_error").innerHTML="Enter Valid First Name";
             document.getElementById("Firstname").style.border="1px solid red";
        }
    }

    //    Check Last Name   
//    elem=document.getElementById("Lastname").value;
//    if(elem==""){
//        document.getElementById("Lastname_error").innerHTML="Enter Last Name";
//        IsError = 'yes';
//    }else{
//        var text=/^[A-Za-z]+$/;
//        if(Lastname.value.match(text)){
//            document.getElementById("Lastname_error").innerHTML="";
//        }else{
//            IsError = 'yes';
//            document.getElementById("Lastname_error").innerHTML="Enter Valid Last Name";
//        }
//    }

    //    Check Email Id  
    elem=document.getElementById("Email").value;
    if(elem==""){
        document.getElementById("Email_error").innerHTML="Enter valid E-mail Address";
        document.getElementById("Email").style.border="1px solid red";
        IsError = 'yes';
    }else{
        document.getElementById("Email").style.border="none";
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=elem.length) {
            document.getElementById("Email_error").innerHTML="Not a valid E-mail Address";
             document.getElementById("Email").style.border="1px solid red";
            IsError = 'yes';
        }else{
            document.getElementById("Email_error").innerHTML="";
        }
    }

    //    Check Phone Number
//    elem=document.getElementById("Phoneno").value;
//    if(elem==""){
//        document.getElementById("Phoneno_error").innerHTML="Enter valid Phone Number";
//        IsError = 'yes';
//    }else{
//        var number=/^[0-9]+$/;
//        if(Phoneno.value.match(number)){
//        document.getElementById("Phoneno_error").innerHTML="";
//        }else{
//            IsError = 'yes';
//            document.getElementById("Phoneno_error").innerHTML="Enter Valid Phone Number";
//        }
//    }
    //    Check Textarea  
    elem=document.getElementById("textarea").value;
    if(elem==""){
        document.getElementById("textarea_error").innerHTML="Enter Your Comments";
        document.getElementById("textarea").style.border="1px solid red";
        IsError = 'yes';
    }else{
        document.getElementById("textarea").style.border="none";
        document.getElementById("textarea_error").innerHTML="";
    }
    //    Final Error Check
    if(IsError=='yes'){
        return false;
    }else{
        send_email();
        return true;
    }
}


function send_email(){
    document.getElementById('google_map').style.display="none";
    document.getElementById('FormLeftSide').style.display="none";
    document.getElementById('FormRightSide').style.display="none";

    var firstName=document.getElementById("Firstname").value;
    var lastName=document.getElementById("Lastname").value;
    var email=document.getElementById("Email").value;
    var phoneNumber=document.getElementById("Phoneno").value;
    var message=document.getElementById("textarea").value;
    var fullName=firstName+" "+lastName;

    // parameters: service_id, template_id, template_parameters
    //            emailjs.send("mailgun","contactFormSubmission",{name: fullName, email: email, phone:phoneNumber, message:message, notes: "Check this out!"}) //Thriive
    emailjs.send("mailgun","test2",{name: fullName, email: email, phone:phoneNumber, message:message, notes: "Check this out!"}) //FREE
    .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        if(response.status==200){
            document.getElementById('SuccessMessageDiv').style.display="block";
            saveContactInfoToFirebase(firstName, lastName, email, phoneNumber, message, "Success");
        }

        //alert(response.status); //response.status returns 200 for successful email trigger
    }, function(err) {
       console.log("FAILED. error=", err);
        saveContactInfoToFirebase(firstName, lastName, email, phoneNumber, message, "Fail");
    });
}

function saveContactInfoToFirebase(firstName, lastName, email, phoneNumber, message, status){
    var ref = firebase.database().ref();
    var contactref=ref.child("contact");

    contactref.push({
        firstname: firstName,
        lastname:lastName,
        email: email,
        phonenumber: phoneNumber,
        message: message,
        status: status
    });    
}