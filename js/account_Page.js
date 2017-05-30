//ON PAGE LOAD FUNCTION
//window.onresize=displayfunctions;

//FUNCTION TO DISPLAY BOTH EVENTS AND VIDEOS ON PAGE LOAD
function displayfunctions(){
//	displayVideos();
//	displayEvents();
}

//FUNCTION TO DISPLAY VIDEOS BASED ON SCREEN WIDTH

function displayVideos(){
		var paras = document.getElementsByClassName('video_div');
		while(paras[0]) {
			paras[0].parentNode.removeChild(paras[0]);
		}
		  displayVideos_desktop();
}


//FUNCTION TO DISPLAY VIDEOS FOR DESKTOP
function displayVideos_desktop() {
    var user = firebase.auth().currentUser;
    if (user != null) {
        var name = user.displayName;
        var email = user.email;
        var photoUrl = user.photoURL;
        var emailVerified = user.emailVerified;
        var uid = user.uid;
    }
    //        alert(email);
    var ref = firebase.database().ref();
    var userref = ref.child("users");
    userref.orderByChild("id").once('value', function (userchild) {
        userchild.forEach(function (childuser) {
            if (email == childuser.child("email").val()) {
                var id = childuser.key;
                getVideos(id);
            }
        });
    });
}

function getVideos(id) {
    var ref = firebase.database().ref();
    var userref = ref.child("users");
    var videoref = userref.child(id);
    videoref.child("video").on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
    var videosCount = data.length;
    var videosCount = Math.ceil(videosCount / 4);
    var maindiv = document.getElementById("thriiveworld_desktop");
    var k = 1;
    for (var j = 0; j < videosCount; j++) {
        var classindex = 1;
        var rowdiv = document.createElement("div");
        rowdiv.className = "videos_desktop animate_right";
        for (var i = 0; i < 2; i++) {
            var videoset = document.createElement("div");
            videoset.className = "video_set animate_right";
            for (var x = 0; x < 2; x++) {
                var block = document.createElement("div");
                block.className = "video_div video" + classindex;
                var redirectlink = document.createElement("a");
                redirectlink.id = "redirect" + k;
                var imagesdiv = document.createElement("div");
                imagesdiv.className = "slider";
                var img1 = document.createElement("img");
                img1.className = "BG_slide";
                img1.id = "img1_" + k;
                img1.src = "images/videoImages/06.jpg";
                var img2 = document.createElement("img");
                img2.className = "slide1";
                img2.id = "img2_" + k;
                img2.src = "images/videoImages/10.jpg";
                var img3 = document.createElement("img");
                img3.className = "slide2";
                img3.id = "img3_" + k;
                img3.src = "images/videoImages/11.jpg";
                var img4 = document.createElement("img");
                img4.className = "slide3";
                img4.id = "img4_" + k;
                img4.src = "images/videoImages/16.jpg";
                var overlaydiv = document.createElement("div");
                overlaydiv.className = "PlayButton";
                var titlediv = document.createElement("div");
                titlediv.className = "infoText";
                var speaker = document.createElement("span");
                speaker.id = "speaker" + k;
                speaker.className = "BeforeText";
                var Desc = document.createElement("span");
                Desc.id = "videodesc" + k;
                Desc.className = "AfterText";
                imagesdiv.appendChild(img1);
                imagesdiv.appendChild(img2);
                imagesdiv.appendChild(img3);
                imagesdiv.appendChild(img4);
                titlediv.appendChild(speaker);
                titlediv.appendChild(Desc);
                redirectlink.appendChild(imagesdiv);
                redirectlink.appendChild(overlaydiv);
                redirectlink.appendChild(titlediv);
                block.appendChild(redirectlink)
                videoset.appendChild(block);
                k = k + 1;
                classindex = classindex + 1;
            }
            rowdiv.appendChild(videoset);
        }
        maindiv.appendChild(rowdiv);
    }
    console.log(data);
    var j = 0;
    data.map(function (val, j) {
        var videotitle = val.title;
        var videospeaker = val.speaker;
        var videodescription = val.description;
        //				document.getElementById("title" + (j + 1)).innerText = videotitle.substring(0,30);
        document.getElementById("speaker" + (j + 1)).innerText = videospeaker;
        document.getElementById("videodesc" + (j + 1)).innerText = videodescription.substring(0, 100) + "...";
    });
    var j = 0;
    key.map(function (val, j) {
        document.getElementById("redirect" + (j + 1)).setAttribute("href", "thriive_world_audio_videos.html?id=" + val);
    });
    var video_block1 = document.getElementsByClassName("video_div");
    var j = 1;
    for (i = 0; i < video_block1.length; i++) {
        if (document.getElementById("speaker" + j).innerHTML == "") {
            video_block1[i].style.display = "none";
        }
        j = j + 1;
    }
    if (window.innerWidth > 736) {
        carousel('videos_desktop', 0, 1);
    }
    else {
        carousel('video_set', 0, 1);
    }
    });
}
// FUNCTION TO DISPLAY VIDEOS MOBILE SECTION
function displayVideos_mobile() {
    var ref=firebase.database().ref();
    var userref = ref.child("users");
    var user = firebase.auth().currentUser;
    if (user) {
        var videoref=userref.child(user);
	   var videos = videoref.child("video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
		snapshot.forEach(function (child) {
			this.data.push(child.val());
			this.key.push(child.key);
		}.bind(this));
		var videosCount = data.length;
		var videosCount = videosCount;
        var maindiv=document.getElementById("thriiveworld_mobile");
            for(var i=1;i<=3;i++){
                var redirectlink=document.createElement("a");
                redirectlink.id="redirect"+i;
                var block=document.createElement("div");
                block.className="thriiveworld animate_right ThriiveWorldDiv_"+i;

                var videoblock=document.createElement("div");
                videoblock.className="videoBlog_"+i;

                var iframe=document.createElement("iframe");
                iframe.id="video"+i;
                var img=document.createElement("img");
                img.src="images/TW_Eye.png";
                img.className="TW_Eye";

                videoblock.appendChild(iframe);
                videoblock.appendChild(img);

                var addvideolink=document.createElement("a");
                addvideolink.id="addvideo"+i;

                var downloadcloud=document.createElement("img");
                downloadcloud.src="images/Download_Cloud.png";
                downloadcloud.className="Download_Cloud";
                var tooltip=document.createElement("p");
                tooltip.className="popupMsg";
                tooltip.innerHTML="Add to your Dashboard";

                var title=document.createElement("h3");
                var speaker=document.createElement("h3");

                title.className="TW_Caption";
                title.id="title"+i;

                speaker.className="TW_SubCaption";
                speaker.id="speaker"+i;

                addvideolink.appendChild(downloadcloud);

                redirectlink.appendChild(videoblock);
                
                block.appendChild(redirectlink);
                block.appendChild(addvideolink);
                block.appendChild(tooltip);
                block.appendChild(title);
                block.appendChild(speaker);
                maindiv.appendChild(block);
            }
        var j=0;
		data.map(function (val, j) {
				var videotitle = val.title;
				var videospeaker = val.speaker;
				var src = val.url;
				document.getElementById("title" + (j + 1)).innerText = videotitle;
				document.getElementById("video" + (j + 1)).setAttribute('src', src);
				document.getElementById("speaker" + (j + 1)).innerText = videospeaker;
		});
        
        var j=0;
        key.map(function (val, j) {
				document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_audio_videos.html?id="+val);
//				document.getElementById("addvideo" + (j + 1) + "").setAttribute('onclick', "addtomydashboard("+val+")");
		});
		carousel(0, 1);
	});
    }
}



