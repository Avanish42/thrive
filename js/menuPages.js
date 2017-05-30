function addNewAddress(){
    var newName = document.getElementById("newName").value;
    var newAddress = document.getElementById("newAddress").value;
    var newCity = document.getElementById("newCity").value;
    var newLandmark = document.getElementById("newLandmark").value;
    var newState = document.getElementById("newState").value;
    var newPinCode = document.getElementById("newPinCode").value;
    var newPhone = document.getElementById("newPhone").value;
    var newAddressType = document.getElementById("newAddressType").value;
//    alert (newName+newAddress+newCity+newLandmark+newState+newPinCode+newPhone+newAddressType);

    var error="";
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {

                //Check if User Already Exist
                var ref = firebase.database().ref();
                var userref=ref.child("users");

                userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                    var exists = (snapshot.val() !==null);
                    if (exists) {
                        //DISPLAY OTHER DETAILS
                        snapshot.forEach(function (child) {
                            
                            //FINDING USER PROFILE DATA
                            if (child.val().email==profile.email) {
                                var loggedInUserRef = firebase.database().ref("users/"+child.key+"/addressOptions");
                                
                                //FINDING IF ADDRESS TYPE ALREADY EXISTS
                                loggedInUserRef.orderByKey().once('value', function(snap){
                                    snap.forEach(function(child1){
                                        if(child1.key === newAddressType){
                                            //ALREADY EXIST
                                            error="Yes";    
                                            console.log("Already Exist");
                                            return 0;
                                        }
                                    });
                                    if(error=="Yes"){
                                        document.getElementById("newAddressTypeErr").innerHTML="Address Type already exist";
                                    }else{
                                        document.getElementById("newAddressTypeErr").innerHTML="";
                                        loggedInUserRef.child(newAddressType).set({
                                            name: newName,
                                            address: newAddress,
                                            city: newCity,
                                            landmark: newLandmark,
                                            state: newState,
                                            pin: newPinCode,
                                            phone: newPhone
                                        });
                                        document.getElementById("add_new_address_div").style.display="none";
                                        document.getElementById("add_new_address_success_p").innerHTML="Successfully Added";
                                        
//                                        location.reload();
                                        window.location = 'address_options.html';
                                    }
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}

function displayAddresses(){

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {

                //Check if User Already Exist
                var ref = firebase.database().ref();
                var userref=ref.child("users");

                userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                    var exists = (snapshot.val() !==null);
                    if (exists) {
                        //DISPLAY OTHER DETAILS
                        snapshot.forEach(function (child) {
                            
                            //FINDING USER PROFILE DATA
                            if (child.val().email==profile.email) {
                                var loggedInUserRef = firebase.database().ref("users/"+child.key+"/addressOptions");
                                
                                //FINDING IF ADDRESS TYPE ALREADY EXISTS
                                loggedInUserRef.orderByKey().once('value', function(snap){
                                    snap.forEach(function(child1){
                                        //CREATING ADDRESSES DYNAMICALLY
                                        var addressDiv = document.createElement('div');
                                        addressDiv.className = 'address_div';

                                        var addressDivBoarder = document.createElement('div');
                                        addressDivBoarder.className = 'address_div_boarder';

                                        var saveButtonDiv = document.createElement('div');
                                        saveButtonDiv.className = 'save';

                                        var saveButtonImg = document.createElement('img');
                                        saveButtonImg.setAttribute("src", "images/edit.png");
                                        saveButtonImg.setAttribute("width", "100%");

                                        var deleteButtonDiv = document.createElement('div');
                                        deleteButtonDiv.classList = 'save';

                                        var deleteButtonImg = document.createElement('img');
                                        deleteButtonImg.setAttribute("src", "images/Delete.png");
                                        deleteButtonImg.setAttribute("width", "100%");

                                        var menuBar = document.createElement('div');
                                        menuBar.className = 'menueBar';

                                        var h3AddressTypeTxt = document.createElement('h3');
                                        h3AddressTypeTxt.className = 'menuText';
                                        h3AddressTypeTxt.innerText=child1.key;

                                        addressDiv.appendChild(addressDivBoarder);
                                        addressDiv.appendChild(saveButtonDiv);
                                        addressDiv.appendChild(deleteButtonDiv);

                                        saveButtonDiv.appendChild(saveButtonImg);
                                        deleteButtonDiv.appendChild(deleteButtonImg);
                                        
                                        deleteButtonDiv.setAttribute("onclick", "deleteAddress('"+child1.key+"')");

                                        var li1=document.createElement('li');
                                        var li2=document.createElement('li');
                                        var li3=document.createElement('li');
                                        var li4=document.createElement('li');
                                        var li5=document.createElement('li');
                                        var li6=document.createElement('li');
                                        var li7=document.createElement('li');

                                        var span1=document.createElement('span');
                                        var span2=document.createElement('span');
                                        var span3=document.createElement('span');
                                        var span4=document.createElement('span');
                                        var span5=document.createElement('span');
                                        var span6=document.createElement('span');
                                        var span7=document.createElement('span');

                                        li1.innerText="name : ";
                                        li2.innerText="address : ";
                                        li3.innerText="city : ";
                                        li4.innerText="landmark : ";
                                        li5.innerText="state : ";
                                        li6.innerText="pin code : ";
                                        li7.innerText="phone : ";

                                        li1.appendChild(span1);
                                        li2.appendChild(span2);
                                        li3.appendChild(span3);
                                        li4.appendChild(span4);
                                        li5.appendChild(span5);
                                        li6.appendChild(span6);
                                        li7.appendChild(span7);

                                        span1.innerHTML=child1.val().name;
                                        span2.innerHTML=child1.val().address;
                                        span3.innerHTML=child1.val().city;
                                        span4.innerHTML=child1.val().landmark;
                                        span5.innerHTML=child1.val().state;
                                        span6.innerHTML=child1.val().pin;
                                        span7.innerHTML=child1.val().phone;

                                        menuBar.appendChild(h3AddressTypeTxt);
                                        menuBar.appendChild(li1);
                                        menuBar.appendChild(li2);
                                        menuBar.appendChild(li3);
                                        menuBar.appendChild(li4);
                                        menuBar.appendChild(li5);
                                        menuBar.appendChild(li6);
                                        menuBar.appendChild(li7);

                                        addressDivBoarder.appendChild(menuBar);
                                        addressDivBoarder.appendChild(li1);
                                        addressDivBoarder.appendChild(li2);
                                        addressDivBoarder.appendChild(li3);
                                        addressDivBoarder.appendChild(li4);
                                        addressDivBoarder.appendChild(li5);
                                        addressDivBoarder.appendChild(li6);
                                        addressDivBoarder.appendChild(li7);

                                        document.getElementById("name").appendChild(addressDiv);
//                                        console.log(child1.val());
                                    });
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}

function deleteAddress(key){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {

                //Check if User Already Exist
                var ref = firebase.database().ref();
                var userref=ref.child("users");

                userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                    var exists = (snapshot.val() !==null);
                    if (exists) {
                        //DISPLAY OTHER DETAILS
                        snapshot.forEach(function (child) {
                            
                            //FINDING USER PROFILE DATA
                            if (child.val().email==profile.email) {
                                var loggedInUserRef = firebase.database().ref("users/"+child.key+"/addressOptions");
                                
                                //FINDING IF ADDRESS TYPE ALREADY EXISTS
                                loggedInUserRef.orderByKey().once('value', function(snap){
                                    snap.forEach(function(child1){
                                        if(child1.key === key){
                                            //ALREADY EXIST
                                            console.log(child1.val());
                                            child1.ref.remove();
//                                            location.reload();
                                            window.location = 'address_options.html';
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}

function saveEditedDetails(){
    var error="";
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {

                //Check if User Already Exist
                var ref = firebase.database().ref();
                var userref=ref.child("users");

                userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                    var exists = (snapshot.val() !==null);
                    if (exists) {
                        //DISPLAY OTHER DETAILS
                        snapshot.forEach(function (child) {
                            
                            //FINDING USER PROFILE DATA
                            if (child.val().email==profile.email) {
                                var loggedInUserRef = firebase.database().ref("users/"+child.key);
                                console.log(loggedInUserRef.key);
                                //FINDING IF ADDRESS TYPE ALREADY EXISTS
                                loggedInUserRef.orderByKey().once('value', function(snap){
                                    console.log(snap.val());
                                    loggedInUserRef.update({
                                        secondaryemail: document.getElementById('secemail').value,
                                        phone: document.getElementById('mobile').value,
                                        dob: document.getElementById('dob').value,
                                        gender: document.getElementById('gender').value,
                                        place: document.getElementById('place').value,
                                    });
                                    document.getElementById('userAndWSP').style.display="none";
                                    document.getElementById('billing').style.display="none";
                                    document.getElementById('success').style.display="block";
//                                    window.location = 'editDetails.html';
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}

function resetThriivePassword(){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.providerData.forEach(function (profile) {
                if(profile.providerId==="password"){
                    var email = profile.email;

                    // Verify the password reset code is valid.
                    firebase.auth().sendPasswordResetEmail(email).then(function() {
                        document.getElementById("resetPasswordMsg").innerHTML="Password Reset Email is Sent. Please Check your Mail";
                        document.getElementById("resetPasswordMsg").style.color="GREEN";
                    }).catch(function(error) {
                        document.getElementById("resetPasswordMsg").innerHTML="Unknown Error Occured. Please contact support";
                        document.getElementById("resetPasswordMsg").style.color="RED";
                        // Invalid or expired action code. Ask user to try to reset the password
                        // again.
                    });
                }else{
                    document.getElementById("resetPasswordMsg").innerHTML="You have signed in through "+profile.providerId+". Please login to your service provider website to reset password.";
                    document.getElementById("resetPasswordMsg").style.color="RED";
                }
            });
        }
    });
}