const txtEmailAsUser = document.getElementById('txtEmailAsUser');
const txtPasswordAsUser = document.getElementById('txtPasswordAsUser');
const btnLoginAsUser = document.getElementById('btnLoginAsUser');
const SubmitMessage = document.getElementById('SubmitMessage');
const btnSignUpAsUser = document.getElementById('SignupSubmitButton');
var loginOptFlag = "user";

var EmailAsUserFlag = 'Invalid';
var PasswordAsUserFlag = 'Invalid';

//EMAIL VALIDATOR
function validateEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }else{
        return true;
    }
}

//VALIDATING EMAIL AND PASSWORD FIELDS
function validateEmailAndPasswordAsUser(){
    if(EmailAsUserFlag == "Invalid"){
        document.getElementById('txtEmailAsUser').classList.remove('signIn_input');
        document.getElementById('txtEmailAsUser').classList.add('signIn_input_error');
    }else{
        document.getElementById('txtEmailAsUser').classList.add('signIn_input');
        document.getElementById('txtEmailAsUser').classList.remove('signIn_input_error');
    }

    if(PasswordAsUserFlag == "Invalid"){
        document.getElementById('txtPasswordAsUser').classList.remove('signIn_input');
        document.getElementById('txtPasswordAsUser').classList.add('signIn_input_error');
    }else{
        document.getElementById('txtPasswordAsUser').classList.add('signIn_input');
        document.getElementById('txtPasswordAsUser').classList.remove('signIn_input_error');
    }
}

//ONBLUR FUNCTION TO CHECK EMAIL AS USER INPUT FIELD
function validateEmailAsUser(){
    if(validateEmail(document.getElementById('txtEmailAsUser').value)){
        EmailAsUserFlag="Valid";
        document.getElementById('txtEmailAsUser').classList.add('signIn_input');
        document.getElementById('txtEmailAsUser').classList.remove('signIn_input_error');
    }else{
        EmailAsUserFlag="Invalid";
        document.getElementById('txtEmailAsUser').classList.remove('signIn_input');
        document.getElementById('txtEmailAsUser').classList.add('signIn_input_error');
    }
}

//ONBLUR FUNCTION TO CHECK PASSWORD AS USER INPUT FIELD
function validatePasswordAsUser(){
    if((document.getElementById('txtPasswordAsUser').value).length > 0){
        PasswordAsUserFlag="Valid";
        document.getElementById('txtPasswordAsUser').classList.add('signIn_input');
        document.getElementById('txtPasswordAsUser').classList.remove('signIn_input_error');
    }else{
        PasswordAsUserFlag="Invalid";
        document.getElementById('txtPasswordAsUser').classList.remove('signIn_input');
        document.getElementById('txtPasswordAsUser').classList.add('signIn_input_error');
    }
}

