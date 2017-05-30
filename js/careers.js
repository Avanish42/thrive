//FUNCTION TO VALIDATE FIELDS
function Careervalidate() {
    //    Check First Name
    var IsError = 'no';
    var elem = '';
    elem = document.getElementById("CareerFirstname").value;
    if (elem == "") {
        document.getElementById("Career_Firstname_error").innerHTML = "Enter First Name";
        document.getElementById("CareerFirstname").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
        document.getElementById("CareerFirstname").style.border="none";
        var text = /^[A-Za-z]+$/;
        if (CareerFirstname.value.match(text)) {
            document.getElementById("Career_Firstname_error").innerHTML = "";
        }
        else {
            document.getElementById("Career_Firstname_error").innerHTML = "Enter Valid First Name";
            document.getElementById("CareerFirstname").style.border="1px solid red";
            IsError = 'yes';
        }
    }
    
    //    Check Last Name   
//    elem = document.getElementById("CareerLastname").value;
//    if (elem == "") {
//        document.getElementById("Career_Lastname_error").innerHTML = "Enter Last Name";
//        IsError = 'yes';
//    }
//    else {
//        var text = /^[A-Za-z]+$/;
//        if (CareerLastname.value.match(text)) {
//            document.getElementById("Career_Lastname_error").innerHTML = "";
//        }
//        else {
//            document.getElementById("Career_Lastname_error").innerHTML = "Enter Valid Last Name";
//            IsError = 'yes';
//        }
//    }
    //    Check Email Id  
    elem = document.getElementById("CareerEmail").value;
    if (elem == "") {
        document.getElementById("Career_Email_error").innerHTML = "Enter E-mail Address";
         document.getElementById("CareerEmail").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
         document.getElementById("CareerEmail").style.border="none";
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= elem.length) {
            document.getElementById("Career_Email_error").innerHTML = "Not a valid E-mail Address";
              document.getElementById("CareerEmail").style.border="1px solid red";
            
            IsError = 'yes';
        }
        else {
            document.getElementById("Career_Email_error").innerHTML = "";
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


function send_email() {
    document.getElementById('WantToWorkWithUs').style.display = "none";
    document.getElementById('OtherDetails').style.display = "none";
    document.getElementById('Career_Form').style.display = "none";
    document.getElementById('career_SubmitButton_left').style.display = "none";
    var firstName = document.getElementById("CareerFirstname").value;
    var lastName = document.getElementById("CareerLastname").value;
    var email = document.getElementById("CareerEmail").value;
    var message = document.getElementById("Careertextarea").value;
    var fullName = firstName + " " + lastName;
    // parameters: service_id, template_id, template_parameters
//    emailjs.send("mailgun", "career_form_submission", {
//            name: fullName
//            , email: email
//            , message: message
//            , notes: "Check this out!"
//        }) //Thriive
//        //            emailjs.send("mailgun","test2",{name: fullName, email: email, phone:phoneNumber, message:message, notes: "Check this out!"}) //FREE
//        .then(function (response) {
//            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
//            if (response.status == 200) {
//                document.getElementById('SuccessMessageDiv').style.display = "block";
//                saveCareerInfoToFirebase(firstName, lastName, email, message, "Success");
//            }
//            //alert(response.status); //response.status returns 200 for successful email trigger
//        }, function (err) {
//            console.log("FAILED. error=", err);
//            saveCareerInfoToFirebase(firstName, lastName, email, message, "Fail");
//        });
    saveCareerInfoToFirebase(firstName, lastName, email, message);
    window.location = "http://mailer.thriive.in/mail.php?template=CareersU&email="+email+"&name="+fullName;
}

function saveCareerInfoToFirebase(firstName, lastName, email, message) {
    var ref = firebase.database().ref();
    var contactref = ref.child("careers");
    contactref.push({
        firstname: firstName,
        lastname: lastName,
        email: email,
        message: message
    });
}