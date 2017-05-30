

function showtext(text) {
	document.getElementById("text1").style.display = "none";
	document.getElementById(text).style.display = "block";
}

function hidetext(text) {
	document.getElementById(text).style.display = "none";
	document.getElementById("text1").style.display = "block";
}

function hideicons(contentid) {
	document.getElementById("dashboard_icons").style.display = "none";
	document.getElementById("welcome_text").style.display = "none";
	var submit = document.getElementsByClassName('submit');
	submit[submit.length - 1].setAttribute('id', contentid);
	if (contentid == "user") {
		document.getElementById("addtext").innerText = "add user";
		document.getElementById("listtext").innerText = "user list";
	}
	else if (contentid == "adminuser") {
		document.getElementById("addtext").innerText = "add admin";
		document.getElementById("listtext").innerText = "admin list";
	}else if (contentid == "therapy") {
		document.getElementById("addtext").innerText = "add modality/therapist";
		document.getElementById("listtext").innerText = "list";
        document.getElementById("listtext").setAttribute('onclick',"displaytherapies()");
        document.getElementById("addtext").setAttribute('onclick',"addtherapies()");
	}
	else if (contentid == "calendar") {
		document.getElementById("addtext").innerText = "add event";
		document.getElementById("listtext").innerText = "event list";
        document.getElementById("addtext").setAttribute('onclick',"addcalendar()");
        document.getElementById("listtext").setAttribute('onclick',"displayevents()");
	}
	else if (contentid == "thriiveworld") {
		document.getElementById("addtext").innerText = "add";
		document.getElementById("listtext").innerText = "list";
        document.getElementById("addtext").setAttribute('onclick',"addthriiveworld()");
        document.getElementById("listtext").setAttribute('onclick',"displaymedia()");
	}
	else if (contentid == "thriivetalks") {
		document.getElementById("addtext").innerText = "add blog";
		document.getElementById("listtext").innerText = "blog list";
        document.getElementById("addtext").setAttribute('onclick',"addarticlesorblog()");
        document.getElementById("listtext").setAttribute('onclick',"displayarticlesorblog()");
	}
	else if (contentid == "quotes") {
		document.getElementById("addtext").innerText = "add quote";
		document.getElementById("listtext").innerText = "quote list";
        document.getElementById("addtext").setAttribute('onclick',"addquotes()");
        document.getElementById("listtext").setAttribute('onclick',"displayquotes()");
	}
	else {
		document.getElementById("addtext").innerText = "add";
		document.getElementById("listtext").innerText = "list";
	}
	document.getElementById("adduserDiv").style.display = "block";
	document.getElementById("addform").style.display = "block";
	closemenu();
    document.getElementById("displaylist").style.display="none";
    document.getElementById("displaypractitioners").style.display="none";
	document.getElementById('user').style.display = "none";
	document.getElementById('calendar').style.display = "none";
	document.getElementById('thriiveworld').style.display = "none";
	document.getElementById('thriivetalks').style.display = "none";
	document.getElementById('quotes').style.display = "none";
	document.getElementById('adminuser').style.display = "none";
	document.getElementById('practitioner').style.display = "none";
	document.getElementById('modalities').style.display = "none";
	document.getElementById('therapy').style.display = "none";
	document.getElementById(contentid).style.display = "block";
	document.getElementById("button").style.display="block";
}

function closemenu() {
	document.getElementById("menu").style.width = "0%";
}

function menu_list() {
	document.getElementById("menu").style.width = "100%";
}

function displayhome() {
	document.getElementById('successmsg').style.display="none";
	document.getElementById("dashboard_icons").style.display = "block";
	document.getElementById("welcome_text").style.display = "block";
	document.getElementById("adduserDiv").style.display = "none";
	document.getElementById("addform").style.display = "none";
	closemenu();
	window.location="index.html";
}