//Add Login Event
function signInAsUser(){
    // Get Email and Password
    const EmailAsUser = document.getElementById('txtEmailAsUser').value;
    const PasswordAsUser = document.getElementById('txtPasswordAsUser').value;

    //VALIDATING USER ID AND PASSWORD FIELDS
    if(EmailAsUserFlag == "Valid" && PasswordAsUserFlag == "Valid"){
        //SIGN IN & CATCHING ERRORS
        firebase.auth().signInWithEmailAndPassword(EmailAsUser, PasswordAsUser).catch(function(error) {
            // HANDLING ERRORS
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            if (errorCode == 'auth/wrong-password') {
                document.getElementById('SubmitMessage').classList.add('SubmitMessageError');
                document.getElementById('SubmitMessage').innerHTML = "Invalid Email or Password";
            }else if (errorCode == 'auth/user-disabled') {
                document.getElementById('SubmitMessage').classList.add('SubmitMessageError');
                document.getElementById('SubmitMessage').innerHTML = "User id is disabled. Contact Support";
            }else if (errorCode == 'auth/user-not-found') {
                document.getElementById('SubmitMessage').classList.add('SubmitMessageError');
                document.getElementById('SubmitMessage').innerHTML = "Invalid Email or Password";
            }
        });
        
        //Handle Account Status
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if(user) {
                console.log(user);
                // REMOVE ERROR MESSAGES IF ANY
                document.getElementById('SubmitMessage').classList.remove('SubmitMessageError');
                document.getElementById('SubmitMessage').classList.add('SubmitMessageSuccess');
                document.getElementById('SubmitMessage').innerHTML = "Logged in Successfully";
                document.getElementById("myModal").style.display="none";
                closeModal();
                display_username_if_signed_in();
                // document.getElementById("signin_tag").style.display="none";
                // document.getElementById("signIn").style.display="none";
                // document.getElementById('signedin_tag').style.display="block";
                // document.getElementById("signin_user_name").innerText=user.displayName;
                
                
                // location.reload(); //After successful login, user will be redirected to home.html
            }
        });
    }else{ //Validating and highlighting error text boxes
        validateEmailAndPasswordAsUser();
    }
}
    //Add Signup Event
    btnSignUpAsUser.addEventListener('click', e =>{
        // Get Email and Password
        const EmailAsUser = txtEmailAsUser.value;
        const PasswordAsUser = txtPasswordAsUser.value;
        const auth = firebase.auth(); //INITIATING FIREBASE AUTHENTICATION
        
        if(EmailAsUserFlag == "Valid" && PasswordAsUserFlag == "Valid"){
            //CREATING A NEW USER
            firebase.auth().createUserWithEmailAndPassword(EmailAsUser, PasswordAsUser).catch(function(error) {
                // HANDLING ERRORS
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    document.getElementById('SubmitMessage').classList.add('SubmitMessageError');
                    document.getElementById('SubmitMessage').innerHTML = "The password is too weak";
                } else if (errorCode == 'auth/email-already-in-use') {
                    document.getElementById('SubmitMessage').classList.add('SubmitMessageError');
                    document.getElementById('SubmitMessage').innerHTML = "Email id is already associated with other account";
                }
                console.log(error);
            });
            
            firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // DISPLAY SUCCESSFULL MESSAGE IF USER SIGNS IN
                document.getElementById('SubmitMessage').classList.remove('SubmitMessageError');
                document.getElementById('SubmitMessage').classList.add('SubmitMessageSuccess');
                document.getElementById('SubmitMessage').innerHTML = "You have signed in successfully. Please login again";
                // location.reload();
                //MAKING TEXT BOX VALUES TO NULL
                txtEmailAsUser.value="";
                txtPasswordAsUser.value="";
                
                //SIGNING OUT THE USER TO MAKE HIM RELOGIN
                // firebase.auth().signOut();
            } else {
                // No user is signed in.
            }
            });
        }else{ //Validating and highlighting error text boxes
            validateEmailAndPasswordAsUser()
        }
    });

	
	//SHOW PASSWORD SCRIPT
	function showPassword(){
//        alert();
		var elem=document.getElementById("txtPasswordAsUser").type;
        var showPasswodEye = document.getElementById("PW_Eye");
		if(elem=='password'){
			document.getElementById("txtPasswordAsUser").type="text";
            showPasswodEye.setAttribute("src", "images/PW_Eye_2.png");
		}else{
			document.getElementById("txtPasswordAsUser").type="password";
            showPasswodEye.setAttribute("src", "images/PW_Eye.png");
		}
	}



//TO CHANGE RAIO BUTTONS
function signintypeAsPractitioner(){
    loginOptFlag = "practitioner";
    document.getElementById("singupMessage").style.display="block";
    document.getElementById("socialMedia").style.display="none";
    document.getElementById("loginModuleHeaing").innerHTML="sign in as a practitioner";
      
    var UserSingin = document.getElementById("userButton");
    var PractitionerSingin = document.getElementById("PractitionerButton");
    var changeform = document.getElementById("form");
    
    UserSingin.setAttribute("src", "images/radioButton.png");
    PractitionerSingin.setAttribute("src", "images/radioButton-2.png");
}

