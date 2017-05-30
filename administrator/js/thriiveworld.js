function enableinnersections(id) {
    var elem=document.getElementById(id).value;
	document.getElementById("displaylist").style.display="none";
    document.getElementById("displaypractitioners").style.display="none";
    document.getElementById('practitioner').style.display = "none";
    document.getElementById('modalities').style.display = "none";
    document.getElementById(elem).style.display = "block";
}


function chnagesourceimg(id){
    document.getElementById('practitionermale').setAttribute('src',"images/radioButton.png");
    document.getElementById('practitionerfemale').setAttribute('src',"images/radioButton.png");
    document.getElementById(id).setAttribute('src','images/radioButton-2.png');
    
}



function displaytherapies(){
	document.getElementById("displaylist").style.display="block";
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addtherapy').style.display = "none";
	document.getElementById("displaypractitioners").style.display="none";
}
function displayinnersections(){
    var elem=document.getElementById("displaysection").value;
    if(elem=="audio"){
        document.getElementById("displayaudio").style.display="block";
        document.getElementById("displayvideo").style.display="none";
        document.getElementById("displayguidedmediation").style.display="none";
        displayaudio();
    }else if((elem=="video")){
        document.getElementById("displayaudio").style.display="none";
        document.getElementById("displayvideo").style.display="block";
        document.getElementById("displayguidedmediation").style.display="none";
        displayvideo();
    }else if((elem=="guided meditation")){
        document.getElementById("displayaudio").style.display="none";
        document.getElementById("displayvideo").style.display="none";
        document.getElementById("displayguidedmediation").style.display="block";
        displayguidedmeditation();
    }else{
        document.getElementById("displayaudio").style.display="none";
        document.getElementById("displayvideo").style.display="none";
        document.getElementById("displayguidedmediation").style.display="none";
    }
}

function displayaudio(){
    var videotable = document.getElementById("videoTable");
    
    var rowCount = videotable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        videotable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('thriiveworld');
    var childref=elemref.child('media');
    var audioref=childref.child('audio');
    this.data = [];
    audioref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("audioTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.name;
                cell2.innerHTML = val.contact;
                cell3.innerHTML = val.email;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 
            }
        });
    });
}

function displayvideo(){
    var audiotable = document.getElementById("audioTable");
    var rowCount = audiotable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        audiotable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('thriiveworld');
    var childref=elemref.child('media');
    var videoref=childref.child('video');
    this.data = [];
    videoref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var therapytable = document.getElementById("videoTable");
            
                var row = therapytable.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.title;
                cell2.innerHTML = val.speaker;
                cell3.innerHTML = val.description.substr(0,20)+"...";
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>';

        });
    });
}

function displayguidedmeditation(){
    var videoTable = document.getElementById("videoTable");
    var rowCount = videoTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        videoTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('thriiveworld');
    var childref=elemref.child('media');
    var videoref=childref.child('guided meditation');
    this.data = [];
    videoref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var therapytable = document.getElementById("guidedmeditationtable");
            
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
    document.getElementById('addtherapy').style.display = "block";
	document.getElementById("displaypractitioners").style.display="none";
	document.getElementById("displaylist").style.display="none";
    document.getElementById("displayalltherapies").style.display="none";
    document.getElementById("displaytherapies").value="-";
}

function displaymedia(){
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addmedia').style.display = "none";
    document.getElementById('displaymedia').style.display = "block";
}

function addmedia(){
    document.getElementById("addtext").className = "activeText";
    document.getElementById("listtext").className = "listText";
    document.getElementById('addmedia').style.display = "block";
    document.getElementById('displaymedia').style.display = "none";
}

function submitvalues(){
    var ref=firebase.database().ref(); 
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
		setInterval(displayhome,3000);
}

function loadpage(){
	window.location="dashboard.html";
}
