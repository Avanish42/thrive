window.onload=showwspcontent;
function showwspcontent(){
    document.getElementById('followups').style.display="none";
    document.getElementById('postFollowUps').style.display="none";
    displayNewEntries();
}
function displayNewEntries(){
    var ref = firebase.database().ref();
    firebase.database().ref("wsppreregistrstions").on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function (wsp) {
            var wspvalue=wsp.val();
            if(wspvalue.status=="waiting"){
                this.data.push(wsp.val());
                this.key.push(wsp.key);
            }
        }.bind(this));
        var j=0;
        var videoTable = document.getElementById("wspnewentries");
            var rowCount = videoTable.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                videoTable.deleteRow(i);
        }
        data.map(function(val,j){
            if(val.title!=""){
                var table = document.getElementById("wspnewentries");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = val.firstname;
                cell2.innerHTML = val.phone;
                cell3.innerHTML = val.email;
                cell4.innerHTML = val.city;
                var timestamp= val.submittedOn;
                var date= (new Date(timestamp));
                var today = ("0" + date.getDate()).slice(-2);
                var currentMonth =("0" + (date.getMonth()+1)).slice(-2);
                var currentYear = date.getFullYear();
                var receivedon= today+"-"+currentMonth +"-"+currentYear;
                cell5.innerHTML = receivedon;
                var id="approve"+(j+1);
				var deleteid="delete"+(j+1);
                cell6.innerHTML = '<center><i class="fa fa-check" aria-hidden="true" id=\''+id+'\' style="cursor:pointer;color:#4e0475;"></i> <i class="fa fa-trash-o" aria-hidden="true" id=\''+deleteid+'\' style="cursor:pointer;"></i></center>';
                
            }
        });
        var j=0;
        key.map(function(val,j){
             document.getElementById("approve"+(j+1)).setAttribute('onclick',"movetofollowupstage(\'"+val+"\')");
             document.getElementById("delete"+(j+1)).setAttribute('onclick',"deletewsp(\'"+val+"\')");
        });
        
    });
}


function deletewsp(key){
	var key=key;
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(key).update({
        status: "Rejected"
    });
}

function displayfollowups(){
    var ref = firebase.database().ref();
    firebase.database().ref("wsppreregistrstions").on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function (wsp) {
            var wspvalue=wsp.val();
            if((wspvalue.status!="waiting")){
				if(wspvalue.status!="Rejected"){
                	this.data.push(wsp.val());
                	this.key.push(wsp.key);
				}
            }
        }.bind(this));
        var j=0;
        var videoTable = document.getElementById("wspfollowups");
            var rowCount = videoTable.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                videoTable.deleteRow(i);
        }
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("wspfollowups");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = val.firstname;
                cell2.innerHTML = val.phone;
                cell3.innerHTML = val.email;
                cell4.innerHTML = val.city;
                cell5.innerHTML = val.status;
                var id="edit"+(j+1);
				var deleteid="deleteapproved"+(j+1);
                cell6.innerHTML = '<center><a id=\''+id+'\' style="color:#4e0475;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> <i class="fa fa-trash-o" aria-hidden="true" id=\''+deleteid+'\' style="cursor:pointer;color:red;"></i></center>';
                
            }
        });
        var j=0;
        key.map(function(val,j){
             document.getElementById("edit"+(j+1)).setAttribute('href',"wsp-registration.html?id="+val);
			document.getElementById("deleteapproved"+(j+1)).setAttribute('onclick',"deletewsp(\'"+val+"\')");
        });
        
    });
}


function movetofollowupstage(key){
    var key=key;
    var ref = firebase.database().ref();
    var wspPreRegistrations=ref.child("wsppreregistrstions");
    wspPreRegistrations.child(key).update({
        status: "Not Started"
    });
//    wspPreRegistrations.child(key).on('value', function (snapshot) {
//        alert("you can start the verification process for : " + snapshot.child('name').val() + " in follow ups section");
//    });   
}


function disablefollowupsection(){
    document.getElementById('followups').style.display="none";
    document.getElementById('received').style.display="block";
    document.getElementById('postFollowUps').style.display="none";
    document.getElementById('listtext').setAttribute('class','listText');
    document.getElementById('posttab').setAttribute('class','listText');
    document.getElementById('addtext').setAttribute('class','activeText');
    displayNewEntries();
}

function enablefollowupssection(){
    document.getElementById('received').style.display="none";
    document.getElementById('followups').style.display="block";
    document.getElementById('postFollowUps').style.display="none";
    document.getElementById('addtext').setAttribute('class','listText');
    document.getElementById('posttab').setAttribute('class','listText');
    document.getElementById('listtext').setAttribute('class','activeText');
    displayfollowups();
}

function enablePostfollowupssection(){
    document.getElementById('received').style.display="none";
    document.getElementById('followups').style.display="none";
    document.getElementById('postFollowUps').style.display="block";
    document.getElementById('addtext').setAttribute('class','listText');
    document.getElementById('posttab').setAttribute('class','activeText');
    document.getElementById('listtext').setAttribute('class','listText');
    displaypostfollowups();
}

function displaypostfollowups(){
    var ref = firebase.database().ref();
    firebase.database().ref("wsppreregistrstions").on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function (wsp) {
            var wspvalue=wsp.val();
            if(wspvalue.status=="approved"){
                this.data.push(wsp.val());
                this.key.push(wsp.key);
            }
        }.bind(this));
        var j=0;
        var videoTable = document.getElementById("wsppostfollowups");
            var rowCount = videoTable.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                videoTable.deleteRow(i);
        }
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("wsppostfollowups");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                cell1.id = "link"+(j+1);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = "TRV0000001";
                cell2.innerHTML = val.firstname;
                cell3.innerHTML = "12-04-2017";
                cell4.innerHTML = "Super Premium";
                cell5.innerHTML = val.status;
            }
        });
        var j=0;
        key.map(function(val,j){
             document.getElementById("link"+(j+1)).setAttribute('onclick',"OpenPostFollowups(\" "+val+"\");");
        });
        
    });
}


function OpenPostFollowups(key){
    var wspid=key;
    window.open(
  'wsp-postregistration.html?id='+wspid,
  '_self' // <- This is what makes it open in a new window.
);
}