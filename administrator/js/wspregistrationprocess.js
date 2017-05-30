window.onload=displaycurrentstatus;

function displaycurrentstatus(){
    var date=new Date();
    var today = ("0" + date.getDate()).slice(-2);
    var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
    var currentYear = date.getFullYear();
    document.getElementById('interviewDate').value=currentYear+"-"+currentMonth+"-"+today;
    document.getElementById('startProcess').style.display="none";
//    document.getElementById('form-1').style.display="none";
    document.getElementById('interview').style.display="none";
    document.getElementById('reviews').style.display="none";
    document.getElementById('form-2').style.display="none";
    document.getElementById('documents').style.display="none";
    document.getElementById('payment').style.display="none";
    document.getElementById('signContract').style.display="none";
    document.getElementById('approval').style.display="none";
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var noderef=ref.child('wsppreregistrstions');
    var wspref = noderef.child(wspid);
    wspref.on('value', function (snapshot) {
        var wspvalue=snapshot.val();
        var status= wspvalue.status;
        var name= wspvalue.firstname;
        var email=wspvalue.email;
        var phone=wspvalue.phone;
        var city=wspvalue.city;
        var address=wspvalue.address;
        var package=wspvalue.packageSelected;
        var memid=wspvalue.memid;
		document.getElementById('wsphiddenname').value=name;
		document.getElementById('wsphiddenemail').value=email;
		document.getElementById('wsphiddenplace').value=city;
		document.getElementById('wsphiddenphone').value=phone;
		document.getElementById('wsphiddenaddress').value=address;
		document.getElementById('wsphiddenpackage').value=package;
		document.getElementById('wsphiddenmemid').value=memid;
        document.getElementById('startProcess').style.display="none";
//        document.getElementById('form-1').style.display="none";
        document.getElementById('interview').style.display="none";
        document.getElementById('form-2').style.display="none";
        document.getElementById('reviews').style.display="none";
        document.getElementById('documents').style.display="none";
        document.getElementById('payment').style.display="none";
        document.getElementById('signContract').style.display="none";
        document.getElementById('approval').style.display="none";
        if(status=="Not Started"){
            document.getElementById('startProcess').style.display="block";
            document.getElementById("wspname").innerText=name;
            document.getElementById("wspemail").innerText=email;
            document.getElementById("wspphone").innerText=phone;
            document.getElementById("wspcity").innerText=city;
            document.getElementById("start_bread").setAttribute('class',"active");
        }else if((status=="InvitationSent")||(status=="Interview")){
           document.getElementById('interview').style.display="block";
           document.getElementById("start_bread").setAttribute('class',"active");
//            document.getElementById("form-1_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
        }else if((status=="interview Approved")||(status=="form-2 sent")||(status=="Form-2 Received")){
            document.getElementById('form-2').style.display="block";
            if(status=="interview Approved"){
                document.getElementById("wspname_form2").innerText=name;
                document.getElementById("wspemail_form2").innerText=email;
                document.getElementById("wspphone_form2").innerText=phone;
                document.getElementById("wspcity_form2").innerText=city;
                document.getElementById("form2SentOn").style.display="none";
                document.getElementById("form2ReceivedOn").style.display="none";
                document.getElementById("form2next").style.display="none";
            }else if(status=="form-2 sent"){
                var timestamp= wspvalue.form2SentOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var receivedon= today+"-"+currentMonth +"-"+currentYear;
                document.getElementById("wspname_form2").innerText=name;
                document.getElementById("wspemail_form2").innerText=email;
                document.getElementById("wspphone_form2").innerText=phone;
                document.getElementById("wspcity_form2").innerText=city;  
                document.getElementById("wspform_2SentDate").innerText=receivedon;
                document.getElementById("form2SentOn").style.display="block";
                document.getElementById("form2ReceivedOn").style.display="none";
                document.getElementById("form-2_button").style.display="none";
                document.getElementById("form2next").style.display="none";
            }else{
                var timestamp= wspvalue.form2SentOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var senton= today+"-"+currentMonth +"-"+currentYear;
                var timestamp2= wspvalue.form2ReceivedOn;
                var date= (new Date(timestamp2));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var receivedon= today+"-"+currentMonth +"-"+currentYear;
                document.getElementById("wspname_form2").innerText=name;
                document.getElementById("wspemail_form2").innerText=email;
                document.getElementById("wspphone_form2").innerText=phone;
                document.getElementById("wspcity_form2").innerText=city;  
                document.getElementById("wspform_2SentDate").innerText=senton;  
                document.getElementById("wspform_2receivedDate").innerText=receivedon;  
                document.getElementById("form2ReceivedOn").style.display="inline-block";
                document.getElementById("form-2_button").style.display="none";
                document.getElementById("form2next").style.display="inline-block";
            }
            document.getElementById("start_bread").setAttribute('class',"active");
//            document.getElementById("form-1_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
        }else if((status=="Reviews")||(status=="Reviews Approved")||(status=="Ref-1 Received")||(status=="Ref-2 Received")||(status=="Ref-3 Received")){
            document.getElementById('reviews').style.display="block";
            if(status=="Reviews"){
                document.getElementById('reviewApprovedOn').style.display="none";
                document.getElementById('reviewNext').style.display="none";
            }else if(status=="Reviews Approved"){
                var timestamp= wspvalue.reviewsApprovedOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var approvedOn= today+"-"+currentMonth +"-"+currentYear;
                document.getElementById('reviewApprovedOn').style.display="block";
                document.getElementById('reviewApprovedDate').innerText=approvedOn;
                document.getElementById('reviewNext').style.display="block";
                document.getElementById('rejectbutton').style.display="none";
                document.getElementById('approvebutton').style.display="none";
            }else if(status=="Ref-1 Received"){
                document.getElementById('review1name').innerText=wspvalue.ref1Name;
                document.getElementById('review1email').innerText=wspvalue.ref1Email;
                document.getElementById('review1comment').value=wspvalue.ref1Comments;
                document.getElementById('reviewApprovedOn').style.display="none";
                document.getElementById('reviewNext').style.display="none";
                document.getElementById('rejectbutton').style.display="block";
                document.getElementById('approvebutton').style.display="block";
            }else if(status=="Ref-2 Received"){
                document.getElementById('review1name').innerText=wspvalue.ref1Name;
                document.getElementById('review1email').innerText=wspvalue.ref1Email;
                document.getElementById('review1comment').value=wspvalue.ref1Comments;
                document.getElementById('review2name').innerText=wspvalue.ref2Name;
                document.getElementById('review2email').innerText=wspvalue.ref2Email;
                document.getElementById('review2comment').value=wspvalue.ref2Comments;
                document.getElementById('reviewApprovedOn').style.display="none";
                document.getElementById('reviewNext').style.display="none";
                document.getElementById('rejectbutton').style.display="block";
                document.getElementById('approvebutton').style.display="block";
            }else if(status=="Ref-3 Received"){
                document.getElementById('review1name').innerText=wspvalue.ref1Name;
                document.getElementById('review1email').innerText=wspvalue.ref1Email;
                document.getElementById('review1comment').value=wspvalue.ref1Comments;
                document.getElementById('review2name').innerText=wspvalue.ref2Name;
                document.getElementById('review2email').innerText=wspvalue.ref2Email;
                document.getElementById('review2comment').value=wspvalue.ref2Comments;
                document.getElementById('review3name').innerText=wspvalue.ref3Name;
                document.getElementById('review3email').innerText=wspvalue.ref3Email;
                document.getElementById('review3comment').value=wspvalue.ref3Comments;
                document.getElementById('reviewApprovedOn').style.display="none";
                document.getElementById('reviewNext').style.display="none";
                document.getElementById('rejectbutton').style.display="block";
                document.getElementById('approvebutton').style.display="block";
            }
            document.getElementById("start_bread").setAttribute('class',"active");
//            document.getElementById("form-1_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
            document.getElementById("review_bread").setAttribute('class',"active");
        }else if(status=="documents"){
            document.getElementById('documents').style.display="block";
            document.getElementById('address_proof').setAttribute('href',wspvalue.address_proof_url);
            document.getElementById('identity_proof').setAttribute('href',wspvalue.identity_proof_url);
            
            
            
            if((wspvalue.certificates_url=="")&&(wspvalue.degrees_proof_url=="")){
                document.getElementById('certificatediv').innerText="Not Uploaded";
                document.getElementById('degreediv').innerText="Not Uploaded";
            }else if((wspvalue.certificates_url=="")&&(wspvalue.degrees_proof_url!="")){
                document.getElementById('certificatediv').innerText="Not Uploaded";
                document.getElementById('degreediv').innerText="Uploaded";
                document.getElementById('degrees_proof').setAttribute('href',wspvalues.degrees_proof_url);
            }else if((wspvalue.certificates_url!="")&&(wspvalue.degrees_proof_url=="")){
                document.getElementById('certificatediv').innerText="Uploaded";
                document.getElementById('degreediv').innerText="Not Uploaded";
				 document.getElementById('certificate_url').setAttribute('href',wspvalue.certificates_url); 
            }else if((wspvalue.certificates_url!="")&&(wspvalue.degrees_proof_url!="")){
				alert(wspvalue.degrees_proof_url);
                document.getElementById('certificatediv').innerText="Uploaded";
                document.getElementById('degreediv').innerText="Uploaded";
                document.getElementById('degrees_proof').setAttribute('href',wspvalues.degrees_proof_url);
                document.getElementById('certificate_url').setAttribute('href',wspvalue.certificates_url);                
            }
            document.getElementById("start_bread").setAttribute('class',"active");
//            document.getElementById("form-1_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
            document.getElementById("review_bread").setAttribute('class',"active");
            document.getElementById("document_bread").setAttribute('class',"active");
        }
        else if((status=="payment")||(status=="Payment Link Sent")||(status=="Payment Success")){
            document.getElementById('payment').style.display="block";
			if(wspvalue.packageSelected=="Earth"){
				document.getElementById("wspamountpayment").innerText="INR 4799/-";
				document.getElementById("paymentOptions").value="4799";
			}else if(wspvalue.packageSelected=="Water"){
				document.getElementById("wspamountpayment").innerText="INR 7199/-";
				document.getElementById("paymentOptions").value="7199";
			}else{
				document.getElementById("wspamountpayment").innerText="INR 11999/-";
				document.getElementById("paymentOptions").value="11999";
			}
            if(status=="payment"){
                document.getElementById("wspnamepayment").innerText=name;
                document.getElementById("wspphonepayment").innerText=phone;
                document.getElementById("wspcitypayment").innerText=city;
                document.getElementById("wspmailpayment").innerText=email; 
                document.getElementById("paymentLinkDiv").style.display="none"; 
                document.getElementById("PaymentReceivedDiv").style.display="none"; 
                document.getElementById("paymentNextButton").style.display="none"; 
            }else if(status=="Payment Link Sent"){
				var timestamp= wspvalue.payLinkSentOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var payLinkSentOn= today+"-"+currentMonth +"-"+currentYear;
                document.getElementById("wspnamepayment").innerText=name;
                document.getElementById("wspphonepayment").innerText=phone;
                document.getElementById("wspcitypayment").innerText=city;
                document.getElementById("wspmailpayment").innerText=email; 
                document.getElementById("paymentLinkDiv").style.display="inline-block";
                document.getElementById("paymentsentbutton").style.display="none";
                document.getElementById("PaymentLinkSentOn").innerText=payLinkSentOn; 
                document.getElementById("PaymentReceivedDiv").style.display="none"; 
                document.getElementById("paymentNextButton").style.display="none";
				document.getElementById("paymentOptions").disabled=true;
            }else if(status=="Payment Success"){
				var timestamp= wspvalue.payLinkSentOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var payLinkSentOn= today+"-"+currentMonth +"-"+currentYear;
                document.getElementById("wspnamepayment").innerText=name;
                document.getElementById("wspphonepayment").innerText=phone;
                document.getElementById("wspcitypayment").innerText=city;
                document.getElementById("wspmailpayment").innerText=email; 
                document.getElementById("paymentLinkDiv").style.display="inline-block";
                document.getElementById("paymentsentbutton").style.display="none";
                document.getElementById("PaymentLinkSentOn").innerText=payLinkSentOn; 
                document.getElementById("PaymentReceivedDiv").style.display="none"; 
                document.getElementById("paymentNextButton").style.display="block"; 
				document.getElementById("paymentOptions").disabled=true;
			}
            document.getElementById("start_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
            document.getElementById("review_bread").setAttribute('class',"active");
            document.getElementById("document_bread").setAttribute('class',"active"); 
            document.getElementById("payment_bread").setAttribute('class',"active"); 
        }else if((status=="signContract")||(status=="contract Signed")){
            document.getElementById('signContract').style.display="block";
			if(status=="signContract"){
				var payementReceivedOn=wspvalue.paymentReceivedOn;
				var date= (new Date(payementReceivedOn));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var paymentreciveddate= today+"-"+currentMonth +"-"+currentYear;
				document.getElementById('paymentRecivedDate').innerText=paymentreciveddate;
			}else if(status=="contract Signed"){
				var contractSignedOn=wspvalue.contractSignedOn;
				var date= (new Date(contractSignedOn));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var contractSignedOn= today+"-"+currentMonth +"-"+currentYear;
				document.getElementById('contractsignedDate').innerText=contractSignedOn;
				var payementReceivedOn=wspvalue.paymentReceivedOn;
				var date= (new Date(payementReceivedOn));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var paymentreciveddate= today+"-"+currentMonth +"-"+currentYear;
				document.getElementById('paymentRecivedDate').innerText=paymentreciveddate;
				document.getElementById('contractrejectButton').style.display="none";
				document.getElementById('contractSignedButton').style.display="none";
			}
            document.getElementById("start_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
            document.getElementById("review_bread").setAttribute('class',"active");
            document.getElementById("document_bread").setAttribute('class',"active"); 
            document.getElementById("payment_bread").setAttribute('class',"active"); 
            document.getElementById("sign_bread").setAttribute('class',"active"); 
        }else if(status=="approval"){
			generatPassword();
			var contractSignedOn=wspvalue.form2ReceivedOn;
				var date= (new Date(contractSignedOn));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var contractSignedOn= today+"-"+currentMonth +"-"+currentYear;
				document.getElementById('signedOn').innerText=contractSignedOn;
            document.getElementById('approval').style.display="block";
            document.getElementById("start_bread").setAttribute('class',"active");
//            document.getElementById("form-1_bread").setAttribute('class',"active");
            document.getElementById("interview_bread").setAttribute('class',"active");
            document.getElementById("form-2_bread").setAttribute('class',"active");
            document.getElementById("review_bread").setAttribute('class',"active");
            document.getElementById("document_bread").setAttribute('class',"active"); 
            document.getElementById("payment_bread").setAttribute('class',"active"); 
            document.getElementById("sign_bread").setAttribute('class',"active"); 
            document.getElementById("approval_bread").setAttribute('class',"active"); 
        }
    }); 
}
//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


function assignViewMoreDetails(){
	var wspid=getUrlVars()['id'];
	document.getElementById('viewmoreDetails').setAttribute("href","viewMore_WSP_Details.html?id="+wspid);
}
function proceedToNext(status){
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: status
    });
	
}

