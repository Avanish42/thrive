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
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    
    wspPreRegistrations.child(wspid).on("value", function(snapshot){
        var wspValues=snapshot.val();
        document.getElementById("name").value = wspValues.firstname;
        document.getElementById("email").value = wspValues.email;
    });
}
function getmemid(){
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
	var wspsection=wspPreRegistrations.child(wspid);
    wspsection.on("value", function(snapshot){
        var wspValues=snapshot.val();
        document.getElementById("memid").value = wspValues.memid;
    });
}

//WSP FORM -2 VALIDATIONS





//PLOFILE PIC VALIDATION
function selectProfilePic(){
	
document.getElementById('profilePic').addEventListener('change', readURL, true);
	function readURL(){
		var file = document.getElementById("profilePic").files[0];
		var reader = new FileReader();
		reader.onloadend = function(){
			document.getElementById('selectedImage').setAttribute("src",reader.result);
			document.getElementById('selectedImage').setAttribute("style","width: 35mm;height:45mm;");
		}
		if(file){
			reader.readAsDataURL(file);
		}else{
		}
	}
    var profilePic = document.getElementById("profilePic").value;
    if(profilePic==""){
        document.getElementById("profilePic_error").innerHTML="Please upload your Photo";
        document.getElementById("profilePic").style.border = "1px solid red";
		document.getElementById("profilePic").focus();
        return false;
    }else{
        document.getElementById("profilePic_error").innerHTML="";
        document.getElementById("profilePic").style.border = "none";
        return true;
    }
	
}

//PLOFILE PIC VALIDATION
function selectSignature(){
	document.getElementById('signature').addEventListener('change', readURL, true);
	function readURL(){
		var file = document.getElementById("signature").files[0];
		var reader = new FileReader();
		reader.onloadend = function(){
			document.getElementById('signatureImg').setAttribute("src",reader.result);
			document.getElementById('signatureImg').setAttribute("style","width: 35mm;height:45mm;");
		}
		if(file){
			reader.readAsDataURL(file);
		}else{
		}
	}
    var profilePic = document.getElementById("signature").value;
    if(profilePic==""){
        document.getElementById("signature_error").innerHTML="Please upload your Signature";
        document.getElementById("signature").style.border = "1px solid red";
		document.getElementById("signature").focus();
        return false;
    }else{
        document.getElementById("signature_error").innerHTML="";
        document.getElementById("signature").style.border = "none";
        return true;
    }
}

//PACKAGE VALIDATION
function selectPackage(){
    var package = document.getElementById("packageSelected").value;
    if(package==0){
        document.getElementById("packageSelected_error").innerHTML="Please Select Package";
        document.getElementById("packageSelected").style.border = "1px solid red";
		document.getElementById("packageSelected").focus();
        return false;
    }else{
        document.getElementById("packageSelected_error").innerHTML="";
        document.getElementById("packageSelected").style.border = "none";
        return true;
    }
}


//PANCARD VALIDATION
function panValidation() {
    var Obj = document.getElementById("panNumber").value;
    var panPat = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;
    if (Obj == ""){
        document.getElementById("panNumber_error").innerHTML = "Enter PAN Number";
        document.getElementById("panNumber").style.border = "1px solid red";
        document.getElementById("panNumber").focus();
        return false;
    }
    else{
        if(!(Obj.match(panPat))) {
            document.getElementById("panNumber_error").innerHTML = "Invalid PAN Number";
            document.getElementById("panNumber").style.border = "1px solid red";
            document.getElementById("panNumber").focus();
            return false;
        }else{
            document.getElementById("panNumber_error").innerHTML = "";
            document.getElementById("panNumber").style.border = "none";
            return true;
        }
    }
}

//BRIEF DESCRIPTION VALIDATION
function briefDescription(){
    var briefDescription = document.getElementById("description").value;
    if(briefDescription==""){
        document.getElementById("description_error").innerHTML="Enter description";
        document.getElementById("description").style.border = "1px solid red";
		document.getElementById("description").focus();
        return false;
    }else{
        document.getElementById("description_error").innerHTML="";
        document.getElementById("description").style.border = "none";
        return true;
    }
}

