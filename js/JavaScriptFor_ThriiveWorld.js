//ON PAGE LOAD FUNCTION
window.onresize=displayfunctions;

//FUNCTION TO DISPLAY BOTH EVENTS AND VIDEOS ON PAGE LOAD
function displayfunctions(){
	displayVideos();
	displayEvents();
}

//FUNCTION TO DISPLAY VIDEOS BASED ON SCREEN WIDTH

function displayVideos(){
		var paras = document.getElementsByClassName('thriiveworld');
		while(paras[0]) {
			paras[0].parentNode.removeChild(paras[0]);
		}
		  displayVideos_desktop();
}


//FUNCTION TO DISPLAY VIDEOS FOR DESKTOP
function displayVideos_desktop() {
	var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
		snapshot.forEach(function (child) {
                this.data.push(child.val());
			    this.key.push(child.key);
		}.bind(this));
		var videosCount = data.length;
		var videosCount = Math.ceil(videosCount/4);
        var maindiv=document.getElementById("thriiveworld_desktop");
		var k=1;
        for(var j=0;j<videosCount;j++){
            var classindex=1;
            var rowdiv=document.createElement("div");
            rowdiv.className="videos_desktop animate_right";
            for(var i=0;i<2;i++){
                    var videoset=document.createElement("div");
                    videoset.className="video_set animate_right";
                for(var x=0;x<2;x++){
                    var block=document.createElement("div");
                    block.className="video_div video"+classindex;
                    var redirectlink=document.createElement("a");
                    redirectlink.id="redirect"+k;
                    var imagesdiv=document.createElement("div");
                    imagesdiv.className="slider";
                    
                    
                    var img1=document.createElement("img");
                    img1.className="BG_slide";
                    img1.id="img1_"+k;
                    img1.src="images/videoImages/06.jpg";

                    var img2=document.createElement("img");
                    img2.className="slide1";
                    img2.id="img2_"+k;
                    img2.src="images/videoImages/10.jpg";

                    var img3=document.createElement("img");
                    img3.className="slide2";
                    img3.id="img3_"+k;
                    img3.src="images/videoImages/11.jpg";

                    var img4=document.createElement("img");
                    img4.className="slide3";
                    img4.id="img4_"+k;
                    img4.src="images/videoImages/16.jpg";


                    var overlaydiv=document.createElement("div");
                    overlaydiv.className="PlayButton";

                    var titlediv=document.createElement("div");
                    titlediv.className="infoText";

                    var speaker=document.createElement("span");
                    speaker.id="speaker"+k;
                    speaker.className="BeforeText";

                    var Desc=document.createElement("span");
                    Desc.id="videodesc"+k;
                    Desc.className="AfterText";


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

                    k=k+1;
                    classindex=classindex+1;
                }
                    
               rowdiv.appendChild(videoset);
            }    
            maindiv.appendChild(rowdiv);
        }
        // console.log(data);
            
        var j=0;
		data.map(function (val, j) {
				var videotitle = val.title;
				var videospeaker = val.speaker;
				var videodescription = val.description;
//				document.getElementById("title" + (j + 1)).innerText = videotitle.substring(0,30);
				document.getElementById("speaker" + (j + 1)).innerText = videospeaker;
				document.getElementById("videodesc" + (j + 1)).innerText = videodescription.substring(0,100)+"...";
		});
        
        var j=0;
        key.map(function (val, j) {
				document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_audio_videos.html?id="+val);
		});
        var video_block1=document.getElementsByClassName("vide_Div");
        var j=1;
        for(i=0;i<video_block1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                video_block1[i].style.display="none";
            }
            j=j+1;
        }
        if(window.innerWidth>736){
		  carousel('videos_desktop',0, 1);
        }else{
		  carousel('video_set',0, 1);
        }
	});
}


// FUNCTION TO DISPLAY VIDEOS MOBILE SECTION
function displayVideos_mobile() {
	var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
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