//FUNCTION TO GET THE VALUES FROM URL 
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


function fetchdata(content){
    var eventid = getUrlVars()['id'];
    var ref= firebase.database().ref("thriiveworld/media/video");
    var videoref=ref.child(eventid);
    var videodat=videoref.on('value', function (snapshot) {
        if(content=="url"){
            document.getElementById(content).setAttribute('src', snapshot.child(content).val()+"?autoplay=1");
        }
        document.getElementById(content).innerHTML= snapshot.child(content).val();
    });
}

window.onload=myFunction;

function myFunction() {
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                user.providerData.forEach(function (profile) {
                    
                    
                    //Check if User Already Exist
                    var ref = firebase.database().ref();
                    var userref=ref.child("users");

                    userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                        var exists = (snapshot.val() !==null);
                        if (exists) {
                            //DISPLAY OTHER DETAILS
                            snapshot.forEach(function (child) {
                                if (child.val().email==profile.email) {
                                    //signin_user_name_Object.innerHTML = child.val().name;
                                    document.getElementById('downloadicon').style.display="block";
                                }
                            });
                        }
                    });
                });
            } else {
                document.getElementById('downloadicon').style.display="none";
            }
        });
}

function displayVideos(){
	if(window.innerWidth>736){
		document.getElementById("thriiveworld_mobile").style.display="none";
		document.getElementById("thriiveworld_desktop").style.display="block";
		var paras = document.getElementsByClassName('thriiveworld');
		while(paras[0]) {
			paras[0].parentNode.removeChild(paras[0]);
		}
		  displayVideos_desktop();
	}else{
		document.getElementById("thriiveworld_mobile").style.display="block";
		document.getElementById("thriiveworld_desktop").style.display="none";
		var paras = document.getElementsByClassName('thriiveworld');
		while(paras[0]) {
			paras[0].parentNode.removeChild(paras[0]);
		}	
        displayVideos_mobile();
	}
}



//FUNCTION TO DISPLAY VIDEOS FOR DESKTOP
function displayVideos_desktop() {
	var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
        var eventid = getUrlVars()['id'];
		snapshot.forEach(function (child) {
			if(child.key!=eventid){
                this.data.push(child.val());
                this.key.push(child.key);
            }
		}.bind(this));
		var videosCount = data.length;
		var videosCount = videosCount/3;
        var maindiv=document.getElementById("thriiveworld_desktop");
        var k=1;
		for(var j=0;j<videosCount;j++){
            var rowdiv=document.createElement("div");
            rowdiv.className="thriiveworld animate_right";
            for(var i=1;i<=3;i++){
                var redirectlink=document.createElement("a");
                redirectlink.id="redirect"+k;
                var block=document.createElement("div");
                block.className="ThriiveWorldDiv_"+i;

                var videoblock=document.createElement("div");
                videoblock.className="videoBlog_"+i;

                var iframe=document.createElement("iframe");
                iframe.id="video"+k;
                var img=document.createElement("img");
                img.src="images/TW_Eye.png";
                img.className="TW_Eye";

                videoblock.appendChild(iframe);
                videoblock.appendChild(img);

                var addvideolink=document.createElement("a");
                addvideolink.id="addvideo"+k;

                var downloadcloud=document.createElement("img");
                downloadcloud.src="images/Download_Cloud.png";
                downloadcloud.className="Download_Cloud";
                var tooltip=document.createElement("p");
                tooltip.className="popupMsg";
                tooltip.innerHTML="Add to your Dashboard";

                var title=document.createElement("h3");
                var speaker=document.createElement("h3");

                title.className="TW_Caption";
                title.id="title"+k;

                speaker.className="TW_SubCaption";
                speaker.id="speaker"+k;

                addvideolink.appendChild(downloadcloud);

                redirectlink.appendChild(videoblock);
                
                block.appendChild(redirectlink);
                block.appendChild(addvideolink);
                block.appendChild(tooltip);
                block.appendChild(title);
                block.appendChild(speaker);
                rowdiv.appendChild(block);
                k=k+1;
            }
            maindiv.appendChild(rowdiv);
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
				document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_guided_meditation.html?id="+val);
//				document.getElementById("addvideo" + (j + 1) + "").setAttribute('onclick', "addtomydashboard("+val+")");
		});
        var video_block1=document.getElementsByClassName("ThriiveWorldDiv_2");
        var j=2;
        for(i=0;i<video_block1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                video_block1[i].style.display="none";
            }
            j=j+3;
        }
        var video_block2=document.getElementsByClassName("ThriiveWorldDiv_3");
        var j=3;
        for(i=0;i<video_block2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                video_block2[i].style.display="none";
            }
            j=j+3;
        }
		carousel(0, 1);
	});
}


// FUNCTION TO DISPLAY VIDEOS MOBILE SECTION
function displayVideos_mobile() {
	var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
        var eventid = getUrlVars()['id'];
		snapshot.forEach(function (child) {
			if(child.key!=eventid){
                this.data.push(child.val());
                this.key.push(child.key);
            }
		}.bind(this));
		var videosCount = data.length;
		var videosCount = videosCount;
        var maindiv=document.getElementById("thriiveworld_mobile");
            for(var i=1;i<=videosCount;i++){
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
				document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_guided_meditation.html?id="+val);
//				document.getElementById("addvideo" + (j + 1) + "").setAttribute('onclick', "addtomydashboard("+val+")");
		});
        var video_block2=document.getElementsByClassName("ThriiveWorldDiv_3");
        var j=3;
        for(i=0;i<video_block2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                video_block2[i].style.display="none";
            }
            j=j+3;
        }
		carousel(0, 1);
	});
}

var videoindex=0;
function callcarousel(n) {
	videoindex+=n;
	carousel(videoindex, n);
}

function carousel(n, j) {
	
	var i;
	var x = document.getElementsByClassName("thriiveworld");
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


function addtomydashboard(content){
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                user.providerData.forEach(function (profile) {
                    
                    
                    //Check if User Already Exist
                    var ref = firebase.database().ref();
                    var userref=ref.child("users");

                    userref.orderByChild("id").equalTo(profile.uid).once('value', function(snapshot){
                        var exists = (snapshot.val() !==null);
                        if (exists) {
                            //DISPLAY OTHER DETAILS
                            snapshot.forEach(function (child) {
                                if (child.val().email==profile.email) {
                                    //signin_user_name_Object.innerHTML = child.val().name;
                                    var videoId = getUrlVars()['id'];
                                    var vidref=firebase.database().ref("thriiveworld/media/video");
                                    vidref.child(videoId).on('value', function (videoshot) {
                                        var videocontent=videoshot.val();
                                        var userreference=userref.child(child.key);
                                          userreference.child(content).push(videocontent);
                                    });
                                }
                            });
                        }
                    });
                });
            } else {
                document.getElementById('downloadicon').style.display="none";
            }
        });
}