//SPIRITUAL EXP VALIDATION
function spiritualCounseling(){
    var experince = document.getElementById("experienceInCounseling").value;
    if(experince==0){
        document.getElementById("experience_error").innerHTML="Please Select a value";
        document.getElementById("experienceInCounseling").style.border = "1px solid red";
		document.getElementById("experienceInCounseling").focus();
        return false;
    }else{
        document.getElementById("experience_error").innerHTML="";
        document.getElementById("experienceInCounseling").style.border = "none";
        return true;
    }
}


//WORKSHOPS CONDUCTED VALIDATION
function workshopsConducted(){
    var workshops = document.getElementById("workshops_conducted").value;
    if(workshops==""){
        document.getElementById("workshops_conducted_error").innerHTML="Enter Details";
        document.getElementById("workshops_conducted").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("workshops_conducted_error").innerHTML="";
        document.getElementById("workshops_conducted").style.border = "none";
        return true;
    }
}

//WORKED WITH SPIRITUAL ORGINATION VALIDATION
function spiritualOrgination(){
    var spiritual = document.getElementById("spiritual_organization").value;
    if(spiritual==""){
        document.getElementById("spiritual_organization_error").innerHTML="Enter Details";
        document.getElementById("spiritual_organization").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("spiritual_organization_error").innerHTML="";
        document.getElementById("spiritual_organization").style.border = "none";
        return true;
    }
}

//specific challenges VALIDATION
function specificChallenges(){
    var challenges = document.getElementById("challenges").value;
    if(challenges==""){
        document.getElementById("challenges_error").innerHTML="Enter Details";
        document.getElementById("challenges").style.border = "1px solid red";
		document.getElementById("challenges").focus();
        return false;
    }else{
        document.getElementById("challenges_error").innerHTML="";
        document.getElementById("challenges").style.border = "none";
        return true;
    }
}

//1st referal name VALIDATION
function referalName1(){
    var letters = /^[A-Za-z ]+$/;
    var name1 = document.getElementById("ref1Name").value;
    if(name1 == ""){
        document.getElementById("ref1Name_error").innerHTML="Enter 1st Ref Name";
        document.getElementById("ref1Name").style.border = "1px solid red";
		document.getElementById("ref1Name").focus();
        return false;
    }
    if(!(name1.match(letters))){
        document.getElementById("ref1Name_error").innerHTML="Enter Valid Name";
        document.getElementById("ref1Name").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("ref1Name_error").innerHTML="";
         document.getElementById("ref1Name").style.border = "none";
        return true;
    }
}


//1st EMAIL VALIDATION
function validateEmail1(){
    var email1=document.getElementById("ref1Email").value;
    var email2=document.getElementById("ref2Email").value;
    var email3=document.getElementById("ref3Email").value;
    if (email1==""){
        document.getElementById("ref1Email_error").innerHTML="Enter Email ID";
        document.getElementById("ref1Email").style.border = "1px solid red";
        return false;
    }else{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email1)) {
        document.getElementById("ref1Email_error").innerHTML="Enter Valid Email ID";
        document.getElementById("ref1Email").style.border = "1px solid red";
			document.getElementById("ref1Email").focus();
        return false;
        }if(email1 == email2 || email1 == email3){
        document.getElementById("ref1Email_error").innerHTML="You have Already used this Email ID for referral";
        document.getElementById("ref1Email").style.border = "1px solid red";
        return false;
        }else{
             document.getElementById("ref1Email_error").innerHTML="";
        document.getElementById("ref1Email").style.border = "none";
            return true;
        }
    }
}


//2nd referal name VALIDATION
function referalName2(){
    var letters = /^[A-Za-z ]+$/;
    var name1 = document.getElementById("ref2Name").value;
    if(name1 == ""){
        document.getElementById("ref2Name_error").innerHTML="Enter 2nd Ref Name";
        document.getElementById("ref2Name").style.border = "1px solid red";
		document.getElementById("ref2Name").focus();
        return false;
    }
    if(!(name1.match(letters))){
        document.getElementById("ref2Name_error").innerHTML="Enter Valid Name";
        document.getElementById("ref2Name").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("ref2Name_error").innerHTML="";
         document.getElementById("ref2Name").style.border = "none";
        return true;
    }
}


