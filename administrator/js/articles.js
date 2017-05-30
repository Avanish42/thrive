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
function displayinnersections(){
    var elem=document.getElementById("displaysection").value;
    if(elem=="articles"){
        document.getElementById("articledisplay").style.display="block";
        document.getElementById("blogdisplay").style.display="none";
        displayarticle();
    }else if((elem=="blogs")){
        document.getElementById("articledisplay").style.display="none";
        document.getElementById("blogdisplay").style.display="block";
        displayblog();
    }else{
        document.getElementById("articledisplay").style.display="none";
        document.getElementById("blogdisplay").style.display="none";
    }
}

function displayarticle(){
    var blogtable = document.getElementById("blogTable");
    
    var rowCount = blogtable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        blogtable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('thriivetalks');
    var childref=elemref.child('article');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
            if(val.title!=""){
               var table = document.getElementById("articleTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = val.name;
                cell2.innerHTML = val.author;
                cell3.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>'; 
            }
        });
    });
}

function displayblog(){
    var articleTable = document.getElementById("articleTable");
    var rowCount = articleTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        articleTable.deleteRow(i);
    }
    var ref = firebase.database().ref();
    var elemref=ref.child('thriivetalks');
    var childref=elemref.child('blog');
    this.data = [];
    childref.on("value",function(snapshot){
       snapshot.forEach(function(child){
           this.data.push(child.val());
       }.bind(this));
        var j=0;
        data.map(function(val,j){
                var therapytable = document.getElementById("blogTable");
            
                var row = therapytable.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = val.name;
                cell2.innerHTML = val.author;
                cell3.innerHTML = '<center><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></center>';

        });
    });
}


function displayarticles(){
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addartcile').style.display = "none";
    document.getElementById('displayarticles').style.display = "block";
}

function addrticles(){
    document.getElementById("addtext").className = "activeText";
    document.getElementById("listtext").className = "listText";
    document.getElementById('addartcile').style.display = "block";
    document.getElementById('displayarticles').style.display = "none";
}

function submitvalues(){
    var ref = firebase.database().ref();
    var thrivetalkref = ref.child("thriivetalks");
        var item=document.getElementById("thriivearticle").value;
		var thriiveWorldtitle=document.getElementById('thriivetalktitle').value;
		var thriiveWorldSpeaker=document.getElementById('thriivetalkSpeaker').value;
//        var description=CKEDITOR.instances.htmleditor.document.getBody().getHtml();
        var objEditor = CKEDITOR.instances["htmleditor"];
        var description = objEditor.getData();
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
		document.getElementById('addartcile').style.display = "none";
		document.getElementById("button").style.display="none";
		document.getElementById('successmsg').style.display="block";
    setInterval(loadpage,3000);
}

function loadpage(){
	window.location="dashboard.html";
}