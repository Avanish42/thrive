// FUNTION TO GET THE ID AND CATEGORY FROM URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
window.onload=function(){
    const dbRefObject = firebase.database().ref().child('therapies');
//    var eventsRef = dbRefObject.child("modalities");
    var categoryref = dbRefObject.child("modalities");
    var eventid= getUrlVars()['id'];
    var category =getUrlVars()['category'];
    category=decodeURI(category);
    var modalitiesRef = categoryref.child(category);
    var modality = modalitiesRef.child(eventid);
    modality.on('value', function (snapshot) {
        var metaurl = document.createElement('meta');
        metaurl.setAttribute('property',"og:url");
        metaurl.content = window.location.href;
        document.getElementsByTagName('head')[0].appendChild(metaurl); 
        var metatype = document.createElement('meta');
        metatype.setAttribute('property',"og:type");
        metatype.content = 'event';
        document.getElementsByTagName('head')[0].appendChild(metatype);
        var metatitle = document.createElement('meta');
        metatitle.setAttribute('property',"og:title");
        metatitle.content = snapshot.child('name').val();
        document.getElementsByTagName('head')[0].appendChild(metatitle);
        var metadesc = document.createElement('meta');
        metadesc.setAttribute('property',"og:description");
        metadesc.content = snapshot.child('modalitydesc').val().substr(0,80);
        document.getElementsByTagName('head')[0].appendChild(metadesc);
        var metaimg = document.createElement('meta');
        metaimg.setAttribute('property',"og:image");
        metaimg.content = snapshot.child('img').val();
        document.getElementsByTagName('head')[0].appendChild(metaimg);
	});
}

//FUNCTION TO FETCH THERAPY DATA FROM DATABASE
function fetchdata(content) {
    const dbRefObject = firebase.database().ref().child('therapies');
//    var eventsRef = dbRefObject.child("modalities");
    var categoryref = dbRefObject.child("modalities");
    var eventid= getUrlVars()['id'];
    var category =getUrlVars()['category'];
    category=decodeURI(category);
    var modalitiesRef = categoryref.child(category);
    var modality = modalitiesRef.child(eventid);
    modality.on('value', function (snapshot) {
        var text=document.getElementById(content);
        if(content=="iconurl"){
            text.setAttribute('src',snapshot.child(content).val())    
        }else if(content=="fees"){
            document.getElementById("enroll").setAttribute('href','payubiz.html?id='+snapshot.child(content).val());
            document.getElementById(content).innerText=snapshot.child(content).val();
        }else{
            document.getElementById(content).innerText=snapshot.child(content).val();
        }    
	});
}


// FUNCTION TO DISPLAY THE TITLE OF THE THERAPY
function settitle(title){
    const dbRefObject = firebase.database().ref().child('therapies');
    var categoryref = dbRefObject.child("modalities");
    var eventid= getUrlVars()['id'];
    var category =getUrlVars()['category'];
    category=decodeURI(category);
    var eventsRef = categoryref.child(category);
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
           document.title="THRIIVE | "+snapshot.child(title).val();
            var therapy=snapshot.child(title).val();
            document.getElementById('therapyname').innerHTML= therapy;
            getPractitioners(therapy);
	});
}