//2nd EMAIL VALIDATION
function validateEmail2(){
    var email1=document.getElementById("ref1Email").value;
    var email2=document.getElementById("ref2Email").value;
    var email3=document.getElementById("ref3Email").value;
    
    if (email2==""){
        document.getElementById("ref2Email_error").innerHTML="Enter Email ID";
        document.getElementById("ref2Email").style.border = "1px solid red";
		document.getElementById("ref2Email").focus();
        return false;
    }if(email2 == email1 || email2 == email3){
			document.getElementById("ref2Email_error").innerHTML="You have Already used this Email ID for referral";
			document.getElementById("ref2Email").style.border = "1px solid red";
			document.getElementById("ref2Email").focus();
			return false;
        }
    else{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email2)) {
			document.getElementById("ref2Email_error").innerHTML="Enter Valid Email ID";
			document.getElementById("ref2Email").style.border = "1px solid red";
			document.getElementById("ref2Email").focus();
			return false;
        }else{
             document.getElementById("ref2Email_error").innerHTML="";
        document.getElementById("ref2Email").style.border = "none";
            return true;
        }
    }
}

//3rd referal name VALIDATION
function referalName3(){
    var letters = /^[A-Za-z ]+$/;
    var name1 = document.getElementById("ref3Name").value;
    if(name1 != ""){
        if(!(name1.match(letters))){
			document.getElementById("ref3Name_error").innerHTML="Enter Valid Name";
			document.getElementById("ref3Name").style.border = "1px solid red";
			document.getElementById("ref3Name").focus();
			return false;
		}else{
			 document.getElementById("ref3Name_error").innerHTML="";
			 document.getElementById("ref3Name").style.border = "none";
			return true;
		}
    }else{
		document.getElementById("ref3Name_error").innerHTML="Enter Name";
		document.getElementById("ref3Name").style.border = "1px solid red";
		document.getElementById("ref3Name").focus();
		return false;
	}
    
}


//3rd EMAIL VALIDATION
function validateEmail3(){
    var email1=document.getElementById("ref1Email").value;
    var email2=document.getElementById("ref2Email").value;
    var email3=document.getElementById("ref3Email").value;
    
    if (email3==""){
        document.getElementById("ref3Email_error").innerHTML="Enter Email ID";
        document.getElementById("ref3Email").style.border = "1px solid red";
		document.getElementById("ref3Email").focus();
        return false;
        } if(email3 == email1 || email3 == email2){
        document.getElementById("ref3Email_error").innerHTML="You have Already used this Email ID for referral";
        document.getElementById("ref3Email").style.border = "1px solid red";
		document.getElementById("ref3Email").focus();
        return false;
        } 
    else{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email3)) {
			document.getElementById("ref3Email_error").innerHTML="Enter Valid Email ID";
			document.getElementById("ref3Email").style.border = "1px solid red";
			document.getElementById("ref3Email").focus();
			return false;
        }else{
            document.getElementById("ref3Email_error").innerHTML="";
            document.getElementById("ref3Email").style.border = "none";
            return true;
        }
    }
}


//CIVIL CASER VALIDATION
function civilcase(){
    var experince = document.getElementById("litigation").value;
    if(experince==0){
        document.getElementById("litigation_error").innerHTML="Please select a value";
        document.getElementById("litigation").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("litigation_error").innerHTML="";
        document.getElementById("litigation").style.border = "none";
        return true;
    }
}

