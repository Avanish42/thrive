
//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

//FUNCTION TO FETCH THERAPY DATA FROM DATABASE
function fetchdata(content) {
//	alert(content);
    const dbRefObject = firebase.database().ref().child('wsppreregistrstions');
    var eventid= getUrlVars()['id'];
    var wsp = dbRefObject.child(eventid);
    wsp.on('value', function (snapshot) {
        var text=document.getElementById(content);
        if(content=="img"){
            text.setAttribute('src',snapshot.child(content).val())    
        }else if(content=="firstname"){
            document.getElementById(content).innerText=snapshot.child("firstname").val();
        }else{
			if(snapshot.child(content).val()==""){
				document.getElementById(content).value="-";
			}else{
				console.log(content);
            	document.getElementById(content).value=snapshot.child(content).val();
			}
        }    
	});
}

window.onload=loadpage;

function loadpage(){
	const dbRefObject = firebase.database().ref().child('wsppreregistrstions');
    var eventid= getUrlVars()['id'];
    var wsp = dbRefObject.child(eventid);
    wsp.on('value', function (snapshot) {
		var status=snapshot.child("status").val();
		
		if((status=="Not Started")||(status=="InvitationSent")||(status=="Interview")||(status=="interview Approved")||(status=="form-2 sent")||(status=="Form-2 Received")){
			document.getElementById("wspDetails").style.display="block";
			document.getElementById("wspForm_2_Details").style.display="none";
			document.getElementById("paymentDetails").style.display="none";
		}else if((status=="Reviews")||(status=="Reviews Approved")||(status=="Ref-1 Received")||(status=="Ref-2 Received")||(status=="Ref-3 Received")||(status=="documents")||(status=="payment")||(status=="Payment Link Sent")||(status=="Payment Success")){
			document.getElementById("wspDetails").style.display="block";
			document.getElementById("wspForm_2_Details").style.display="block";
			document.getElementById("paymentDetails").style.display="none";
		}else if((status=="Payment Success")||(status=="signContract")||(status=="contract Signed")||(status=="approval")){
			document.getElementById("wspDetails").style.display="block";
			document.getElementById("wspForm_2_Details").style.display="block";
			document.getElementById("paymentDetails").style.display="block";
		}
	});
}