function sendForm1ToWsp(){
    var wspid=getUrlVars()['id'];
    

window.open(
  'https://www.thriive.in/wsp/form-1/index.html?id='+wspid,
  '_blank' // <- This is what makes it open in a new window.
);
var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "form-1 sent", 
        form1SentOn : firebase.database.ServerValue.TIMESTAMP
    });    
}


function proceedToInterview(status){
	var scheduledDate=document.getElementById("scheduledDate").value; 
	var scheduledTime=document.getElementById("scheduledTime").value; 
	var venue=document.getElementById("venue").value;
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
//	console.log(name+","+email+","+scheduledDate+","+scheduledTime+","+venue);
	var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: status,
        scheduledDate:scheduledDate,
        scheduledTime: scheduledTime,
		interviewVenue:venue,
    });
	var url=window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=InterviewScheduleU&email="+email+"&name="+name+"&interviewdate="+scheduledDate+"&interviewtime="+scheduledTime+"&venue="+venue+"&redirecturl="+url;
}

function sendForm2ToWsp(){
var name=document.getElementById("wsphiddenname").value;
var email=document.getElementById("wsphiddenemail").value;   
var wspid = getUrlVars()['id'];
var ref = firebase.database().ref();
var wspPreRegistrations = ref.child("wsppreregistrstions");
wspPreRegistrations.child(wspid).update({
	status: "form-2 sent", 
	form2SentOn: firebase.database.ServerValue.TIMESTAMP
});
var link = "https://thriivedev-9673e.firebaseapp.com/wsp/wsp_form-2.html?id=" + wspid;
var url = window.location.href;
window.location.href = "http://mailer.thriive.in/mail.php?template=SendWSPForm2U&email="+email+"&name="+name+"&form2link="+link+"&redirecturl="+url;
}