// FUNCTION TO GET THE PRACTITIONERS BASED ON THE THERAPY THEY OFFERED
function getPractitioners(modality){
    const dbRefObject = firebase.database().ref().child('therapies');
    var practitionerref = dbRefObject.child("practitioner");
    var dates = practitionerref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function (child) {
            if (child.val().modality1 == modality || child.val().modality2 == modality || child.val().modality3 == modality||child.val().modality4 == modality) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this));
        var practitionercount = data.length;
        var keycount = key.length;
        var maindiv=document.getElementById("practitionerofferedtherapy");
        var i=1;
        length=practitionercount/3;
        for (j = 1; j < length+1; j++) {
            var rowdiv=document.createElement("div");
            rowdiv.className="practitioners w3-animate-right"
            for(var k=1;k<=3;k++){
                var therapy = document.createElement("div");
                therapy.className = "therapist_Blog_" + k;
                var link = document.createElement("a");
                link.id = "link" + i;
                var img = document.createElement("img");
                img.id = "img" + i;
                img.style="width:100%";
                var title=document.createElement("h3");
                title.className="therapist_Name";
                title.id="title"+i;
                var desc=document.createElement("h4");
                desc.className="about_therapist";
                desc.id="desc"+i;
                link.appendChild(img);
                therapy.appendChild(link);
                therapy.appendChild(title);
                therapy.appendChild(desc);
                rowdiv.appendChild(therapy);
                i++;
            }
            maindiv.appendChild(rowdiv);
        }
		data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('img'+(j+1)+'').setAttribute("src",val.img);
            document.getElementById('title'+(j+1)+'').innerHTML=val.name;
            document.getElementById('desc'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

        });
        key.map(function(val,j){
                    
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','practitioners_subpage.html?id='+val+'');
        			
        });
        var practitioners_set2=document.getElementsByClassName("therapist_Blog_2");
        var j=2;
        for(i=0;i<practitioners_set2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set2[i].style.display="none";
            }
            j=j+3;
        }
        var practitioners_set1=document.getElementsByClassName("therapist_Blog_3");
        var j=3;
        for(i=0;i<practitioners_set1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set1[i].style.display="none";
            }
            j=j+3;
        }
        displayImg(0,1);
    });
}

//FUNCTION TO GO TO NEXT THERAPY IN THE SAME CATEGORY
function previoustherapy(){
    const dbRefObject = firebase.database().ref().child('therapies');
    var categoryref = dbRefObject.child("modalities");
    var eventid= getUrlVars()['id'];
    var category =getUrlVars()['category'];
    category=decodeURI(category);
    
    this.key=[];
    var prevtherapy=categoryref.child(category).on('value', function (snapshot) {
       snapshot.forEach(function (child) {
            this.key.push(child.key);
        }.bind(this)); 
        var i=0;
        for(i=0;i<key.length;i++){
            if(key[i]==eventid){
                if(i==0){
                    window.location="therapy_subPage.html?id="+key[i]+"&category="+category;
                }else{
                    window.location="therapy_subPage.html?id="+key[i-1]+"&category="+category;
                }
            }
        }
    });
    
    
}

//FUNCTION TO GO TO PREVIOUS THERAPY IN THE SAME CATEGORY
function nexttherapy(){
    const dbRefObject = firebase.database().ref().child('therapies');
    var categoryref = dbRefObject.child("modalities");
    var eventid= getUrlVars()['id'];
    var category =getUrlVars()['category'];
    category=decodeURI(category);
    
    
    this.key=[];
    var prevtherapy=categoryref.child(category).on('value', function (snapshot) {
       snapshot.forEach(function (child) {
            this.key.push(child.key);
        }.bind(this)); 
        var i=0;
        for(i=0;i<key.length;i++){
            if(key[i]==eventid){
                if(i==(key.length-1)){
                    window.location="therapy_subPage.html?id="+key[(key.length-1)]+"&category="+category;
                }else{
                    window.location="therapy_subPage.html?id="+key[i+1]+"&category="+category;
                }
            }
        }
    });
}


var imgindex = 1;

// FUNCTION TO CALL NEXT , PREV PRACTITIONERS SECTIONS 
function imgSlide(n) {
    displayImg(imgindex += n,n);
}


//FUNCTION TO DISPLAY INDIVIDUAL SECTION OF PRACTITIONERS
function displayImg(n,j) {
    var i;
    var x = document.getElementsByClassName("practitioners");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	if (n >= x.length) {
		imgindex = x.length;
		document.getElementById('next').style.opacity = ".3";
		document.getElementById('prev').style.opacity = "1";
	}
	else if(n <= 1) {
		imgindex = 1;
		document.getElementById('prev').style.opacity = ".3";
		document.getElementById('next').style.opacity = "1";
	}
	else {
		document.getElementById('prev').style.opacity = "1";
		document.getElementById('next').style.opacity = "1";
	}
	if (j == -1) {
		x[imgindex - 1].classList.remove("w3-animate-right");
		x[imgindex - 1].classList.add("w3-animate-left");
	}
	else {
		x[imgindex - 1].classList.add("w3-animate-right");
		x[imgindex - 1].classList.remove("w3-animate-left");
	}
	x[imgindex - 1].style.display = "block";
}