function displaycalendar(){
    var videoTable = document.getElementById("eventstable");
    var rowCount = videoTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        videoTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('whatshappening');
    var childref=elemref.child('events');
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var date = new Date();
        snapshot.forEach(function (child) {
            if ((new Date(child.val().fromdate) >= date)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this));
        console.log(data);
        var j=0;
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("eventstable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = val.fromdate;
                cell2.innerHTML = val.title;
                cell3.innerHTML = val.speaker;
                cell4.innerHTML = val.venue;
                cell5.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 
            }
        });
    });
}

function displayevents(){
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addcalendar').style.display = "none";
    document.getElementById('displaycalendar').style.display = "block";
    displaycalendar();
}

function addevents(){
    document.getElementById("addtext").className = "activeText";
    document.getElementById("listtext").className = "listText";
    document.getElementById('addcalendar').style.display = "block";
    document.getElementById('displaycalendar').style.display = "none";
}

function submitvalues(){
     var ref=firebase.database().ref(); 
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
		
		document.getElementById('addcalendar').style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="Event created Successfully";
        setInterval(loadpage,3000);
}

function loadpage(){
	window.location="dashboard.html";
}