function interviewApprove(status){
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
    var interviewerName=document.getElementById('InterviewerName').value;
    var interviewedOn=document.getElementById('interviewDate').value;
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: status,
        interviewerName:interviewerName,
        interviwedOn: interviewedOn,
        comments: comments
    });
	var url =window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=InterviewAR&email="+email+"&name="+name+"&interviewstatus=approved&redirecturl="+url;
}

function interviewReject(status){
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
    var interviewerName=document.getElementById('InterviewerName').value;
    var interviewedOn=document.getElementById('interviewDate').value;
    var comments=document.getElementById('comments').value;
    var wspid=getUrlVars()['id'];
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: status,
        interviewerName:interviewerName,
        interviwedOn: interviewedOn,
        comments: comments
    });
	var url =window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=InterviewAR&email="+email+"&name="+name+"&interviewstatus=rejected&redirecturl="+url;
}


function approveReviews(){
    var wspid=getUrlVars()['id'];
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "Reviews Approved",
        reviewsApprovedOn : firebase.database.ServerValue.TIMESTAMP
    });
	var redirecturl=window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=ReviewAR&email="+email+"&name="+name+"&reviewstatus=approved&redirecturl="+redirecturl;
	
}

function Reject(){
    var wspid=getUrlVars()['id'];
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "Rejected",
    });
	var redirecturl=window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=ReviewAR&email="+email+"&name="+name+"&reviewstatus=rejected&redirecturl="+redirecturl;
}

