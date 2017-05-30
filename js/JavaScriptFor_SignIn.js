const txtEmailAsUser = document.getElementById('txtEmailAsUser');
const txtPasswordAsUser = document.getElementById('txtPasswordAsUser');
const btnLoginAsUser = document.getElementById('btnLoginAsUser');
const SubmitMessage = document.getElementById('SubmitMessage');

//const btnSignUpAsUser = document.getElementById('btnSignUpAsUser');

var EmailAsUserFlag = 'Invalid';
var PasswordAsUserFlag = 'Invalid';

function validateEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }else{
        return true;
    }
}

function validateEmailAndPasswordAsUser(){
    if(EmailAsUserFlag == "Invalid"){
        txtEmailAsUser.classList.remove('signIn_input');
        txtEmailAsUser.classList.add('signIn_input_error');
    }else{
        txtEmailAsUser.classList.add('signIn_input');
        txtEmailAsUser.classList.remove('signIn_input_error');
    }

    if(PasswordAsUserFlag == "Invalid"){
        txtPasswordAsUser.classList.remove('signIn_input');
        txtPasswordAsUser.classList.add('signIn_input_error');
    }else{
        txtPasswordAsUser.classList.add('signIn_input');
        txtPasswordAsUser.classList.remove('signIn_input_error');
    }
}

txtEmailAsUser.addEventListener('change', e => {
    if(validateEmail(txtEmailAsUser.value)){
        EmailAsUserFlag="Valid";
        txtEmailAsUser.classList.add('signIn_input');
        txtEmailAsUser.classList.remove('signIn_input_error');
    }else{
        EmailAsUserFlag="Invalid";
        txtEmailAsUser.classList.remove('signIn_input');
        txtEmailAsUser.classList.add('signIn_input_error');
    }
    
});

txtPasswordAsUser.addEventListener('change', e => {
    if((txtPasswordAsUser.value).length > 0){
        PasswordAsUserFlag="Valid";
        txtPasswordAsUser.classList.add('signIn_input');
        txtPasswordAsUser.classList.remove('signIn_input_error');
    }else{
        PasswordAsUserFlag="Invalid";
        txtPasswordAsUser.classList.remove('signIn_input');
        txtPasswordAsUser.classList.add('signIn_input_error');
    }
    
});

//Add Login Event
    btnLoginAsUser.addEventListener('click', e =>{
        // Get Email and Password
        const EmailAsUser = txtEmailAsUser.value;
        const PasswordAsUser = txtPasswordAsUser.value;
//        const auth = firebase.auth(); //INITIATING FIREBASE AUTHENTICATION
        
        if(EmailAsUserFlag == "Valid" && PasswordAsUserFlag == "Valid"){
            //SIGN IN & CATCHING ERRORS
            firebase.auth().signInWithEmailAndPassword(EmailAsUser, PasswordAsUser).catch(function(error) {
                // HANDLING ERRORS
                var errorCode = error.code;
                var errorMessage = error.message;
                
                if (errorCode == 'auth/wrong-password') {
                    SubmitMessage.classList.add('SubmitMessageError');
                    SubmitMessage.innerHTML = "User id or password is wrong";
                }else if (errorCode == 'auth/user-disabled') {
                    SubmitMessage.classList.add('SubmitMessageError');
                    SubmitMessage.innerHTML = "User id is disabled. Contact Support";
                }
            });
            // FETCHING USER DETAILS AFTER SUCCESSFUL LOGIN
            //Handle Account Status
            firebase.auth().onAuthStateChanged(user => {
              if(user) {
                // REMOVE ERROR MESSAGES IF ANY
                SubmitMessage.classList.remove('SubmitMessageError');
                SubmitMessage.classList.add('SubmitMessageSuccess');
                SubmitMessage.innerHTML = "Logged in Successfully";
                window.location = 'account_Page.html'; //After successful login, user will be redirected to home.html
              }
            });
//            var user = firebase.auth().currentUser;
//
//            if (user) {
//                user.providerData.forEach(function (profile) {
//                    console.log("  Sign-in provider: "+profile.providerId);
//                    console.log("  Provider-specific UID: "+profile.uid);
//                    console.log("  Name: "+profile.displayName);
//                    console.log("  Email: "+profile.email);
//                    console.log("  Photo URL: "+profile.photoURL);
//                
//                });
//                // REMOVE ERROR MESSAGES IF ANY
//                SubmitMessage.classList.remove('SubmitMessageError');
//                SubmitMessage.classList.add('SubmitMessageSuccess');
//                SubmitMessage.innerHTML = "Logged in Successfully";
//                window.location.assign("account_Page.html");
//            }
        }else{ //Validating and highlighting error text boxes
//            validateEmailAndPasswordAsUser();
        }
    
    });

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
                    SubmitMessage.classList.add('SubmitMessageError');
                    SubmitMessage.innerHTML = "The password is too weak";
                } else if (errorCode == 'auth/email-already-in-use') {
                    SubmitMessage.classList.add('SubmitMessageError');
                    SubmitMessage.innerHTML = "Email id is already associated with other account";
                }
                console.log(error);
            });
            
            firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // DISPLAY SUCCESSFULL MESSAGE IF USER SIGNS IN
                SubmitMessage.classList.remove('SubmitMessageError');
                SubmitMessage.classList.add('SubmitMessageSuccess');
                SubmitMessage.innerHTML = "You have signed in successfully. Please login again";
                
                //MAKING TEXT BOX VALUES TO NULL
                txtEmailAsUser.value="";
                txtPasswordAsUser.value="";
                
                //SIGNING OUT THE USER TO MAKE HIM RELOGIN
                firebase.auth().signOut();
            } else {
                // No user is signed in.
            }
            });
        }else{ //Validating and highlighting error text boxes
            validateEmailAndPasswordAsUser()
        }
    });

	
	//SHOW PASSWORD SCRIPT
	function showPassword(id){
		var elem=document.getElementById(id).type;
		if(elem=='password'){
			document.getElementById(id).type="text";
		}else{
			document.getElementById(id).type="password";
		}
	}
