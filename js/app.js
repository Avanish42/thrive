var ThriiveAdminEmailId = "ramki558@gmail.com";
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
//const gbtnLogin1 = document.getElementById('gbtnLogin');
//const fbtnLogin1 = document.getElementById('fbtnLogin');

//Google Signup Process
function fLogin(){
    //Facebook Authentification
    var provider = new firebase.auth.FacebookAuthProvider();
//    provider.addScope('profile_profile');
    provider.addScope('public_profile');
    provider.setCustomParameters({
      'display': 'popup'
    });
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
}

//Google Signup Process
function gLogin(){
    //Google Authentification
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function check_authentication(){
    var user=firebase.auth().currentUser;
        if(user) {
            display_username_if_signed_in();
            // document.getElementById("signin_tag").style.display="none";
            // document.getElementById("signIn").style.display="none";
            // document.getElementById('signedin_tag').style.display="block";
            // document.getElementById("signin_user_name").innerText=user.displayName;
        } else {
//            window.location.assign("index.html");
            //document.getElementById('myModal').style.display="block";
            // document.getElementById('closeButton').style.display="none";
            return false;
        }
}

function display_username_if_signed_in(){
    const signin_user_name_Object = document.getElementById('signin_user_name');
    
    // Create References
    const signin_user_name_dbRefObject = firebase.database().ref().child('signin_user_name');
    
    // Sync Object Changes
    signin_user_name_dbRefObject.on('value', snap => {
        
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                // console.log(user);
                user.providerData.forEach(function (profile) {
                    if(profile.providerId=='google.com'){
                        signin_user_name_Object.innerHTML = profile.displayName;
                    }else if (profile.providerId=='password'){
                        //Finding Name based on Email id
                        var ref = firebase.database().ref();
                        var Nameref=ref.child("users");
                        Nameref.on('value', function (snapshot) {
                            snapshot.forEach(function (child) {
                                if (child.val().email==profile.email) {
                                    signin_user_name_Object.innerHTML = child.val().name;
                                }
                            });
                        });
                    }else if(profile.providerId=='facebook.com'){
                        signin_user_name_Object.innerHTML = profile.displayName;
                    }
                });
                document.getElementById('signin_tag').style.display="none";
                document.getElementById('signedin_tag').style.display="inline";
                document.getElementById('signin_user_name').style.display="inline";
                document.getElementById('line').style.display="none";
                
                // document.getElementById("signin_tag").style.display="none";
                // document.getElementById("signIn").style.display="none";
                // document.getElementById('signedin_tag').style.display="block";
                // document.getElementById("signin_user_name").innerText=user.displayName;
            } else {
                document.getElementById('signin_tag').style.display="inline";
                document.getElementById('signedin_tag').style.display="none";
                document.getElementById('signin_user_name').style.display="none";
            }
        });
    });
}

function logout_user(){
    firebase.auth().signOut();
}

function logout_user_redirect(){
    firebase.auth().signOut();
    alert();
    window.location.assign("index.html");
}

function include_firebase(){
	
}