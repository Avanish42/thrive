window.onload=enableinnersections;
function enableinnersections() {
    var elem=document.getElementById('selecttherapies').value;
    if(elem=="practitioner"){
        document.getElementById('addtherapy').style.display = "block";
        document.getElementById('therapieslist').style.display = "none";
        document.getElementById('practitioner').style.display = "block";
        document.getElementById('modalities').style.display = "none";
    }else{
        document.getElementById('addtherapy').style.display = "block";
        document.getElementById('therapieslist').style.display = "none";
        document.getElementById('practitioner').style.display = "none";
        document.getElementById('modalities').style.display = "block";
    }
}


function chnagesourceimg(id){
    document.getElementById('practitionermale').setAttribute('src',"images/radioButton.png");
    document.getElementById('practitionerfemale').setAttribute('src',"images/radioButton.png");
    document.getElementById(id).setAttribute('src','images/radioButton-2.png');
    if(document.getElementById('practitionermale').src=="images/radioButton-2.png"){
        document.getElementById('sex').value="male";
    }else{
        document.getElementById('sex').value="feamle";
    }
}



function displaytherapies(){
    document.getElementById("addtext").className = "listText";
    document.getElementById("listtext").className = "activeText";
    document.getElementById('addtherapy').style.display = "none";
	document.getElementById("therapieslist").style.display="block";
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
    document.getElementById('addtherapy').style.display = "block";
	document.getElementById("therapieslist").style.display="none";
    document.getElementById("displaytherapies").value="-";
	document.getElementById("displayalltherapies").style.display="none";
	document.getElementById("displaypractitioners").style.display="none";
}


function submitvalues(){
        var ref=firebase.database().ref(); 
        var elem=document.getElementById("selecttherapies").value;
        var mediaref = ref.child("therapies");
        var practitionerref=mediaref.child(elem);
        if(elem=="practitioner"){
            var ref = firebase.database().ref();
                var form1data=ref.child("therapies/practitioner");

                var firstname = document.getElementById("Firstname").value;
                var lastname = document.getElementById("Lastname").value;
                var address = document.getElementById("address").value;
                var city = document.getElementById("city").value;
                var email = document.getElementById("email").value;
                var website = document.getElementById("website").value;
                var phone = document.getElementById("phone").value;
                var dob = document.getElementById("dob").value;
                var age = document.getElementById("age").value;
                var sex = document.getElementById("sex").value;
                var fb = document.getElementById("fb").value;
                var tw = document.getElementById("tw").value;
                var gp = document.getElementById("gp").value;
                var yt = document.getElementById("yt").value;
                var about = document.getElementById("about").value;
                var modality1 = document.getElementById("m1").value;
                var modality1_exp = document.getElementById("m1exp").value;
                var modality2 = document.getElementById("m2").value;
                var modality2_exp = document.getElementById("m2exp").value;
                var modality3 = document.getElementById("m3").value;
                var modality3_exp = document.getElementById("m3exp").value;
                var modality4 = document.getElementById("m4").value;
                var modality4_exp = document.getElementById("m4exp").value;
                var modality_others = document.getElementById("m_others").value;
                var modality_otherexp = document.getElementById("m_otherexp").value;
                var overall_exp = document.getElementById("overall_exp").value;
                var hcharge = document.getElementById("hcharge").value;
                var degrees = document.getElementById("degrees").value;
                var ailments = document.getElementById("ailments").value;
//                var pri_career = document.getElementById("pri_career").value;
                var not_pri_career = document.getElementById("not_pri_career").value;
                form1data.push({
                    name : name,
                    address : address,
                    location : city,
                    email : email,
                    website : website,
                    phone : phone,
                    dob : dob,
                    age : age,
                    sex : sex,
                    fb : fb,
                    tw : tw,
                    gp : gp,
                    yt : yt,
                    about : about,
                    m1 : modality1,
                    m1exp : modality1_exp,
                    m2 : modality2,
                    m2exp : modality1_exp,
                    m3 : modality3,
                    m3exp : modality1_exp,
                    m4 : modality4,
                    m4exp : modality1_exp,
                    m_others : modality_others,
                    m_otherexp : modality_otherexp,
                    overall_exp : overall_exp,
                    hcharge : hcharge,
                    degrees : degrees,
                    ailments : ailments,
                    pri_career : pri_career,
                    not_pri_career : not_pri_career
                }); 
            document.getElementById("addtherapy").style.display="none";
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
			var file=document.getElementById("therapyicon").files[0];
				var filename=file.name;
				var fullname=filename;
				var strorageref=firebase.storage().ref('/Therapies/Modalities/'+fullname);
				var uploadtask= strorageref.put(file);
				uploadtask.on('state_changed',function(snapshot){
				},function (error){
				},function(){
					var downloadUrl = uploadtask.snapshot.downloadURL;
					var ref = firebase.database().ref();
					var wspPreRegistrations=ref.child("wsppreregistrstions");
					categoryref.push({name: Name, modalitydesc:modalitydesc, duration: duration, fees:fees, requirements:requirements,iconurl:downloadUrl});
				});
            document.getElementById("addtherapy").style.display="none";
            document.getElementById("modalities").style.display="none";
            document.getElementById("button").style.display="none";
            document.getElementById('successmsg').style.display="block";
            document.getElementById('successtext').innerText="Therapy added Successfully";
        }
        setInterval(loadpage,3000);
}


function loadpage(){
	window.location="dashboard.html";
}