function signintypeAsUser(){
    loginOptFlag = "user";
    document.getElementById("singupMessage").style.display="none";
    document.getElementById("socialMedia").style.display="block";
    document.getElementById("loginModuleHeaing").innerHTML="sign in as a user";
    
    var UserSingin = document.getElementById("userButton");
    var PractitionerSingin = document.getElementById("PractitionerButton");
    var changeform = document.getElementById("form");
    
    UserSingin.setAttribute("src", "images/radioButton-2.png");
    PractitionerSingin.setAttribute("src", "images/radioButton.png");
}

function loadUserSignUp(){
        if (loginOptFlag=="user"){
            document.getElementById("loginModule").style.display="none";
            document.getElementById("SigUpUserForm").style.display="block";
            document.getElementById("loginModuleHeaing").innerHTML="sign up as a user";
            document.getElementById("wsp_reg_form").style.display="none";
            document.getElementById("formBody").style.display="block";
        }else{
            document.getElementById("loginModule").style.display="none";
            document.getElementById("SigUpUserForm").style.display="block";
            document.getElementById("wsp_reg_form").style.display="block";
            document.getElementById("formBody").style.display="none";
            document.getElementById("loginModuleHeaing").innerHTML="sign up as a practitioner";
            closeModal();
            document.location.href="wsp_signupPage.html";
        }
}

  
    function openSigninForm(){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("signin_tag");
        modal.style.display = "block";
        document.getElementById("SigUpUserForm").style.display="none";
        document.getElementById("loginModule").style.display="block";
        document.getElementById("loginModuleHeaing").innerHTML="sign in as a user";
        }
    function closeModal(){
        loginOptFlag = "user";
        var UserSingin = document.getElementById("userButton");
        var PractitionerSingin = document.getElementById("PractitionerButton");
        
        UserSingin.setAttribute("src", "images/radioButton-2.png");
        PractitionerSingin.setAttribute("src", "images/radioButton.png");
        
        document.getElementById("myModal").style.display="none";
        document.getElementById("singupMessage").style.display="none";
        document.getElementById('txtEmailAsUser').value = "";
        document.getElementById('txtPasswordAsUser').value = "";
        document.getElementById("txtEmailAsUser").classList.remove('signIn_input_error');
        document.getElementById("txtPasswordAsUser").classList.remove('signIn_input_error');
        document.getElementById("txtEmailAsUser").classList.add('signIn_input');
        document.getElementById("txtPasswordAsUser").classList.add('signIn_input');
        document.getElementById("wspErrorMsg").innerHTML="";
    }

    function ihaveAccount(){
         document.getElementById("SigUpUserForm").style.display="none";
         document.getElementById("loginModule").style.display="block";
         document.getElementById("loginModuleHeaing").innerHTML="sign in as a user";
    
    }


