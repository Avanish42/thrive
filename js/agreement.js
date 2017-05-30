//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

window.onload=loadfields;


function loadfields(){
	var wspid=getUrlVars()['id'];
	var ref=firebase.database().ref();
	var noderef=ref.child('wsppreregistrstions');
    var wspref = noderef.child(wspid);
    wspref.on('value', function (snapshot){
		var fname=snapshot.child("firstname").val();
		var lname=snapshot.child("lastname").val();
		document.getElementById("wspName").innerText=fname+" "+lname;
		document.getElementById("wspAddress").innerText=snapshot.child("address").val();
		document.getElementById("PanNo").innerText=snapshot.child("pan").val();
		var d = new Date();
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var day=days[d.getDay()];
		var dayNumber=d.getDate();
		if((dayNumber==1)||(dayNumber==21)||(dayNumber==31)){
			dayNumber=dayNumber+"st";
		}else if((dayNumber==2)||(dayNumber==22)){
			dayNumber=dayNumber+"nd";
		}else if((dayNumber==3)||(dayNumber==23)){
			dayNumber=dayNumber+"rd";
		}else{
			dayNumber=dayNumber+"th";
		}
		document.getElementById("signedInDate").innerHTML = dayNumber +" "+ day;
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		document.getElementById("signedInMonth").innerHTML = months[d.getMonth()];
		document.getElementById("signedInYears").innerHTML = d.getFullYear();
		
	});
	
}