function changePaymentAmount(){
    var elem=document.getElementById('paymentOptions').value;
    document.getElementById('wspamountpayment').innerText="INR "+elem+" /-";
    document.getElementById('wsppaymentsign').innerText="INR "+elem+" /-";
}

function sendPaymentLink(){
	var wspid=getUrlVars()['id'];
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
	var city=document.getElementById("wsphiddenplace").value;
	var phone=document.getElementById("wsphiddenphone").value;
	var address=document.getElementById("wsphiddenaddress").value;
	var package=document.getElementById("paymentOptions").value;
	var amount=Number(package);
	if(amount==4799){
		var packagename="Earth";
	}else if(amount==7199){
		var packagename="Water";
	}else{
		var packagename="Fire";
	}
	var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "Payment Link Sent",
		packageSelected:packagename,
		payLinkSentOn: firebase.database.ServerValue.TIMESTAMP
    });
	var redirecturl=window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=SendPayLinkU&name="+name+"&phone="+phone+"&email="+email+"&address="+address+"&city="+city+"&node="+wspid+"&amount="+amount+"&package="+packagename+"&redirecturl="+redirecturl;
}


function generatPassword(){
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
	var phone=document.getElementById("wsphiddenphone").value;
	name=name.substr(0,4);
	name=name.toUpperCase();
	phone=phone.substr(phone.length - 4);
	document.getElementById('signinmailid').value=email;
	document.getElementById('temppassword').value=name+phone;
}

