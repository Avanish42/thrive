function validateform() {
    var captcha_response = g - recaptcha - response.getResponse();
    if (captcha_response.length == 0) {
        // Captcha is not Passed
        return false;
    }
    else {
        // Captcha is Passed
        return true;
    }
}

function changeImage() {
    if (document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png") {
        document.getElementById('RadioButtonImage').src = "images/attachments/radioButton-2.png";
        document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png";
    }
    else {
        document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png";
    }
}

function changeImage2() {
    if (document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png") {
        document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton-2.png";
        document.getElementById('RadioButtonImage').src = "images/attachments/radioButton.png";
    }
    else {
        document.getElementById('RadioButtonImage2').src = "images/attachments/radioButton.png";
    }
}

function ChangeOptionImage() {
    if (document.getElementById('OptionRadioButton').src = "images/attachments/radioButton.png") {
        document.getElementById('OptionRadioButton').src = "images/attachments/radioButton-2.png";
        document.getElementById('OptionRadioButton').src="images/attachments/radioButton.png";
    }
    else {
        document.getElementById('OptionRadioButton').src = "images/attachments/radioButton.png";
    }
}

function ChangeOptionImage1() {
    if (document.getElementById('Optionradiobutton1').src = "images/attachments/radioButton.png") {
        document.getElementById('Optionradiobutton1').src = "images/attachments/radioButton-2.png";
        /*document.getElementById('Optionradiobutton').src="images/attachments/radioButton.png";*/
    }
    else {
        document.getElementById('Optionradiobutton1').src = "images/attachments/radioButton.png";
    }
}

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
        }else{
            document.getElementById("fname_error").innerHTML="Enter Valid First Name";
            IsError = 'yes';
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
        }else{
            document.getElementById("lname_error").innerHTML="Enter Valid Last Name";
            IsError = 'yes';
        }
    }
    
    //    Check Date of Birth Desktop
    
    elem=document.getElementById("dob").value;
    if(elem==""){
        document.getElementById("dob_error").innerHTML="Select / Enter Date";
        IsError = 'yes';
    }else{
        document.getElementById("dob_error").innerHTML="";
    }
    
    //   Check Phone Number For Desktop
    elem=document.getElementById("phone").value;
    if(elem==""){
        document.getElementById("phone_error").innerHTML="Enter Phone Number";
        IsError = 'yes';
    }else{
        var number=/^[0-9]+$/;
        if(phone.value.match(number)){
            document.getElementById("phone_error").innerHTML="";
        }else{
            document.getElementById("phone_error").innerHTML="Enter Valid Phone Number";
            IsError = 'yes';
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
    
    //    Check Password  For Desktop
    
    elem=document.getElementById("password").value;
    var entered_password = elem;
    if(elem==""){
        document.getElementById("password_error").innerHTML="Enter Password";
        IsError = 'yes';
    }else{
        document.getElementById("password_error").innerHTML="";
    }

    
    //    Check Confirm Password For Desktop
    
    elem=document.getElementById("cpassword").value;
    var entered_cpassword=elem;
    if(elem==""){
        document.getElementById("cpassword_error").innerHTML="Enter Password Again";
        IsError = 'yes';
    }else{
        if(entered_cpassword===entered_password){
            document.getElementById("cpassword_error").innerHTML="";
        }else{
            document.getElementById("cpassword_error").innerHTML="Password did not match";
            IsError = 'yes';
        }
    }
    
    //    Check Terms and Conditions
    
    elem=document.getElementById('checkboxTandC').checked;
    if(elem==false){
        document.getElementById("TandC_error").innerHTML="Accept for Terms and Conditions";
        IsError = 'yes';
    }else{
        if(elem==true){
            document.getElementById("TandC_error").innerHTML="";
        }
    }
    
    //    Check ReCaptcha
    
    var response = grecaptcha.getResponse();
    if(response.length == 0){
        //reCaptcha not verified
        document.getElementById("recaptcha_error").innerHTML="Captcha not verified";
    }else{
        //reCaptch verified
        document.getElementById("recaptcha_error").innerHTML="";
    }
    
    //    Final Error Check
    if(IsError=='yes'){
        return false;
    }else{
        var firstname;
        var lastname;
        var genderSelected;
        var dateOfBirth;
        var phoneNumber;
        var emailId;
        var enteredPassword;
        var thriiveUpdates;
        firstname=document.getElementById('fname').value;
        lastname=document.getElementById('lname').value;
        if(document.getElementById('radioMale').checked==true){
            genderSelected='Male';
        }
        if(document.getElementById('radioFemale').checked==true){
            genderSelected='Female';
        }
        dateOfBirth=document.getElementById('dob').value;
        phoneNumber=document.getElementById('phone').value;
        emailId=document.getElementById('email').value;
        enteredPassword=document.getElementById('cpassword').value;
        if(document.getElementById('checkboxThriiveUpdates').checked==true){
            thriiveUpdates='Yes';
        }else{
            thriiveUpdates='No';
        }
        document.getElementById('formBody').style.display='none';
        document.getElementById('submittingGif').style.display='block';
        
        createEmailUserAccount(emailId, enteredPassword, firstname, lastname, genderSelected, dateOfBirth, phoneNumber, thriiveUpdates);
        return true;
    }
}

 /*<!------------------- JS CODE FOR RADIO BUTTONS BUTTONS --------------------------->*/
    function  radio3() {
       document.getElementById("radiobtn3").style.display ="none";
       document.getElementById("radiobtn4").style.display ="inline";
    }
    function  radio4() {
       document.getElementById("radiobtn4").style.display ="none";
       document.getElementById("radiobtn3").style.display ="inline";
    }

    //Add Signup Event to register Firebase Account
    function createEmailUserAccount(EmailAsUser, PasswordAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber, thriiveUpdates){
        // Get Email and Password
        const auth = firebase.auth(); //INITIATING FIREBASE AUTHENTICATION
        
        //CREATING A NEW USER
        firebase.auth().createUserWithEmailAndPassword(EmailAsUser, PasswordAsUser).catch(function(error) {
            // HANDLING ERRORS
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                accountCreationError.classList.add('accountCreationError');
                accountCreationError.innerHTML = "The password is too weak";
                document.getElementById('submittingGif').style.display='none';
                document.getElementById('successPng').style.display='none';
                document.getElementById('errorPng').style.display='block';
            } else if (errorCode == 'auth/email-already-in-use') {
                accountCreationError.classList.add('accountCreationError');
                accountCreationError.innerHTML = "Email id is already associated with other account";
                document.getElementById('submittingGif').style.display='none';
                document.getElementById('successPng').style.display='none';
                document.getElementById('errorPng').style.display='block';
            } else {
                accountCreationError.innerHTML = "";
            }
            console.log(error);
        });

        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // DISPLAY SUCCESSFULL MESSAGE IF USER SIGNS IN
            AddUserDetailsOnFirebase(EmailAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber, thriiveUpdates);
            accountCreationError.classList.remove('accountCreationError');
            accountCreationError.classList.add('success');
            accountCreationError.innerHTML = "You have signed in successfully. Please login again";
            document.getElementById('submittingGif').style.display='none';
            document.getElementById('successPng').style.display='block';
            document.getElementById('errorPng').style.display='none';

            //SIGNING OUT THE USER TO MAKE HIM RELOGIN
            firebase.auth().signOut();
        } else {
            // No user is signed in.
        }
        });
    };

    function AddUserDetailsOnFirebase(EmailAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber, thriiveUpdates){
        var ref = firebase.database().ref();
        var contactref=ref.child("users");

        contactref.push({
            name: firstname+" "+lastname,
            email: EmailAsUser,
            gender: genderSelected,
            dob: dateOfBirth,
            phone: phoneNumber,
            thriiveupdates: thriiveUpdates,
            createdthrough: 'password',
            profilepic: "-",
            id: EmailAsUser
        });
    }