//WSP FORM-1A VALIDATIONS (IT IS NOT IN USR)

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
        document.getElementById("wsp_fname_error").innerHTML = "";
    }
     
        
    //    Check Phone Number
   var elem = document.getElementById("wsp_phone").value;
    
    if (isNaN(elem) || elem < 7000000000 || elem > 9999999999) {
        document.getElementById("wsp_phone_error").innerHTML = "Enter valid Phone Number";
        document.getElementById("wsp_phone").style.border="1px solid red";
        IsError = 'yes';
    } else {
        document.getElementById("wsp_phone_error").innerHTML = "";
        document.getElementById("wsp_phone").style.border="none";
    }
    
    //    Check Email Id  
    elem = document.getElementById("wsp_email").value;
    if (elem == "") {
        document.getElementById("wsp_email_error").innerHTML = "Enter E-mail Address";
        document.getElementById("wsp_email").style.border="1px solid red";
        IsError = 'yes';
    } else {
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
    
    //    Check City Name
    elem = document.getElementById("wsp_city").value;
    if (elem == "") {
        document.getElementById("wsp_city_error").innerHTML = "Enter City Name";
        document.getElementById("wsp_city").style.border="1px solid red";
        IsError = 'yes';
    }
    else {
        document.getElementById("wsp_city").style.border="none";
        document.getElementById("wsp_city_error").innerHTML = "";
    }
    
    //  Final Validation Check
    if (IsError == 'yes') {
        return false;
    }
    else {
        //send_email();
        //Adding the details in Firebase under WSP Registrations
        var ref = firebase.database().ref();
        var wspPreRegistrations=ref.child("wsppreregistrstions");
        WspName = document.getElementById("wsp_fname").value;
        WspEmail = document.getElementById("wsp_email").value;
        WspPhone = document.getElementById("wsp_phone").value;
        WspCity = document.getElementById("wsp_city").value;
        
        //Checking if user with Email already exist
        var emailRef = firebase.database().ref();
        var emailUserRef=ref.child("users");

        emailUserRef.orderByChild("email").equalTo(WspEmail).once('value', function(snapshot){
            var exists = (snapshot.val() !==null);
            if (exists) {
                document.getElementById("wspErrorMsg").innerHTML="This email id is already associated with other account";
                console.log("Already Exist");
                //Do Nothing
            } else {
                //Update WSP details on Firebase
                wspPreRegistrations.push({
                    name: WspName,
                    email: WspEmail,
                    phone: WspPhone,
                    city: WspCity,
					role:"User",
                    status:"waiting",
                    submittedOn: firebase.database.ServerValue.TIMESTAMP
                });
                document.getElementById("wspErrorMsg").innerHTML="Thank you for the Details!<br><br>Our executive will get in touch with you shortly.";
                document.getElementById("wspErrorMsg").classList.remove('wsp_alert');
                document.getElementById("wspErrorMsg").classList.add('wsp_Successalert');
                document.getElementById("SigUpUserForm").style.display="none";
//                closeModal();
            }
        });
        return true;
    }
   
}

//OPEN WSP PRE REGESTRATION FORM IN HOME PAGE

function activateWSPsignup(){
    document.getElementById("myModal").style.display="none";
    document.getElementById("SigUpUserForm").style.display="none";
    document.getElementById("loginModule").style.display="none";
    document.getElementById("formBody").style.display="none";
    document.getElementById("loginModuleHeaing").innerHTML="sign up as a practitioner";
}

//OPEN USER REGESTRATION FORM IN MENU SECTION
function activateUsersignup(){
    document.getElementById("myModal").style.display="block";
    document.getElementById("SigUpUserForm").style.display="block";
    document.getElementById("loginModule").style.display="none";
    document.getElementById("wsp_reg_form").style.display="none";
    document.getElementById("loginModuleHeaing").innerHTML="sign up as a user";
}


//DISPLAY SUBMENU IN BOMIBLE DEVISE ON CLICK 
function openSubmenuinMobile(){
    document.getElementById("thriive_world_sub_menu").style.display="block";
    document.getElementById("minusButton").style.display="block";
    document.getElementById("plusButton").style.display="none";
}
//CLOSE SUBMENU IN BOMIBLE DEVISE ON CLICK 
function closeSubmenuinMobile(){
    document.getElementById("thriive_world_sub_menu").style.display="none";
    document.getElementById("minusButton").style.display="none";
    document.getElementById("plusButton").style.display="block";
}

//OPEN FORGET PASSWORD

function openForgetPassword(){
    document.getElementById("myModal2").style.display="block";
    document.getElementById("myModal").style.display="none";
}

function closeModal2(){
    document.getElementById("myModal2").style.display="none";
    document.getElementById("myModal").style.display="block";
    document.getElementById('forgetPwMail').style.border="none";
    document.getElementById('forgetPwMail_error').innerHTML="";
}

//ONBLUR FUNCTION TO CHECK EMAIL AS USER INPUT FIELD
function validateEmaiForgetPW(){
    var email = document.getElementById("forgetPwMail").value;
    if(email == ""){
        document.getElementById('forgetPwMail_error').innerHTML="Enter Your Email ID";
        document.getElementById('forgetPwMail').style.border="1px solid red";
    }else{
        document.getElementById('forgetPwMail_error').innerHTML="";
        document.getElementById('forgetPwMail').style.border="none";
    }
}



