// FUNTION TO GET THE ID AND CATEGORY FROM URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

//FUNCTION TO FETCH THERAPY DATA FROM DATABASE
function fetchdata(content) {
    const dbRefObject = firebase.database().ref().child('whatshappening');
//    var eventsRef = dbRefObject.child("modalities");
    var categoryref = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    var event = categoryref.child(eventid);
    event.on('value', function (snapshot) {
        if(content=="amount"){
            document.getElementById(content).value=snapshot.child("fee").val();
        }else if(content=="title"){
            document.getElementById(content).innerText=snapshot.child(content).val();
            document.getElementById("paidfor").value=snapshot.child(content).val();
        }else{
            document.getElementById(content).innerText=snapshot.child(content).val();
        }
	});
}


//FUNCTION TO VALIDATE THE USER INPUTS 
function makePayment() {
    var IsError = 'no';
    var elem = '';
    //    Check Amount
    //    elem=document.getElementById("amount").value;
    //    if(elem==""){
    //        document.getElementById("amount_error").innerHTML="Enter Amount";
    //        document.getElementById("amount").setAttribute("class","errorbox");
    //        
    //        IsError = 'yes';
    //    }else{
    //        var number=/^[0-9]+$/;
    //        if(Phoneno.value.match(number)){
    //        document.getElementById("amount_error").innerHTML="";
    //        document.getElementById("amount").setAttribute("class","errorbox");
    //        }else{
    //            IsError = 'yes';
    //            document.getElementById("amount_error").innerHTML="Enter Valid Amount";
    //        }
    //    }
    
    
    //    Check First Name
    elem = document.getElementById("Firstname").value;
    if (elem == "") {
        document.getElementById("Firstname_error").innerHTML = "Enter Name";
        document.getElementById("Firstname").setAttribute("class", "errorbox");
        IsError = 'yes';
    }
    else {
        var text = /^[A-Za-z]+$/;
        if (Firstname.value.match(text)) {
            document.getElementById("Firstname_error").innerHTML = "";
            document.getElementById("Firstname").setAttribute("class", "payu_input");
        }
        else {
            IsError = 'yes';
            document.getElementById("Firstname_error").innerHTML = "Enter Valid First Name";
            document.getElementById("Firstname").setAttribute("class", "errorbox");
        }
    }
    
    
    //    Check Phone Number
    elem = document.getElementById("Phoneno").value;
    if (elem == "") {
        document.getElementById("Phoneno_error").innerHTML = "Enter valid Phone Number";
        document.getElementById("Phoneno").setAttribute("class", "errorbox");
        IsError = 'yes';
    }
    else {
        var number = /^[0-9]+$/;
        if (Phoneno.value.match(number)) {
            document.getElementById("Phoneno_error").innerHTML = "";
            document.getElementById("Phoneno").setAttribute("class", "payu_input");
        }
        else {
            IsError = 'yes';
            document.getElementById("Phoneno_error").innerHTML = "Enter Valid Phone Number";
            document.getElementById("Phoneno").setAttribute("class", "errorbox");
        }
    }
    
    
    //    Check Email Id  
    elem = document.getElementById("Email").value;
    if (elem == "") {
        document.getElementById("Email_error").innerHTML = "Enter valid E-mail Address";
        document.getElementById("Email").setAttribute("class", "errorbox");
        IsError = 'yes';
    }
    else {
        var atpos = elem.indexOf("@");
        var dotpos = elem.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= elem.length) {
            document.getElementById("Email_error").innerHTML = "Not a valid E-mail Address";
            document.getElementById("Email").setAttribute("class", "errorbox");
            IsError = 'yes';
        }
        else {
            document.getElementById("Email_error").innerHTML = "";
            document.getElementById("Email").setAttribute("class", "payu_input");
        }
    }
    
    
    //    Check Address
    elem = document.getElementById("address").value;
    if (elem == "") {
        document.getElementById("address_error").innerHTML = "Enter Address";
        document.getElementById("address").setAttribute("class", "errorbox");
    }
    else {
        document.getElementById("address").setAttribute("class", "payu_input");
        document.getElementById("address_error").innerHTML = "";
    }
    
    
    //    Check City
    elem = document.getElementById("city").value;
    if (elem == "") {
        document.getElementById("city_error").innerHTML = "Enter City";
        document.getElementById("city").setAttribute("class", "errorbox");
    }
    else {
        document.getElementById("city").setAttribute("class", "payu_input");
        document.getElementById("city_error").innerHTML = "";
    }
}

function showTermsAndConditions(){
    document.getElementById("terms").style.display="block"
}

function closeTermsAndConditions(){
    document.getElementById("terms").style.display="none"
}