function signthecontract(){
	var wspid=getUrlVars()['id'];
	var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "contract Signed",
		contractSignedOn: firebase.database.ServerValue.TIMESTAMP
    });
}


function sendDetails(){
	var wspid=getUrlVars()['id'];
	var name=document.getElementById("wsphiddenname").value;
	var email=document.getElementById("wsphiddenemail").value;
	var city=document.getElementById("wsphiddenplace").value;
	var phone=document.getElementById("wsphiddenphone").value;
	var address=document.getElementById("wsphiddenaddress").value;
	var package=document.getElementById("wsphiddenpackage").value;
	var memid=document.getElementById("wsphiddenmemid").value;
	var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(wspid).update({
        status: "loginDetailsSent",
		role: ""
    });
	
	var wspref = wspPreRegistrations.child(wspid);
	var practitionerref=ref.child('therapies/practitioner');
    wspref.on('value', function (snapshot) {
        var wspvalue=snapshot.val();
		console.log(wspvalue);
		practitionerref.push(wspvalue);
		var pwdname=name.substr(0,4);
		pwdname=pwdname.toUpperCase();
		var pwdphone=phone.substr(phone.length - 4);
		var password=pwdname+pwdphone;
		createEmailUserAccount(email,password,name,wspvalue.lastname,wspvalue.gender,wspvalue.dob,phone,city);
	});
	
	var redirectUrl=window.location.href;
	window.location.href="http://mailer.thriive.in/mail.php?template=SendDetailsU&name="+name+"&email="+email+"&package="+package+"&memid="+memid+"&redirecturl="+redirectUrl;
} 

