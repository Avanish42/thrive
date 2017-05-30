// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAUaD4c42VIY4fYh0xY2A2XeLSCGzXMEA",
    authDomain: "thriivedev-9673e.firebaseapp.com",
    databaseURL: "https://thriivedev-9673e.firebaseio.com",
    storageBucket: "thriivedev-9673e.appspot.com",
    messagingSenderId: "298345158344"
};

//Firebase for UAT 
// var config = {
//   apiKey: "AIzaSyDxuVH4UDXUeyCcmvSPcmVcjFfaD7YfmEY",
//   authDomain: "thriiveuat.firebaseapp.com",
//   databaseURL: "https://thriiveuat.firebaseio.com",
//   storageBucket: "thriiveuat.appspot.com",
//   messagingSenderId: "1092591540342"
// };

firebase.initializeApp(config);
var AdminUserIdFlag = "Invalid";
var AdminPasswordFlag = "Invalid";
var ThriiveAdminEmailId = "ramki558@gmail.com";




//function gAdminLogin(){
//    //Google Authentification
//    var provider = new firebase.auth.GoogleAuthProvider();
//    provider.addScope('https://www.googleapis.com/auth/plus.login');
//    provider.setCustomParameters({
//      'login_hint': 'user@example.com'
//    });
//    firebase.auth().signInWithRedirect(provider);
//
//    firebase.auth().getRedirectResult().then(function(result) {
//      if (result.credential) {
//        // This gives you a Google Access Token. You can use it to access the Google API.
//        var token = result.credential.accessToken;
//          console.log(token);
//        // ...
//      }
//      // The signed-in user info.
//      var user = result.user;
//
//    }).catch(function(error) {
//      // Handle Errors here.
//      var errorCode = error.code;
//      var errorMessage = error.message;
//      // The email of the user's account used.
//      var email = error.email;
//      // The firebase.auth.AuthCredential type that was used.
//      var credential = error.credential;
//    });
//}

function signInAsUser(){
    // Get Email and Password
    const AdminUserId = document.getElementById('AdminUID').value;
    const AdminPassword = document.getElementById('AdminPassword').value;
    
    //VALIDATING ENTERED ADMIN USER ID
    var atpos = AdminUserId.indexOf("@");
    var dotpos = AdminUserId.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=AdminUserId.length) {
        AdminUserIdFlag = "Invalid";
    }else{
        AdminUserIdFlag = "Valid";
        //Removing errors
        document.getElementById('errmsg').classList.remove('SubmitMessageError');
        document.getElementById('errmsg').innerHTML = "";
    }
    
    //VALIDATING ENTERED ADMIN PASSWORD
    if(AdminPassword.length > 0){
        AdminPasswordFlag="Valid";
        //Removing errors
        document.getElementById('errmsg').classList.remove('SubmitMessageError');
        document.getElementById('errmsg').innerHTML = "";
    }else{
        AdminPasswordFlag="Invalid";
    }
    
    //VALIDATING USER ID AND PASSWORD FIELDS
    if(AdminUserIdFlag == "Valid" && AdminPasswordFlag == "Valid"){
				
        //SIGN IN & CATCHING ERRORS
        firebase.auth().signInWithEmailAndPassword(AdminUserId, AdminPassword).catch(function(error) {
            // HANDLING ERRORS
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/wrong-password') {
                document.getElementById('errmsg').classList.add('SubmitMessageError');
                document.getElementById('errmsg').innerHTML = "User id or password is wrong";
            }else if (errorCode == 'auth/user-disabled') {
                document.getElementById('errmsg').classList.add('SubmitMessageError');
                document.getElementById('errmsg').innerHTML = "User id is disabled. Contact Support";
            }else if (errorCode == 'auth/user-not-found') {
                document.getElementById('errmsg').classList.add('SubmitMessageError');
                document.getElementById('errmsg').innerHTML = "User id not found";
            }
        });
        
        //Handle Account Status
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
//				alert("");
                //After successful login, user will be redirected to home.html
                window.location = 'dashboard.html';
                user.providerData.forEach(function (profile) {
                    //Check if User Already Exist
                    var ref = firebase.database().ref();
                    var userref=ref.child("users");

                    userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                        var exists = (snapshot.val() !=null);
                        if (exists) {
                            //CHECK ADMIN
                            snapshot.forEach(function(userData){
                                var role=userData.val().role;
                                var createdthrough=userData.val().createdthrough;
                                console.log(role);
                                if(role=="Admin" && createdthrough=="password"){
                                    window.location = 'dashboard.html';
                                }else{
                                    document.getElementById('errmsg').classList.add('SubmitMessageError');
                                    document.getElementById('errmsg').innerHTML = "Unauthorised Login! Contact Thriive Team";
                                    firebase.auth().signOut();
                                }
                            });

                        }else{
                            firebase.auth().signOut();
                        }
                    });
                });
                
                //Removing errors
//                document.getElementById('errmsg').classList.remove('SubmitMessageError');
//                document.getElementById('errmsg').innerHTML = "";
            }
        });
    }else{ //Validating and highlighting error text boxes
        if(AdminPasswordFlag=="Invalid"){
            document.getElementById('errmsg').classList.add('SubmitMessageError');
            document.getElementById('errmsg').innerHTML = "Please enter your password";
        }
        if(AdminUserIdFlag=="Invalid"){
            document.getElementById('errmsg').classList.add('SubmitMessageError');
            document.getElementById('errmsg').innerHTML = "Please enter valid email id";
        }
    }
}


function check_authentication(msg){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {
                //Check if User Already Exist
                var ref = firebase.database().ref();
                var userref=ref.child("users");

                userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                    var exists = (snapshot.val() !=null);
                    if (exists) {
                        //CHECK ADMIN
                        snapshot.forEach(function(userData){
                            var role=userData.val().role;
                            var createdthrough=userData.val().createdthrough;
                            console.log(role);
                            if(role=="Admin" && createdthrough=="password"){
//                                alert("Authorized");
                            }else{
//                                alert("Unauthorized Login! Please Contact Your Administrator");
                                firebase.auth().signOut();
                            }
                        });
                        
                    }else{
                        firebase.auth().signOut();
                    }
                });
            });
        } else {
            window.location.assign("index.html");
        }
    });
}

function logout_user(){
    window.location.assign("index.html");
    firebase.auth().signOut();
}

function unauthorized_login(){
    firebase.auth().signOut();
    window.location.assign("index.html?login=failed");
}