//ADDRES PROOF VALIDATION
function addressProof(){
    var uploadfile = document.getElementById('address_proof').value;
    if(uploadfile == ""){
    	document.getElementById("address_proof_error").innerHTML="Upload your Address Proof";
    	document.getElementById("address_proof").style.border = "1px solid red";
		return false;
    }else{
        document.getElementById("address_proof_error").innerHTML="";
        document.getElementById("address_proof").style.border = "none";
		return true;
    }
}
//IDENTITY PROOF VALIDATION
function identityProof(){
    var uploadfile = document.getElementById('identity_proof').value;
    if(uploadfile == ""){
    	document.getElementById("identity_proof_error").innerHTML="Upload your Identity Proof";
    	document.getElementById("identity_proof").style.border = "1px solid red";
		return false;
    }else{
        document.getElementById("identity_proof_error").innerHTML="";
        document.getElementById("identity_proof").style.border = "none";
		return true;
    }
}

function validateFields(){
    var valid=false;
    if(!selectProfilePic()){
        document.getElementById("profilePic").focus();
        return valid;
    }if(!selectSignature()){
        document.getElementById("signature").focus();
        return valid;
    }
    if(!selectPackage()){
        document.getElementById("packageSelected").focus();
        return valid;
    }if(!panValidation()){
        document.getElementById("panNumber").focus();
        return valid;
    }
	if(!briefDescription()){
        document.getElementById("description").focus();
        return valid;
    }if(!spiritualCounseling()){
        document.getElementById("experienceInCounseling").focus();
        return valid;
    }if(!specificChallenges()){
        document.getElementById("challenges").focus();
        return valid;
    }if(!referalName1()){
        document.getElementById("ref1Name").focus();
        return valid;
    }if(!validateEmail1()){
        document.getElementById("ref1Email").focus();
        return valid;
    }
    if(!referalName2()){
        document.getElementById("ref2Name").focus();
        return valid;
    }
    if(!validateEmail2()){
        document.getElementById("ref2Email").focus();
        return valid;
    }
    if(!referalName3()){
        document.getElementById("ref3Name").focus();
        return valid;
    }if(!validateEmail3()){
        document.getElementById("ref3Email").focus();
        return valid;
    }
    if(!civilcase()){
        document.getElementById("litigation").focus();
        return valid;
    }
    if(!addressProof()){
        document.getElementById("address_proof").focus();
        return valid;
    }
    if(!identityProof()){
        document.getElementById("identity_proof").focus();
        return valid;
    }
    storevalues();
}
	
function storevalues(){
	document.getElementById("ConnectSubmitButton").style.display="none";
	document.getElementById("processingbutton").style.display="block";
    var description = document.getElementById("description").value;
    var packageSelected = document.getElementById("packageSelected").value;
    var pan = document.getElementById("panNumber").value;
    var experienceInCounseling = document.getElementById("experienceInCounseling").value;
    var workshops_conducted = document.getElementById("workshops_conducted").value;
    var spiritual_organization = document.getElementById("spiritual_organization").value;
    var challenges = document.getElementById("challenges").value;
    var ref1Name = document.getElementById("ref1Name").value;
    var ref1Email = document.getElementById("ref1Email").value;
    var ref2Name = document.getElementById("ref2Name").value;
    var ref2Email = document.getElementById("ref2Email").value;
    var ref3Name = document.getElementById("ref3Name").value;
    var ref3Email = document.getElementById("ref3Email").value;
    var litigation = document.getElementById("litigation").value;
    var awaken_spiritual_event = document.getElementById("awaken_spiritual_event").value;
    var holistic_career = document.getElementById("holistic_career").value;
    var personal_philosophy = document.getElementById("personal_philosophy").value;
    var influential_gurus = document.getElementById("influential_gurus").value;
    var best_result = document.getElementById("best_result").value;
    var influenced_books = document.getElementById("influenced_books").value;
	uploadfiles();
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        description : description,
        packageSelected : packageSelected,
        pan:pan,
        experienceInCounseling : experienceInCounseling,
        workshops_conducted : workshops_conducted,
        spiritual_organization : spiritual_organization,
        challenges : challenges,
        ref1Name : ref1Name,
        ref1Email : ref1Email,
        ref2Name : ref2Name,
        ref2Email : ref2Email,
        ref3Name : ref3Name,
        ref3Email : ref3Email,
        litigation : litigation,
        awaken_spiritual_event : awaken_spiritual_event,
        holistic_career : holistic_career,
        personal_philosophy : personal_philosophy,
        influential_gurus : influential_gurus,
        best_result : best_result,
        influenced_books : influenced_books,
        status: "Form-2 Received",
		form2ReceivedOn:firebase.database.ServerValue.TIMESTAMP
    });
	
	
	
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var reviewlink1="https://thriivedev-9673e.firebaseapp.com/wsp/wsp-review/index.html?id="+wspid+"&refid1=455220571017504";
	var reviewlink2="https://thriivedev-9673e.firebaseapp.com/wsp/wsp-review/index.html?id="+wspid+"&refid2=759983634605319";
	var reviewlink3="https://thriivedev-9673e.firebaseapp.com/wsp/wsp-review/index.html?id="+wspid+"&refid3=002969028516055";