////CREATING A NEW USER
//function createNewUserAccount(UID, Password){
//   firebase.auth().createUserWithEmailAndPassword(UID, Password).catch(function(error) {
//   // HANDLING ERRORS
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if (errorCode == 'auth/weak-password') {
//           
//       } else if (errorCode == 'auth/email-already-in-use') {
//           
//       }
//       // console.log(error);
//   }); 
//}

function createEmailUserAccount(EmailAsUser, PasswordAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber,city){
       // Get Email and Password
       const auth = firebase.auth(); //INITIATING FIREBASE AUTHENTICATION
       
       //CREATING A NEW USER
       firebase.auth().createUserWithEmailAndPassword(EmailAsUser, PasswordAsUser).catch(function(error) {
           // HANDLING ERRORS
           var errorCode = error.code;
           var errorMessage = error.message;
           if (errorCode == 'auth/weak-password') {
           } else if (errorCode == 'auth/email-already-in-use') {
           } else {
           }
           console.log(error);
       });
         AddUserDetailsOnFirebase(EmailAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber,city);
   }

	 function AddUserDetailsOnFirebase(EmailAsUser, firstname, lastname, genderSelected, dateOfBirth, phoneNumber,city){
       var ref = firebase.database().ref();
       var contactref=ref.child("users");

       contactref.push({
           name: firstname+" "+lastname,
           email: EmailAsUser,
           gender: genderSelected,
           dob: dateOfBirth,
           phone: phoneNumber,
           createdthrough: 'password',
           profilepic: "-",
           id: EmailAsUser,
		   place:city,
           role: "WSP"
       });
   }