function submitvalues(id) {
	var ref = firebase.database().ref();
	if(id=='user'){
		var email=document.getElementById('useremail').value;
		var password=document.getElementById('userpassword').value;
		var typeofUser=document.getElementById('usertypeofUser').value;
		
		document.getElementById(id).style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="User added Successfully";
//		setInterval(displayhome,3000);
		
	}else if(id=="calendar"){
		var eventsRef = ref.child("whatshappening/events");
		var title=document.getElementById('calendartitle').value;
		var speaker=document.getElementById('calendarspeaker').value;
		var fromdate=document.getElementById('fromdate').value;
		var todate=document.getElementById('todate').value;
		var time=document.getElementById('calendartime').value;
		var fee=document.getElementById('calendarfee').value;
		var abouttheorg=document.getElementById('calendarabouttheorg').value;
		var aboutthpractitioner=document.getElementById('calendaraboutthpractitioner').value;
		var overview=document.getElementById('calendaroverview').value;
		var venue=document.getElementById('calendarvenue').value;
		var promourl=document.getElementById('calendarpromourl').value;
		var contactname=document.getElementById('calendarcontactname').value;
		var contactno=document.getElementById('calendarcontactno').value;
		var email=document.getElementById('calendaremail').value;
		eventsRef.push({title: title, overview:overview, abouttheorg: abouttheorg, aboutthepractitioner: aboutthpractitioner, fromdate: fromdate, timing: time, venue: venue,todate:todate,promourl:promourl,fee:fee,speaker: speaker,rsvp:{email:email,mobileno:contactno,name:contactname}});
		
		document.getElementById(id).style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="Event created Successfully";
//		setInterval(displayhome,3000);
		
	}else if(id=="therapy"){
        var elem=document.getElementById("therapies").value;
        var mediaref = ref.child("therapies");
        var practitionerref=mediaref.child(elem);
        if(elem=="practitioner"){
            var Name=document.getElementById("practitionername").value;
            var contact=document.getElementById("practitionerphone").value;
            var email=document.getElementById("practitioneremail").value;
            var website=document.getElementById("website").value;
            var location=document.getElementById("location").value;
            var modality1=document.getElementById("modality1").value;
            var modality2=document.getElementById("modality2").value;
            var modality3=document.getElementById("modality3").value;
            var modality4=document.getElementById("modality4").value;
            var referedby=document.getElementById("referredby").value;
            var about=document.getElementById("aboutpractitioner").value;

            practitionerref.push({name: Name, contact:contact, email: email, website: website,location:location,modality1:modality1,modality2:modality2,modality3:modality3,modality4:modality4,referedby:referedby,about: about});
            document.getElementById(id).style.display="none";
            document.getElementById("practitioner").style.display="none";
            document.getElementById("button").style.display="none";
            document.getElementById('successmsg').style.display="block";
            document.getElementById('successtext').innerText="Practitioner added Successfully";
        }else if(elem=="modalities"){
            var category=document.getElementById("categeories").value;
            var Name=document.getElementById("modalityname").value;
            var modalitydesc=document.getElementById("modalitydesc").value;
            var duration=document.getElementById("duration").value;
            var fees=document.getElementById("fees").value;
            var requirements=document.getElementById("requirements").value;
            var categoryref=practitionerref.child(category);
            categoryref.push({name: Name, modalitydesc:modalitydesc, duration: duration, fees:fees, requirements:requirements});
            document.getElementById(id).style.display="none";
            document.getElementById("modalities").style.display="none";
            document.getElementById("button").style.display="none";
            document.getElementById('successmsg').style.display="block";
            document.getElementById('successtext').innerText="Therapist added Successfully";
        }
    }else if(id=="thriiveworld"){
		
		var mediaref = ref.child("thriiveworld/media");
		var thriiveWorldtitle=document.getElementById('thriiveWorldtitle').value;
		var thriiveWorldSpeaker=document.getElementById('thriiveWorldSpeaker').value;
		var url=document.getElementById('thriiveworldurl').value;
		var description=document.getElementById('mediadescription').value;
		var imageurl=document.getElementById('thumbnial').value;
		var typeofFile=document.getElementById('thriiveworldtypeofFile').value;
        databaseref=mediaref.child(typeofFile);
		databaseref.push({title: thriiveWorldtitle, speaker:thriiveWorldSpeaker, url: url, description: description,imageurl:imageurl});
		
		document.getElementById(id).style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="Media added Successfully";
//		setInterval(displayhome,3000);
	}else if(id=="thriivetalks"){
		var thrivetalkref = ref.child("thriivetalks");
        var item=document.getElementById("thriivearticle").value;
		var thriiveWorldtitle=document.getElementById('thriivetalktitle').value;
		var thriiveWorldSpeaker=document.getElementById('thriivetalkSpeaker').value;
        var description=document.getElementById('htmleditor').value;
		var url=document.getElementById('thriiveTalksurl').value;
        if(item=="article"){
            var articlepush=thrivetalkref.child("article");    
            articlepush.push({name: thriiveWorldtitle, author:thriiveWorldSpeaker, description: description});
		    document.getElementById('successtext').innerText="Article added Successfully";
        }else{
            var blogpush=thrivetalkref.child("blog");    
            blogpush.push({name: thriiveWorldtitle, author:thriiveWorldSpeaker, url: url});
		    document.getElementById('successtext').innerText="Blog added Successfully";
        }
		
		document.getElementById(id).style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
//		setInterval(displayhome,3000);
	}else if(id=="quotes"){
		
		var typeofFile=document.getElementById('quotepage').value;
		var quoteref=ref.child("quotes");
		var fileref=quoteref.child(typeofFile);
		var thriiveWorldplace=document.getElementById('quoteplace').value;
		var thriiveWorldSpeaker=document.getElementById('quoteSpeaker').value;
		var quote=document.getElementById('quote').value;
		fileref.push({quote: quote, author:thriiveWorldSpeaker, place: thriiveWorldplace});
		
		document.getElementById(id).style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="Quote added to "+typeofFile+ "page Successfully";
//		setInterval(displayhome,3000);
	}else{
		window.location="dashboard.html";
	}
	setInterval(loadpage,3000);
}