var videoindex=0;
function callcarousel(n) {
	videoindex+=n;
    if(window.innerWidth>736){
	   carousel('videos_desktop',videoindex, n);
    }else{
	   carousel('video_set',videoindex, n);
    }
}

function carousel(classname,n, j) {
	var i;
	var x = document.getElementsByClassName(classname);
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	if (n >= x.length) {
		videoindex = x.length;
		document.getElementById('twNextButtonImg').style.opacity = "0.3";
		document.getElementById('twPrevButtonImg').style.opacity = "1";
	}
	else if(n <= 1) {
		videoindex = 1;
		document.getElementById('twPrevButtonImg').style.opacity = "0.3";
		document.getElementById('twNextButtonImg').style.opacity = "1";
	}
	else {
		document.getElementById('twPrevButtonImg').style.opacity = "1";
		document.getElementById('twNextButtonImg').style.opacity = "1";
	}
	if (j == -1) {
		x[videoindex - 1].classList.remove("animate_right");
		x[videoindex - 1].classList.add("animate_left");
	}
	else {
		x[videoindex - 1].classList.add("animate_right");
		x[videoindex - 1].classList.remove("animate_left");
	}
	x[videoindex - 1].style.display = "block";
}

//FUNCTION FOR DOWNLOAD CLOUD TOOLPIC MESSAGE ON HOVER

