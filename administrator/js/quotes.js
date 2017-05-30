function displayinnersections(){
    var elem=document.getElementById("displaysection").value;
    if(elem=="home"){
        document.getElementById("displayhome").style.display="block";
        document.getElementById("displaytherapies").style.display="none";
        document.getElementById("displaythriiveworld").style.display="none";
        document.getElementById("displaywhatshappening").style.display="none";
        displayhome();
    }else if((elem=="therapies")){
        document.getElementById("displayhome").style.display="none";
        document.getElementById("displaytherapies").style.display="block";
        document.getElementById("displaythriiveworld").style.display="none";
        document.getElementById("displaywhatshappening").style.display="none";
        displaytherapies();
    }else if((elem=="thriiveworld")){
        document.getElementById("displayhome").style.display="none";
        document.getElementById("displaytherapies").style.display="none";
        document.getElementById("displaythriiveworld").style.display="block";
        document.getElementById("displaywhatshappening").style.display="none";
        displaythriiveworld();
    }else if((elem=="whatshappening")){
        document.getElementById("displayhome").style.display="none";
        document.getElementById("displaytherapies").style.display="none";
        document.getElementById("displaythriiveworld").style.display="none";
        document.getElementById("displaywhatshappening").style.display="block";
        displaywhatshappening();
    }else{
        document.getElementById("displayhome").style.display="none";
        document.getElementById("displaytherapies").style.display="none";
        document.getElementById("displaythriiveworld").style.display="none";
        document.getElementById("displaywhatshappening").style.display="none";
    }
}

function displayhome(){
    var homeTable = document.getElementById("homeTable");
    var rowCount = homeTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        homeTable.deleteRow(i);
    }
    var therapyTable = document.getElementById("therapyTable");
    var rowCount = therapyTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        therapyTable.deleteRow(i);
    }
    var thriiveworldTable = document.getElementById("thriiveworldTable");
    var rowCount = thriiveworldTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        thriiveworldTable.deleteRow(i);
    }
    var whatshappeningTable = document.getElementById("whatshappeningTable");
    var rowCount = whatshappeningTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        whatshappeningTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('quotes');
    var childref=elemref.child('home');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("homeTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.author;
                cell2.innerHTML = val.place;
                cell3.innerHTML = val.quote;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 
            }
        });
    });
}

function displaytherapies(){
    var homeTable = document.getElementById("homeTable");
    var rowCount = homeTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        homeTable.deleteRow(i);
    }
    var therapyTable = document.getElementById("therapyTable");
    var rowCount = therapyTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        therapyTable.deleteRow(i);
    }
    var thriiveworldTable = document.getElementById("thriiveworldTable");
    var rowCount = thriiveworldTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        thriiveworldTable.deleteRow(i);
    }
    var whatshappeningTable = document.getElementById("whatshappeningTable");
    var rowCount = whatshappeningTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        whatshappeningTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('quotes');
    var childref=elemref.child('therapies');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var table = document.getElementById("therapyTable");
            
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.author;
                cell2.innerHTML = val.place;
                cell3.innerHTML = val.quote;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 

        });
    });
}

function displaythriiveworld(){
    var homeTable = document.getElementById("homeTable");
    var rowCount = homeTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        homeTable.deleteRow(i);
    }
    var therapyTable = document.getElementById("therapyTable");
    var rowCount = therapyTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        therapyTable.deleteRow(i);
    }
    var thriiveworldTable = document.getElementById("thriiveworldTable");
    var rowCount = thriiveworldTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        thriiveworldTable.deleteRow(i);
    }
    var whatshappeningTable = document.getElementById("whatshappeningTable");
    var rowCount = whatshappeningTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        whatshappeningTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('quotes');
    var childref=elemref.child('thriiveworld');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var table = document.getElementById("thriiveworldTable");
            
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.author;
                cell2.innerHTML = val.place;
                cell3.innerHTML = val.quote;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 

        });
    });
}

function displaywhatshappening(){
    var homeTable = document.getElementById("homeTable");
    var rowCount = homeTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        homeTable.deleteRow(i);
    }
    var therapyTable = document.getElementById("therapyTable");
    var rowCount = therapyTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        therapyTable.deleteRow(i);
    }
    var thriiveworldTable = document.getElementById("thriiveworldTable");
    var rowCount = thriiveworldTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        thriiveworldTable.deleteRow(i);
    }
    var whatshappeningTable = document.getElementById("whatshappeningTable");
    var rowCount = whatshappeningTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        whatshappeningTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('quotes');
    var childref=elemref.child('whatshappening');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var table = document.getElementById("whatshappeningTable");
            
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = val.author;
                cell2.innerHTML = val.place;
                cell3.innerHTML = val.quote;
                cell4.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 

        });
    });
}

function displayquotes(){
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addquotes').style.display = "none";
    document.getElementById('displayquote').style.display = "block";
}

function addquotes(){
    document.getElementById("addtext").className = "activeText";
    document.getElementById("listtext").className = "listText";
    document.getElementById('addquotes').style.display = "block";
    document.getElementById('displayquote').style.display = "none";
}
function submitvalues(){
    var typeofFile=document.getElementById('quotepage').value;
    var ref= firebase.database().ref();
		var quoteref=ref.child("quotes");
		var fileref=quoteref.child(typeofFile);
		var thriiveWorldplace=document.getElementById('quoteplace').value;
		var thriiveWorldSpeaker=document.getElementById('quoteSpeaker').value;
		var quote=document.getElementById('quote').value;
		fileref.push({quote: quote, author:thriiveWorldSpeaker, place: thriiveWorldplace});
		
		document.getElementById('addquotes').style.display="none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
		document.getElementById('successtext').innerText="Quote added to "+typeofFile+ "page Successfully";
        setInterval(loadpage,3000);
}

function loadpage(){
	window.location="dashboard.html";
}