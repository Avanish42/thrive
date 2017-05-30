function validateName(){
    var refName=document.getElementById("refName").value;
    if (refName == ""){
        document.getElementById("refName").classList.add("errorBox");
        return 1;
    }else{
        document.getElementById("refName").classList.remove("errorBox");
        return 0;
    }
}


function validateTextArea(){
    var description=document.getElementById("description").value;
    if (description == ""){
        document.getElementById("description").classList.add("errorBox");
        return 1;
    }else{
        document.getElementById("description").classList.remove("errorBox");
        return 0;
    }
}


function validateEmail(){
    var email=document.getElementById("refEmail").value;
    if (email == ""){
        document.getElementById("refEmail").classList.add("errorBox");
        return 1;
    }else{
        return 0;
    }
//    else{
//        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//        if (!filter.test(email.value)) {
//            document.getElementById("refEmail").classList.add("errorBox");
//            return 1;
//        }else{
//            document.getElementById("refEmail").classList.remove("errorBox");
//            return 0;
//        }
//    }
}

//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
   var vars = {};
   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
       vars[key] = value;
   });
   return vars;
}

function fetchWspData(){
    var wspid=getUrlVars()['id'];
    var wsprefid=getUrlVars()['refid'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    
    wspPreRegistrations.child(wspid).on("value", function(snapshot){
        var wspValues=snapshot.val();
        
        document.getElementById("name").value = wspValues.firstname;
        document.getElementById("wspName").innerText = wspValues.firstname;
        document.getElementById("email").value = wspValues.email;
		document.getElementById("memid").value =wspValues.memid;
        if(wsprefid == "455220571017504"){
            document.getElementById("refName").value = wspValues.ref1Name;
        	document.getElementById("reviewername").innerText = wspValues.ref1Name;
//            document.getElementById("reviewername").value = wspValues.ref1Name;
            document.getElementById("refEmail").value = wspValues.ref1Email;  
        }else if(wsprefid == "759983634605319"){
            document.getElementById("refName").value = wspValues.ref2Name;
            document.getElementById("reviewername").innerText = wspValues.ref2Name;
            document.getElementById("refEmail").value = wspValues.ref2Email;
        }else if(wsprefid == "002969028516055"){
            document.getElementById("refName").value = wspValues.ref3Name;
            document.getElementById("reviewername").innerText = wspValues.ref3Name;
            document.getElementById("refEmail").value = wspValues.ref3Email;
        }
            
    });
}


function submitWspReview(){
    if(validateName()==0 && validateTextArea()==0 && validateEmail()==0){
        var description = document.getElementById("description").value;
        
        var wsprefid=getUrlVars()['refid'];
        
        var wspid=getUrlVars()['id'];
        var ref = firebase.database().ref();
        var wspReview=ref.child("wsppreregistrstions");
        if(wsprefid == "455220571017504"){
            wspReview.child(wspid).update({
                status:"Ref-1 Received",
                ref1Comments:description
            });  
        }else if(wsprefid == "759983634605319"){
            wspReview.child(wspid).update({
                status:"Ref-2 Received",
                ref2Comments:description
            });
        }else if(wsprefid == "002969028516055"){
            wspReview.child(wspid).update({
                status:"Ref-3 Received",
                ref3Comments:description
            });
        }
		var name=document.getElementById("refName").value;
		var email=document.getElementById("refEmail").value;
		var wspname=document.getElementById("name").value;
		var wspemail=document.getElementById("email").value;
		var wspmemid=document.getElementById("memid").value;
		window.location.href="http://mailer.thriive.in/mail.php?template=ReceiveTestimonial&adminname=ThriiveAdmin&adminemail=balaji.donthi@pyraminds.co&rname="+name+"&remail="+email+"&name="+wspname+"&email="+wspemail+"&memid="+wspmemid;
        
//        document.getElementById("success").style.display="block";
//        document.getElementById("MainBodySection").style.display="none";
    }
}