//function tooltip(){
//    document.getElementsByClassName("popupMsg").style.display="block"
//}



window.onload=function(){
     var user = firebase.auth().currentUser;
    
    var email=user.email;
    var ref=firebase.database().ref();
    var userref = ref.child("users");

     userref.orderByChild("id").once('value', function (userchild) {
        userchild.forEach(function (childuser) {
            if (email == childuser.child("email").val()) {
                var role = childuser.child("role").val();
                if(role=='WSP'){
                    
                    document.getElementById('userDataSection').style.display='none';
                    document.getElementById('wspDetails').style.display='block';
                    getWspKey();
                    
                }else{
                    document.getElementById('wspDetails').style.display='none';
                    document.getElementById('userDataSection').style.display='block';
                    document.onreadystatechange = function(){
                         if(document.readyState === 'complete'){
                            displayVideos();
                         }
                    }
                }
            }
        });
    
     });
    
}


function getWspKey() {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var ref = firebase.database().ref();
    var userref = ref.child("therapies/practitioner");
    userref.on('value', function (snap) {
        snap.forEach(function (snapshot) {
            if (email == snapshot.child("email").val()) {
                var key=snapshot.key;
                document.getElementById("wspkey").value=key;
                fetchwspdata(key);
                fetchmodalities(key);
            }
        });
    });
}

function fetchwspdata(wspid){
    var ref = firebase.database().ref();
    var userref = ref.child("therapies/practitioner");
//    alert(new Date(1493815561594));
    var parctitioner=userref.child(wspid);
    parctitioner.on("value",function(snapshot){
        var wspdetails=snapshot.val();
        
        document.getElementById('profileImage').setAttribute('src',wspdetails.profile_url);
        
        
        document.getElementById('wsp-package').innerHTML= wspdetails.packageSelected;
        document.getElementById('wspkey').value= wspdetails.packageSelected;
        document.getElementById("linkToAddModalities").setAttribute("href","")
        
        if(wspdetails.firstname!="" || wspdetails.lastname!=""){
            document.getElementById('wsp-name').innerHTML=wspdetails.firstname+" "+wspdetails.lastname;
        }else{
            document.getElementById('wsp-name').innerHTML="-";            
        }
        
        if(wspdetails.city!=""){
            document.getElementById('wsp-city').innerHTML=wspdetails.city;
        }else{
            document.getElementById('wsp-city').innerHTML="-";            
        }
        
        if(wspdetails.address!=""){
            document.getElementById('wsp-address').innerHTML=wspdetails.address;
        }else{
            document.getElementById('wsp-address').innerHTML="-";            
        }
        
        if(wspdetails.email!=""){
            document.getElementById('wsp-email').innerHTML=wspdetails.email;
        }else{
            document.getElementById('wsp-email').innerHTML="-";            
        }
        
        if(wspdetails.website!=""){
            document.getElementById('wsp-website').innerHTML=wspdetails.website;
        }else{
            document.getElementById('wsp-website').innerHTML="-";            
        }
        
        if(wspdetails.phone!=""){
            document.getElementById('wsp-contact').innerHTML=wspdetails.phone;
        }else{
            document.getElementById('wsp-contact').innerHTML="-";            
        }
        
        if(wspdetails.dob!=""){
            document.getElementById('wsp-dob').innerHTML=wspdetails.dob;
        }else{
            document.getElementById('wsp-dob').innerHTML="-";            
        }
        
        if(wspdetails.age!=""){
            document.getElementById('wsp-age').innerHTML=wspdetails.age;
        }else{
            document.getElementById('wsp-age').innerHTML="-";            
        }
        
        if(wspdetails.gender!=""){
            document.getElementById('wsp-gender').innerHTML=wspdetails.gender;
        }else{
            document.getElementById('wsp-gender').innerHTML="-";            
        }
    
        if(wspdetails.facebook!=""){
            document.getElementById('wsp-facebook').innerHTML=wspdetails.facebook;
        }else{
            document.getElementById('wsp-facebook').innerHTML="-";            
        }
        
        if(wspdetails.twitter!=""){
            document.getElementById('wsp-twitter').innerHTML=wspdetails.twitter;
        }else{
            document.getElementById('wsp-twitter').innerHTML="-";            
        }
        
        if(wspdetails.gPlus!=""){
            document.getElementById('wsp-g+').innerHTML=wspdetails.gPlus;
        }else{
            document.getElementById('wsp-g+').innerHTML="-";            
        }
        
        if(wspdetails.Youtube!=""){
            document.getElementById('wsp-youtube').innerHTML=wspdetails.Youtube;
        }else{
            document.getElementById('wsp-youtube').innerHTML="-";            
        } 
        
        if(wspdetails.aboutYourSelf!=""){
            document.getElementById('wsp-about').innerHTML=wspdetails.aboutYourSelf;
        }else{
            document.getElementById('wsp-about').innerHTML="-";            
        }
       
        
      
        var renewal_date = new Date(wspdetails.paymentReceivedOn);
        var months = ['jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = renewal_date.getMonth();
        var year = renewal_date.getFullYear()+1;
        var date = renewal_date.getDate();
        
        var suffix = [ "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"]
        
        document.getElementById('wsp-renewaldate').innerHTML=date+suffix[date]+"  "+months[month]+"  "+year;
        
        document.getElementById('wsp-editprofile').setAttribute('href','editDetails.html/'+wspid)
    });
}


function fetchmodalities(wspid){
    var ref = firebase.database().ref();
    var userref = ref.child("therapies/practitioner");
    var modalitiesref = ref.child("therapies/modalities");
       gettherapies(wspid); 
}


function gettherapies(wspid) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var practitionerref = dbRefObject.child("practitioner");
    var practitionerid = wspid;
    this.data = [];
    var dates = practitionerref.child(practitionerid).on('value', function (snapshot) {
        this.data.push(snapshot.val().m1);
        if(snapshot.val().m2!=''){
            this.data.push(snapshot.val().m2);
        }
        if(snapshot.val().m3!=''){
            this.data.push(snapshot.val().m3);
        }
        if(snapshot.val().m4!=''){
            this.data.push(snapshot.val().m4);
        }
        gettherapydata(data);
    });
}