//	var ThriiveAdminEmail="info@thriive.in";
	var ThriiveAdminEmail=ThriiveAdminEmailId;

	alert("Thank you for updating your details. Your application is being processed. Please wait for all your documents to get uploaded by clicking on the CLOSE button. It may take more than 30 seconds.");
	setTimeout(function(){ 
   	 window.location.href="http://mailer.thriive.in/mail.php?template=ReceiveWSPForm2A&email="+email+"&name="+name+"&adminname=Thriive Admin&adminemail="+ThriiveAdminEmail+"&node=kjsdfjjsyirusdf&memid=THR002846&rname1="+ref1Name+"&rname2="+ref2Name+"&rname3="+ref3Name+"&remail1="+ref1Email+"&remail2="+ref2Email+"&remail3="+ref3Email+"&reviewformlink1="+reviewlink1+"&reviewformlink2="+reviewlink2+"&reviewformlink3="+reviewlink3;
   }, 9000);
}   

function uploadfiles(){
	uploadProfilePic();
//	uploadAddressProof();
}


function uploadProfilePic(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("profilePic").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "profilePic-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref5=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask5= strorageref5.put(file);
	uploadtask5.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask5.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			profile_url: downloadUrl
		});
	});
	uploadsignature();
}

function uploadsignature(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("signature").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "signature-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref6=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask6= strorageref6.put(file);
	uploadtask6.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask6.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			signature_url: downloadUrl
		});
	});
	uploadAddressProof();
}


function uploadAddressProof(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("address_proof").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "AddressProof-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref1=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask1= strorageref1.put(file);
	uploadtask1.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask1.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			address_proof_url: downloadUrl
		});
	});
	uploadIdentityProof();
}

function uploadIdentityProof(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("identity_proof").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "IdentityProof"+"-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref2=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask2= strorageref2.put(file);
	uploadtask2.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask2.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			identity_proof_url: downloadUrl
		});
	});
	var certificate=document.getElementById("certificates").value;
	var degree=document.getElementById("degrees_proof").value;
	if(certificate!=""){
		uploadCertificates();
	}else if(degree!=""){
		uploadDegreesProof();
	}
}

function uploadCertificates(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("certificates").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "certificate"+"-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref3=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask3= strorageref3.put(file);
	uploadtask3.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask3.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			certificates_url: downloadUrl
		});
	});
	var degree=document.getElementById("degrees_proof").value;
	if(degree!=""){
		uploadDegreesProof();
	}
}

function uploadDegreesProof(){
	var wspid=getUrlVars()['id'];
	var memid=document.getElementById("memid").value;
	var file=document.getElementById("degrees_proof").files[0];
	var filename=file.name;
	var parts = filename.split(".");
	var filename = "degrees"+"-"+memid;
	var ext=parts[1];
	var fullname=filename+"."+ext;
	var strorageref4=firebase.storage().ref('/Documents/'+fullname);
	var uploadtask4= strorageref4.put(file);
	uploadtask4.on('state_changed',function(snapshot){
	},function (error){
	},function(){
		var downloadUrl = uploadtask4.snapshot.downloadURL;
		var ref = firebase.database().ref();
		var wspPreRegistrations=ref.child("wsppreregistrstions");
		wspPreRegistrations.child(wspid).update({
			degrees_proof_url: downloadUrl
		});
	});
}



  