function loadpage(){
	window.location="dashboard.html";
}

function enableinnersections(id) {
    var elem=document.getElementById(id).value;
	document.getElementById("displaylist").style.display="none";
    document.getElementById("displaypractitioners").style.display="none";
    document.getElementById('user').style.display = "none";
    document.getElementById('calendar').style.display = "none";
    document.getElementById('thriiveworld').style.display = "none";
    document.getElementById('thriivetalks').style.display = "none";
    document.getElementById('quotes').style.display = "none";
    document.getElementById('adminuser').style.display = "none";
    document.getElementById('practitioner').style.display = "none";
    document.getElementById('modalities').style.display = "none";
    document.getElementById('therapy').style.display = "block";
    document.getElementById(elem).style.display = "block";
}

function displaytherapies(){
	document.getElementById("displaylist").style.display="block";
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addform').style.display = "none";
	document.getElementById("displaypractitioners").style.display="none";
}

function displayinnersections(){
	document.getElementById("displaylist").style.display="block";
    document.getElementById("displaypractitioners").style.display="block";
    var elem=document.getElementById("displaytherapies").value;
    if(elem=="practitioner"){
        document.getElementById("displaypractitioners").style.display="block";
        document.getElementById("displayalltherapies").style.display="none";
        displaypractitioners();
    }else if((elem=="modalities")){
        document.getElementById("displaypractitioners").style.display="none";
        document.getElementById("displayalltherapies").style.display="block";
        displaymodalities();
    }else{
        document.getElementById("displaypractitioners").style.display="none";
        document.getElementById("displayalltherapies").style.display="none";
    }
}


function displaypractitioners(){
    var therapytable = document.getElementById("practitionerTable");
    
    var rowCount = therapytable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        therapytable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('therapies');
    var childref=elemref.child('practitioner');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        console.log(data);
        var j=0;
        data.map(function(val,j){
            
                var table = document.getElementById("practitionerTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                var cell8 = row.insertCell(7);
                cell1.innerHTML = val.name;
                cell2.innerHTML = val.contact;
                cell3.innerHTML = val.email;
                cell4.innerHTML = val.modality1;
                cell5.innerHTML = val.modality2;
                cell6.innerHTML = val.modality3;
                cell7.innerHTML = val.modality4;
                cell8.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>';
        });
    });
}

function displaymodalities(){
    var practitionertable = document.getElementById("TherapyTable");
    var rowCount = practitionertable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        practitionertable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('therapies');
    var childref=elemref.child('modalities');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           child.forEach(function(modality){
                    this.data.push(modality.val());
           }.bind(this));
        });
        var j=0;
        data.map(function(val,j){
                var therapytable = document.getElementById("TherapyTable");
            
                var row = therapytable.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.name;
                cell2.innerHTML = val.duration;
                cell3.innerHTML = val.fees;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>';

        });
    });
}


function addtherapies(){
    document.getElementById("addtext").className = "activeText";
    document.getElementById("listtext").className = "listText";
    document.getElementById('addform').style.display = "block";
	document.getElementById("displaypractitioners").style.display="none";
	document.getElementById("displaylist").style.display="none";
    document.getElementById("displayalltherapies").style.display="none";
}

window.onload=changearticleblog;

function changearticleblog(){
    var elem=document.getElementById('thriivearticle').value;
    if(elem=="blog"){
        document.getElementById('url').style.display="block";
        document.getElementById('editor').style.display="none";
    }else{
        document.getElementById('url').style.display="none";
        document.getElementById('editor').style.display="block";
    }
}