//FUNCTION TO GET THE MODALITY DATA OF THE PARTICULAT MODALITY
function gettherapydata(therapy) {
    var therapies = new Array();
    for (var i = 0; i < therapy.length; i++) {
        therapies[i] = therapy[i];
    }
   
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities");
    var dates = modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        this.parent = [];
        snapshot.forEach(function (child) {
            child.forEach(function (modality) {
                for (var i = 0; i < therapies.length; i++) {
                    if (modality.val().name == therapies[i]) {
                        this.parent.push(child.key);
                        this.key.push(modality.key);
                        this.data.push(modality.val());
                    }
                }
            });
        }.bind(this));
        var practitionercount = data.length;
         var package=document.getElementById("wspkey").value;
        if(package=="Earth"){
            if( practitionercount >= 3){
                document.getElementById("addModalities").style.display="none";
            }    
        }else if(package=="Water"){
            if( practitionercount >= 5){
                document.getElementById("addModalities").style.display="none";
            }
        }else{
            document.getElementById("addModalities").style.display="block";  
        } 
        
        var keycount = key.length;
        var maindiv = document.getElementById("therapiesoffer");
        var i = 1;
        var length = practitionercount / 6;
       
        for (j = 1; j < length + 1; j++) {
            var rowdiv = document.createElement("div");
            rowdiv.className = "therapies w3-animate-right";
            if(package=="Earth"){
                var noOfModalities=3;
            }else if(package=="Water"){
                var noOfModalities=5;
            }else{
                var noOfModalities=6;
            }
            for (var k = 1; k <= noOfModalities ; k++) 
            {
                var therapy = document.createElement("div");
                therapy.className = "therapy_offers_img" + k;
                var link = document.createElement("a");
                link.id = "link" + i;
                var img = document.createElement("img");
                img.id = "img" + i;
                img.style = "width:100%";
                var title = document.createElement("h3");
                title.className = "therapy_offers_text";
                title.id = "title" + i;
                link.appendChild(img);
                therapy.appendChild(link);
                therapy.appendChild(title);
                rowdiv.appendChild(therapy);
                i++;
            }
            maindiv.appendChild(rowdiv);
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.iconurl;
            document.getElementById('img' + (j + 1) + '').setAttribute("src", val.iconurl);
            document.getElementById('title' + (j + 1) + '').innerHTML = val.name;
        });
        key.map(function (val, j) {
            var id = document.getElementById("link" + (j + 1) + "");
            id.setAttribute('href', 'therapy_subpage.html?id=' + val + '');
        });
        parent.map(function (val, j) {
            var id = document.getElementById("link" + (j + 1) + "");
            var link = id.getAttribute('href');
            link = link + "&category=" + val;
            id.setAttribute('href', link);
        });
    });
}



