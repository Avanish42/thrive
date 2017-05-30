//FUNCTION TO SHOW FULL THERAPIES LIST WITH THEIR CATEGORIES
function showTherapies(){
    document.getElementById("modalities_desktop").innerHTML="";
    document.getElementById("practitioner_desktop").innerHTML="";
    document.getElementById("events_desktop").innerHTML="";
    document.getElementById("media_desktop").innerHTML="";

    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities");
    modalityref.on('value', function (snapshot) {
        var section = document.getElementById('modalities_desktop');
            var k = 1;
        this.data = [];
        this.key = [];
        this.category = [];
        snapshot.forEach(function (child) {
        var count=0;
            child.forEach(function(modality){
                this.data.push(modality.val());
                this.key.push(modality.key);
                this.category.push(child.key);
                count=count+1;
            }.bind(this));
            var j = 0;
            var categorydiv = document.createElement("div");
            categorydiv.id=child.key;
            var categoryname=document.createElement("h1");
            categoryname.innerHTML=child.key;
            categoryname.className="categoryName";
            categoryname.style="font-size:3vw;font-weight:600;margin-left:10%";
            categorydiv.appendChild(categoryname);
            for (j = 1; j <= count; j++) {
                var i=1;
                var therapy = document.createElement("div");
                therapy.className="therapy" + i;
                therapy.id = "therapy" + k;
                var link = document.createElement("a");
                link.id = "link" + k;
                var img = document.createElement("img");
                img.id = "img" + k;
                img.style="width:90%";
                var title=document.createElement("h3");
                title.className="therapy_program_Name";
                title.id="title"+k;

                link.appendChild(img);
                therapy.appendChild(link);
                therapy.appendChild(title);
                categorydiv.appendChild(therapy);
                if(i==5){
                    i=1;
                }
                else{
                    i=i+1;
                }
                k=k+1;
            }
            var j = 0;
            section.appendChild(categorydiv);
               
        });
                data.map(function (val, j) {
                    var name = val.name;
                    var img = val.iconurl;
                    document.getElementById('img'+(j+1)+'').setAttribute("src",img);
                    document.getElementById('title'+(j+1)+'').innerHTML=name;

                });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','therapy_subPage.html?id='+val);
        			
                });
            category.map(function(val,j){
                var elem=document.getElementById("link"+(j+1)+"").href;
                document.getElementById("link"+(j+1)+"").setAttribute('href',elem+'&category='+val);
            })
    });
}


//FUNCTION TO DISPLAY ALL THE WSP'S
function showPractitioners(){
    document.getElementById("modalities_desktop").innerHTML="";
    document.getElementById("practitioner_desktop").innerHTML="";
    document.getElementById("events_desktop").innerHTML="";
    document.getElementById("media_desktop").innerHTML="";

    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("practitioner");
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var gridsection = document.getElementById('practitioner_desktop');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        var i=1;
        var length=data.length;
        length=length/3;
        for (j = 1; j < length+1; j++) {
            var rowdiv=document.createElement("div");
            rowdiv.className="div_displayTable";
            rowdiv.style="padding: 0% 0% 3% 3%;";
            for(var k=1;k<=3;k++){
                var therapy = document.createElement("div");
                therapy.className = "practitioner_image_div" + k;
                var icondiv=document.createElement("div");
                var link = document.createElement("a");
                link.id = "link" + i;
                var img = document.createElement("img");
                img.id = "img" + i;
                img.style="width:100%";
                var textdiv=document.createElement("div");
                var title=document.createElement("h3");
                title.className="practitioner_Name";
                title.id="title"+i;
                var desc=document.createElement("h4");
                desc.className="practitioner_description";
                desc.id="desc"+i;
                textdiv.appendChild(title);
                textdiv.appendChild(desc);
                link.appendChild(img);
                icondiv.appendChild(link);
                therapy.appendChild(icondiv);
                therapy.appendChild(textdiv);
                rowdiv.appendChild(therapy);
                i++;
            }
                gridsection.appendChild(rowdiv);
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
        var practitioners_set2=document.getElementsByClassName("practitioner_image_div2");
        var j=2;
        for(i=0;i<practitioners_set2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set2[i].style.display="none";
            }
            j=j+3;
        }
        var practitioners_set1=document.getElementsByClassName("practitioner_image_div3");
        var j=3;
        for(i=0;i<practitioners_set1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set1[i].style.display="none";
            }
            j=j+3;
        }

    });
}

function showEvents(){
    document.getElementById("modalities_desktop").innerHTML="";
    document.getElementById("practitioner_desktop").innerHTML="";
    document.getElementById("events_desktop").innerHTML="";
    document.getElementById("media_desktop").innerHTML="";
    
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var dates = eventsRef.orderByChild('fromdate').on('value', function (snapshot) { //THIS IS MY REFERENCE TO DATABASE
        this.data = [];
        this.key = [];
        var date = new Date();
        snapshot.forEach(function (child) { //THIS WILL LOOK INTO EACH AND EVERY EVENT IN THE DATABASE
            if ((+new Date(child.val().fromdate) >= +date)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this)); //BINDING THE ARRAY 
        var eventCount = data.length;
        var keycount = key.length;
        var length=Math.ceil(eventCount/3);
        var i=1;
        var maindiv = document.getElementById("events_desktop");
        for (var j = 0; j <= length; j++) {
                var rowdiv= document.createElement("div");
                rowdiv.className="div_displayTable";   
                for(var k=1;k<=3;k++){
                    var EventBlock = document.createElement("div");
                    EventBlock.className="Event_Block-"+k;
                    var link = document.createElement("a");
                    link.id = "link" + i;
                    var img = document.createElement("img");
                    img.src = "images/whats_happning/Event-"+k+".png";
                    img.style="width:100%";
                    var eventday=document.createElement("div");
                    var eventmonth=document.createElement("div");
                    eventday.className="event_Image_day";
                    eventday.id="eventday"+i;
                    eventmonth.id="eventmonth"+i;
                    eventmonth.className="event_Image_month";
                    var title=document.createElement("h3");
                    var desc=document.createElement("h3");
                    title.className="Event_Caption";
                    title.id="title"+i;
                    desc.className="Event_SubCaption";
                    desc.style="color:#333333;";
                    desc.id="desc"+i;
                    var knowmore=document.createElement("div");
                    knowmore.className="knowMore_Event_G";
                    var knowlink=document.createElement("a");
                    knowlink.id="know"+i;
                    var knowimg=document.createElement("img");
                    knowimg.src="images/whats_happning/knowMore_Whats_Happening.png";
                    knowimg.style="width:100%";

                    knowlink.appendChild(knowimg);
                    knowmore.appendChild(knowlink);
                    link.appendChild(img);
                    link.appendChild(eventday);
                    link.appendChild(eventmonth);
                    EventBlock.appendChild(link);
                    EventBlock.appendChild(title);
                    EventBlock.appendChild(desc);
                    EventBlock.appendChild(knowmore);
                    rowdiv.appendChild(EventBlock);
                    i=i+1;
                    }
                maindiv.appendChild(rowdiv);
            } 
             var j=0;
        data.map(function (val, j) {
            var eventdate = val.fromdate;
                var newdate = new Date(eventdate);
                var eventmonth = newdate.getMonth();
                var eventday = newdate.getDate();
                eventmonth = months[eventmonth];
            var title=val.title;
            var desc=val.speaker;
            document.getElementById('eventday'+(j+1)+'').innerHTML=eventday;
            document.getElementById('eventmonth'+(j+1)+'').innerHTML=eventmonth;
            document.getElementById('title'+(j+1)+'').innerHTML=title.substring(0,30);
            document.getElementById('desc'+(j+1)+'').innerHTML=desc;

        });
        key.map(function(val,j){
            var imgid=document.getElementById("link"+(j+1)+"");
            var knowid=document.getElementById("know"+(j+1)+"");
            imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
            knowid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
        });
         var events_set1=document.getElementsByClassName("Event_Block-1");
        var j=1;
        for(i=0;i<events_set1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                events_set1[i].style.display="none";
            }
            j=j+3;
        }
        var events_set2=document.getElementsByClassName("Event_Block-2");
        var j=2;
        for(i=0;i<events_set2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                events_set2[i].style.display="none";
            }
            j=j+3;
        }
        var events_set3=document.getElementsByClassName("Event_Block-3");
        var j=3;
        for(i=0;i<events_set3.length;i++){
            if(document.getElementById("title"+j).innerText==""){
                events_set3[i].style.display="none";
            }
            j=j+3;
        }
        });
}

function showMedia(){
    document.getElementById("media_desktop").style.display="block";
    document.getElementById("modalities_desktop").innerHTML="";
    document.getElementById("practitioner_desktop").innerHTML="";
    document.getElementById("events_desktop").innerHTML="";
    document.getElementById("thriiveworld_desktop").innerHTML="";
    
    var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
		snapshot.forEach(function (child) {
                this.data.push(child.val());
			    this.key.push(child.key);
		}.bind(this));
		var videosCount = data.length;
		var videosCount = Math.ceil(videosCount/4);
        var maindiv=document.getElementById("media_desktop");
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
        console.log(data);
            
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

function selectcategory(){
    var elem=document.getElementById("categorysearch").value;
    var keyword=document.getElementById("searchbox").value;
    displaySearchItems(elem,keyword);
}


function displaySearchItems(category,keyword){
    document.getElementById("modalities_desktop").innerHTML="";
    document.getElementById("practitioner_desktop").innerHTML="";
    document.getElementById("events_desktop").innerHTML="";
    document.getElementById("media_desktop").innerHTML="";
    var ref = firebase.database().ref();
    var categorysearch=category;
    var keyword=keyword;
    if(keyword!=""){
  
    if(categorysearch=="therapies"){
        const dbRefObject = firebase.database().ref().child('therapies');
        var modalityref = dbRefObject.child("modalities");
        modalityref.on('value', function (snapshot) {
        var section = document.getElementById('modalities_desktop');
        this.data = [];
        this.key = [];
        this.categories = [];
        snapshot.forEach(function (child) {
        var count=0;
            child.forEach(function(modality){
                var elem=modality.val().name.toLowerCase();
                var elem2=keyword.toLowerCase(); 
                if(elem==elem2){
                    this.data.push(modality.val());
                    this.key.push(modality.key);
                    this.categories.push(child.key);
                }
            });
            }.bind(this));
                var i=1;
            
            for (j = 1; j <= data.length; j++) {
                var therapy = document.createElement("div");
                therapy.className="therapy" + i;
                therapy.id = "therapy" + j;
                var link = document.createElement("a");
                link.id = "link" + j;
                var img = document.createElement("img");
                img.id = "img" + j;
                img.style="width:90%";
                var title=document.createElement("h3");
                title.className="therapy_program_Name";
                title.id="title"+j;

                link.appendChild(img);
                therapy.appendChild(link);
                therapy.appendChild(title);

                section.appendChild(therapy);
                if(i==5){
                    i=1;
                }
                else{
                    i=i+1;
                }
            }
            var j = 0;
               
                data.map(function (val, j) {
                    var name = val.name;
                    var img = val.iconurl;
                    document.getElementById('img'+(j+1)+'').setAttribute("src",img);
                    document.getElementById('title'+(j+1)+'').innerHTML=name;

                });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','therapy_subPage.html?id='+val);
        			
                });
                categories.map(function(val,j){
                var elem=document.getElementById("link"+(j+1)+"").href;
                document.getElementById("link"+(j+1)+"").setAttribute('href',elem+'&category='+val);
            });
    });
    }else if(categorysearch=="practitioners"){
        const dbRefObject = firebase.database().ref().child('therapies');
        var modalityref = dbRefObject.child("practitioner");
        modalityref.on('value', function (snapshot) {
            this.data = [];
            this.key = [];
            var gridsection = document.getElementById('practitioner_desktop');
            snapshot.forEach(function (child) {
                var elem2=keyword.toLowerCase(); 
                if((child.val().name.toLowerCase()==elem2)||(child.val().modality1.toLowerCase()==elem2)||(child.val().modality2.toLowerCase()==elem2)||(child.val().modality3.toLowerCase()==elem2)||(child.val().modality4.toLowerCase()==elem2)){
                    this.data.push(child.val());
                    this.key.push(child.key);
                }
            }.bind(this));
            var j = 0;
            var i=1;
            var length=data.length;
            length=Math.ceil(length/3);
            for (j = 1; j <= length; j++) {
                var rowdiv=document.createElement("div");
                rowdiv.className="div_displayTable";
                rowdiv.style="padding: 0% 0% 3% 3%;";
                for(var k=1;k<=3;k++){
                    var therapy = document.createElement("div");
                    therapy.className = "practitioner_image_div" + k;
                    var icondiv=document.createElement("div");
                    var link = document.createElement("a");
                    link.id = "link" + i;
                    var img = document.createElement("img");
                    img.id = "img" + i;
                    img.style="width:100%";
                    var textdiv=document.createElement("div");
                    var title=document.createElement("h3");
                    title.className="practitioner_Name";
                    title.id="title"+i;
                    var desc=document.createElement("h4");
                    desc.className="practitioner_description";
                    desc.id="desc"+i;
                    textdiv.appendChild(title);
                    textdiv.appendChild(desc);
                    link.appendChild(img);
                    icondiv.appendChild(link);
                    therapy.appendChild(icondiv);
                    therapy.appendChild(textdiv);
                    rowdiv.appendChild(therapy);
                    i++;
                }
                    gridsection.appendChild(rowdiv);
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
            var practitioners_set2=document.getElementsByClassName("practitioner_image_div2");
            var j=2;
            for(i=0;i<practitioners_set2.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    practitioners_set2[i].style.display="none";
                }
                j=j+3;
            }
            var practitioners_set1=document.getElementsByClassName("practitioner_image_div3");
            var j=3;
            for(i=0;i<practitioners_set1.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    practitioners_set1[i].style.display="none";
                }
                j=j+3;
            }

    });
          
     
    }else if(categorysearch=="ailments"){
        var dbobjectref=firebase.database().ref().child("therapies/ailments");
        var elem=keyword.toLowerCase();
        var dates = dbobjectref.on('value', function (snapshot) {
            this.ailment=[];
            snapshot.forEach(function(ailment){
               ailment.forEach(function(searchval){
                  if(searchval.val().toLowerCase()==elem){
                      this.ailment.push(ailment.key);
                  } 
               });
            }.bind(this));
            
            const dbRefObject = firebase.database().ref().child('therapies');
            var modalityref = dbRefObject.child("modalities");
            modalityref.on('value', function (snapshot) {
            var section = document.getElementById('modalities_desktop');
            this.data = [];
            this.key = [];
            this.categories = [];
            snapshot.forEach(function (child) {
            var count=0;
                child.forEach(function(modality){
                    var elem=modality.val().name.toLowerCase(); 
                    for(i=0;i<ailment.length;i++){
                        var elem2=ailment[i].toLowerCase();
                        if(elem==elem2){
                            this.data.push(modality.val());
                            this.key.push(modality.key);
                            this.categories.push(child.key);
                        }
                    }
                });
                }.bind(this));
                var i=1;

                for (j = 1; j <= data.length; j++) {
                    var therapy = document.createElement("div");
                    therapy.className="therapy" + i;
                    therapy.id = "therapy" + j;
                    var link = document.createElement("a");
                    link.id = "link" + j;
                    var img = document.createElement("img");
                    img.id = "img" + j;
                    img.style="width:90%";
                    var title=document.createElement("h3");
                    title.className="therapy_program_Name";
                    title.id="title"+j;

                    link.appendChild(img);
                    therapy.appendChild(link);
                    therapy.appendChild(title);

                    section.appendChild(therapy);
                    if(i==3){
                        i=1;
                    }
                    else{
                        i=i+1;
                    }
                }
                var j = 0;

                data.map(function (val, j) {
                    var name = val.name;
                    var img = val.iconurl;
                    document.getElementById('img'+(j+1)+'').setAttribute("src",img);
                    document.getElementById('title'+(j+1)+'').innerHTML=name;

                });
                key.map(function(val,j){
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','therapy_subPage.html?id='+val);

                });
                categories.map(function(val,j){
                    var elem=document.getElementById("link"+(j+1)+"").href;
                    document.getElementById("link"+(j+1)+"").setAttribute('href',elem+'&category='+val);
                });
            });                                         
        });
        
    }else if(categorysearch=="workshops"){
        var today = new Date();
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        var month = today.getMonth();
        var currentMonth = months[month];
        var year = today.getFullYear();
        const dbRefObject = firebase.database().ref().child('whatshappening');
        var eventsRef = dbRefObject.child("events");
        var dates = eventsRef.orderByChild('fromdate').on('value', function (snapshot) { //THIS IS MY REFERENCE TO DATABASE
            this.data = [];
            this.key = [];
            var date = new Date();
            snapshot.forEach(function (child) { //THIS WILL LOOK INTO EACH AND EVERY EVENT IN THE DATABASE
                var date1=new Date(child.val().fromdate).getTime();
                var date2=date.getTime();
                if(date1 >= date2){
                         var elem2=keyword.toLowerCase();
                        if((child.val().title.toLowerCase()==elem2)||(child.val().speaker.toLowerCase()==elem2)){
                            this.data.push(child.val());
                            this.key.push(child.key);
                        }
                }
            }.bind(this)); //BINDING THE ARRAY 
            var eventCount = data.length;
            console.log(data);
            var keycount = key.length;
            var length=Math.ceil(eventCount/3);
            var i=1;
            var maindiv = document.getElementById("events_desktop");
            for (var j = 0; j <= length; j++) {
                    var rowdiv= document.createElement("div");
                    rowdiv.className="div_displayTable";   
                    for(var k=1;k<=3;k++){
                        var EventBlock = document.createElement("div");
                        EventBlock.className="Event_Block-"+k;
                        var link = document.createElement("a");
                        link.id = "link" + i;
                        var img = document.createElement("img");
                        img.src = "images/whats_happning/Event-"+k+".png";
                        img.style="width:100%";
                        var eventday=document.createElement("div");
                        var eventmonth=document.createElement("div");
                        eventday.className="event_Image_day";
                        eventday.id="eventday"+i;
                        eventmonth.id="eventmonth"+i;
                        eventmonth.className="event_Image_month";
                        var title=document.createElement("h3");
                        var desc=document.createElement("h3");
                        title.className="Event_Caption";
                        title.id="title"+i;
                        desc.className="Event_SubCaption";
                        desc.style="color:#333333;";
                        desc.id="desc"+i;
                        var knowmore=document.createElement("div");
                        knowmore.className="knowMore_Event_G";
                        var knowlink=document.createElement("a");
                        knowlink.id="know"+i;
                        var knowimg=document.createElement("img");
                        knowimg.src="images/whats_happning/knowMore_Whats_Happening.png";
                        knowimg.style="width:100%";

                        knowlink.appendChild(knowimg);
                        knowmore.appendChild(knowlink);
                        link.appendChild(img);
                        link.appendChild(eventday);
                        link.appendChild(eventmonth);
                        EventBlock.appendChild(link);
                        EventBlock.appendChild(title);
                        EventBlock.appendChild(desc);
                        EventBlock.appendChild(knowmore);
                        rowdiv.appendChild(EventBlock);
                        i=i+1;
                        }
                    maindiv.appendChild(rowdiv);
                } 
                 var j=0;
            data.map(function (val, j) {
                var eventdate = val.fromdate;
                    var newdate = new Date(eventdate);
                    var eventmonth = newdate.getMonth();
                    var eventday = newdate.getDate();
                    eventmonth = months[eventmonth];
                var title=val.title;
                var desc=val.speaker;
                document.getElementById('eventday'+(j+1)+'').innerHTML=eventday;
                document.getElementById('eventmonth'+(j+1)+'').innerHTML=eventmonth;
                document.getElementById('title'+(j+1)+'').innerHTML=title.substring(0,30);
                document.getElementById('desc'+(j+1)+'').innerHTML=desc;

            });
            key.map(function(val,j){
                var imgid=document.getElementById("link"+(j+1)+"");
                var knowid=document.getElementById("know"+(j+1)+"");
                imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
                knowid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
            });
             var events_set1=document.getElementsByClassName("Event_Block-1");
            var j=1;
            for(i=0;i<events_set1.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    events_set1[i].style.display="none";
                }
                j=j+3;
            }
            var events_set2=document.getElementsByClassName("Event_Block-2");
            var j=2;
            for(i=0;i<events_set2.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    events_set2[i].style.display="none";
                }
                j=j+3;
            }
            var events_set3=document.getElementsByClassName("Event_Block-3");
            var j=3;
            for(i=0;i<events_set3.length;i++){
                if(document.getElementById("title"+j).innerText==""){
                    events_set3[i].style.display="none";
                }
                j=j+3;
            }
            });
    }else if(categorysearch=="city"){
    if(keyword!=""){
//        var ref = firebase.database().ref();
//            const dbRefObjectthreapy = firebase.database().ref().child('therapies');
//            var modalityref = dbRefObjectthreapy.child("modalities");
//            modalityref.on('value', function (snapshot) {
//            var section = document.getElementById('modalities_desktop');
//            this.data = [];
//            this.key = [];
//            this.categories = [];
//            snapshot.forEach(function (child) {
//            var count=0;
//                child.forEach(function(modality){
//                    modality.forEach(function(search){
//                        var elem=search.val().toLowerCase();
//                        var elem2=keyword.toLowerCase(); 
//                       if(elem==elem2){
//                        this.data.push(modality.val());
//                        this.key.push(modality.key);
//                        this.categories.push(child.key);
//                       }
//                    });
//
//                });
//                }.bind(this));
//                    var i=1;
//                if(data.length>0){
//                    var space=document.createElement("br");
//                    section.appendChild(space);
//                    var categoryname=document.createElement("h1");
//                    categoryname.innerHTML="modalities";
//                    categoryname.className="categoryName";
//                    categoryname.style="font-size:3vw;font-weight:600;margin-left:10%";
//                    section.appendChild(categoryname);
//                    for (j = 1; j <= data.length; j++) {
//                        var therapy = document.createElement("div");
//                        therapy.className="therapy" + i;
//                        therapy.id = "therapy" + j;
//                        var link = document.createElement("a");
//                        link.id = "therapylink" + j;
//                        var img = document.createElement("img");
//                        img.id = "therapyimg" + j;
//                        img.style="width:90%";
//                        var title=document.createElement("h3");
//                        title.className="therapy_program_Name";
//                        title.id="therapytitle"+j;
//
//                        link.appendChild(img);
//                        therapy.appendChild(link);
//                        therapy.appendChild(title);
//
//                        section.appendChild(therapy);
//                        if(i==5){
//                            i=1;
//                        }
//                        else{
//                            i=i+1;
//                        }
//                    }
//                }
//                var j = 0;
//
//                    data.map(function (val, j) {
//                        var name = val.name;
//                        var img = val.img;
//                        document.getElementById('therapyimg'+(j+1)+'').setAttribute("src",img);
//                        document.getElementById('therapytitle'+(j+1)+'').innerHTML=name;
//
//                    });
//                    key.map(function(val,j){
//
//                        var id=document.getElementById("therapylink"+(j+1)+"");
//                        id.setAttribute('href','therapy_subPage.html?id='+val);
//
//                    });
//                    categories.map(function(val,j){
//                    var therapysubpagelink=document.getElementById("therapylink"+(j+1)+"").href;
//                    document.getElementById("therapylink"+(j+1)+"").setAttribute('href',therapysubpagelink+'&category='+val);
//                });
//        });
        const dbRefObjectpractitioner = firebase.database().ref().child('therapies');
            var modalityref = dbRefObjectpractitioner.child("practitioner");
            modalityref.on('value', function (snapshot) {
                this.data = [];
                this.key = [];
                var gridsection = document.getElementById('practitioner_desktop');
                snapshot.forEach(function (child) {
                    if(keyword!=""){
                            var elem=child.val().location.toLowerCase();
                            var elem2=keyword.toLowerCase(); 
                        if(elem===elem2){
                            this.data.push(child.val());
                            this.key.push(child.key);
                        }
                    }
                }.bind(this));
                var j = 0;
                var i=1;
                var length=data.length;
                length=Math.ceil(length/3);
                if(data.length>0){
                    var space=document.createElement("br");
                    gridsection.appendChild(space);
                    var categoryname=document.createElement("h1");
                    categoryname.innerHTML="practitioners   ";
                    categoryname.className="categoryName";
                    categoryname.style="font-size:3vw;font-weight:600;margin-left:10%";
                    gridsection.appendChild(categoryname);
                    for (j = 1; j <= length; j++) {
                        var rowdiv=document.createElement("div");
                        rowdiv.className="div_displayTable";
                        rowdiv.style="padding: 0% 0% 3% 3%;";
                        for(var k=1;k<=3;k++){
                            var therapy = document.createElement("div");
                            therapy.className = "practitioner_image_div" + k;
                            var icondiv=document.createElement("div");
                            var link = document.createElement("a");
                            link.id = "practitionerlink" + i;
                            var img = document.createElement("img");
                            img.id = "practitionerimg" + i;
                            img.style="width:100%";
                            var textdiv=document.createElement("div");
                            var title=document.createElement("h3");
                            title.className="practitioner_Name";
                            title.id="practitionertitle"+i;
                            var desc=document.createElement("h4");
                            desc.className="practitioner_description";
                            desc.id="practitionerdesc"+i;
                            textdiv.appendChild(title);
                            textdiv.appendChild(desc);
                            link.appendChild(img);
                            icondiv.appendChild(link);
                            therapy.appendChild(icondiv);
                            therapy.appendChild(textdiv);
                            rowdiv.appendChild(therapy);
                            i++;
                        }
                            gridsection.appendChild(rowdiv);
                    }
                }
                data.map(function (val, j) {
                    var name = val.name;
                    var img = val.img;
                    document.getElementById('practitionerimg'+(j+1)+'').setAttribute("src",val.img);
                    document.getElementById('practitionertitle'+(j+1)+'').innerHTML=val.name;
                    document.getElementById('practitionerdesc'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

                });
                        key.map(function(val,j){

                            var id=document.getElementById("practitionerlink"+(j+1)+"");
                            id.setAttribute('href','practitioners_subpage.html?id='+val+'');

                        });
                var practitioners_set2=document.getElementsByClassName("practitioner_image_div2");
                var j=2;
                for(i=0;i<practitioners_set2.length;i++){
                    if(document.getElementById("practitionertitle"+j).innerHTML==""){
                        practitioners_set2[i].style.display="none";
                    }
                    j=j+3;
                }
                var practitioners_set1=document.getElementsByClassName("practitioner_image_div3");
                var j=3;
                for(i=0;i<practitioners_set1.length;i++){
                    if(document.getElementById("practitionertitle"+j).innerHTML==""){
                        practitioners_set1[i].style.display="none";
                    }
                    j=j+3;
                }

        });
            var today = new Date();
            var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            var month = today.getMonth();
            var currentMonth = months[month];
            var year = today.getFullYear();
            const dbRefObjectevents = firebase.database().ref().child('whatshappening');
            var eventsRef = dbRefObjectevents.child("events");
            var dates = eventsRef.orderByChild('fromdate').on('value', function (snapshot) { //THIS IS MY REFERENCE TO DATABASE
                this.data = [];
                this.key = [];
                var date = new Date();
                snapshot.forEach(function (child) { //THIS WILL LOOK INTO EACH AND EVERY EVENT IN THE DATABASE
                    var date1=new Date(child.val().fromdate).getTime();
                var date2=date.getTime();
                if(date1 >= date2){
                        if(keyword!=""){
                            var elem=child.val().venue;
                            elem=elem.toLowerCase();
                            var elem2=keyword.toLowerCase();
                            
                            if(elem===elem2){
                                    this.data.push(child.val());
                                    this.key.push(child.key);
                            }
                        }    
                }
            }.bind(this)); //BINDING THE ARRAY  
                var eventCount = data.length;
                var keycount = key.length;
                var length=Math.ceil(eventCount/3);
                var i=1;
                if(data.length>0){
                var maindiv = document.getElementById("events_desktop");
                     var space=document.createElement("br");
                    maindiv.appendChild(space);
                    var categoryname=document.createElement("h1");
                    categoryname.innerHTML="events";
                    categoryname.className="categoryName";
                    categoryname.style="font-size:3vw;font-weight:600;margin-left:10%";
                    maindiv.appendChild(categoryname);
                for (var j = 0; j <= length; j++) {
                        var rowdiv= document.createElement("div");
                        rowdiv.className="div_displayTable";   
                        for(var k=1;k<=3;k++){
                            var EventBlock = document.createElement("div");
                            EventBlock.className="Event_Block-"+k;
                            var link = document.createElement("a");
                            link.id = "eventlink" + i;
                            var img = document.createElement("img");
                            img.src = "images/whats_happning/Event-"+k+".png";
                            img.style="width:100%";
                            var eventday=document.createElement("div");
                            var eventmonth=document.createElement("div");
                            eventday.className="event_Image_day";
                            eventday.id="eventday"+i;
                            eventmonth.id="eventmonth"+i;
                            eventmonth.className="event_Image_month";
                            var title=document.createElement("h3");
                            var desc=document.createElement("h3");
                            title.className="Event_Caption";
                            title.id="eventtitle"+i;
                            desc.className="Event_SubCaption";
                            desc.style="color:#333333;";
                            desc.id="eventdesc"+i;
                            var knowmore=document.createElement("div");
                            knowmore.className="knowMore_Event_G";
                            var knowlink=document.createElement("a");
                            knowlink.id="eventknow"+i;
                            var knowimg=document.createElement("img");
                            knowimg.src="images/whats_happning/knowMore_Whats_Happening.png";
                            knowimg.style="width:100%";

                            knowlink.appendChild(knowimg);
                            knowmore.appendChild(knowlink);
                            link.appendChild(img);
                            link.appendChild(eventday);
                            link.appendChild(eventmonth);
                            EventBlock.appendChild(link);
                            EventBlock.appendChild(title);
                            EventBlock.appendChild(desc);
                            EventBlock.appendChild(knowmore);
                            rowdiv.appendChild(EventBlock);
                            i=i+1;
                            }
                        maindiv.appendChild(rowdiv);
                    }
                }
                     var j=0;
                data.map(function (val, j) {
                    var eventdate = val.fromdate;
                        var newdate = new Date(eventdate);
                        var eventmonth = newdate.getMonth();
                        var eventday = newdate.getDate();
                        eventmonth = months[eventmonth];
                    var title=val.title;
                    var desc=val.speaker;
                    document.getElementById('eventday'+(j+1)+'').innerHTML=eventday;
                    document.getElementById('eventmonth'+(j+1)+'').innerHTML=eventmonth;
                    document.getElementById('eventtitle'+(j+1)+'').innerHTML=title.substring(0,30);
                    document.getElementById('eventdesc'+(j+1)+'').innerHTML=desc;

                });
                key.map(function(val,j){
                    var imgid=document.getElementById("eventlink"+(j+1)+"");
                    var knowid=document.getElementById("eventknow"+(j+1)+"");
                    imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
                    knowid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
                });
                 var events_set1=document.getElementsByClassName("Event_Block-1");
                var j=1;
                for(i=0;i<events_set1.length;i++){
                    if(document.getElementById("eventtitle"+j).innerHTML==""){
                        events_set1[i].style.display="none";
                    }
                    j=j+3;
                }
                var events_set2=document.getElementsByClassName("Event_Block-2");
                var j=2;
                for(i=0;i<events_set2.length;i++){
                    if(document.getElementById("eventtitle"+j).innerHTML==""){
                        events_set2[i].style.display="none";
                    }
                    j=j+3;
                }
                var events_set3=document.getElementsByClassName("Event_Block-3");
                var j=3;
                for(i=0;i<events_set3.length;i++){
                    if(document.getElementById("eventtitle"+j).innerText==""){
                        events_set3[i].style.display="none";
                    }
                    j=j+3;
                }
                });
//            var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
//            this.data = [];
//            this.key = [];
//            snapshot.forEach(function (child) {
//                if(keyword!=""){
//                child.forEach(function(media){
//                    var elem=media.val().toLowerCase();
//                    var elem2=keyword.toLowerCase(); 
//                    if(elem===elem2){
//                        this.data.push(child.val());
//                        this.key.push(child.key);
//                   }
//                });
//            }
//            }.bind(this));
//            if(data.length>0){
//                   
//                var videosCount = data.length;
//                var videosCount = videosCount/3;
//
//                var sectiondiv=document.getElementById("media_desktop");
//                var space=document.createElement("br");
//                sectiondiv.appendChild(space);
//                 var categoryname=document.createElement("h1");
//                    categoryname.innerHTML="Media";
//                    categoryname.className="categoryName";
//                    categoryname.style="font-size:3vw;font-weight:600;margin-left:10%";
//                    sectiondiv.appendChild(categoryname);
//                var displaydiv=document.createElement("div");
//                displaydiv.className="div_displayTable";
//
//                var prevbutton=document.createElement("div");
//                prevbutton.className="TW_PreviousButton";
//                prevanchor=document.createElement("a");
//                prevanchor.style="cursor:pointer";
//
//                var previmg=document.createElement("img");
//                previmg.id="twPrevButtonImg";
//                previmg.src="images/Next-1B.png";
//                previmg.style="width:100%";
//                previmg.onclick="callcarousel(-1);";
//
//                prevanchor.appendChild(previmg);
//                prevbutton.appendChild(prevanchor);
//
//
//                var maindiv=document.createElement("div");
//                maindiv.id="thriiveworld_desktop";
//
//                var nextbutton=document.createElement("div");
//                nextbutton.className="TW_NextButton";
//                nextanchor=document.createElement("a");
//                nextanchor.style="cursor:pointer";
//
//                var nextimg=document.createElement("img");
//                nextimg.id="twNextButtonImg";
//                nextimg.src="images/Next-1A.png";
//                nextimg.style="width:100%";
//                nextimg.onclick="callcarousel(-1);";
//
//                nextanchor.appendChild(nextimg);
//                nextbutton.appendChild(nextanchor);
//
//                displaydiv.appendChild(prevbutton);
//                displaydiv.appendChild(maindiv);
//                displaydiv.appendChild(nextbutton);
//                sectiondiv.appendChild(displaydiv);
//                for(var j=0;j<videosCount;j++){
//                    var rowdiv=document.createElement("div");
//                    rowdiv.className="thriiveworld animate_right";
//                    for(var i=1;i<=3;i++){
//                        var redirectlink=document.createElement("a");
//                        redirectlink.id="redirect"+i;
//                        var block=document.createElement("div");
//                        block.className="ThriiveWorldDiv_"+i;
//
//                        var videoblock=document.createElement("div");
//                        videoblock.className="videoBlog_"+i;
//
//                        var iframe=document.createElement("iframe");
//                        iframe.id="video"+i;
//                        var img=document.createElement("img");
//                        img.src="images/TW_Eye.png";
//                        img.className="TW_Eye";
//
//                        videoblock.appendChild(iframe);
//                        videoblock.appendChild(img);
//
//                        var addvideolink=document.createElement("a");
//                        addvideolink.id="addvideo"+i;
//
//                        var downloadcloud=document.createElement("img");
//                        downloadcloud.src="images/Download_Cloud.png";
//                        downloadcloud.className="Download_Cloud";
//                        var tooltip=document.createElement("p");
//                        tooltip.className="popupMsg";
//                        tooltip.innerHTML="Add to your Dashboard";
//
//                        var title=document.createElement("h3");
//                        var speaker=document.createElement("h3");
//
//                        title.className="TW_Caption";
//                        title.id="title"+i;
//
//                        speaker.className="TW_SubCaption";
//                        speaker.id="speaker"+i;
//
//                        addvideolink.appendChild(downloadcloud);
//
//                        redirectlink.appendChild(videoblock);
//
//                        block.appendChild(redirectlink);
//                        block.appendChild(addvideolink);
//                        block.appendChild(tooltip);
//                        block.appendChild(title);
//                        block.appendChild(speaker);
//                        rowdiv.appendChild(block);
//                    }
//                    maindiv.appendChild(rowdiv);
//                }
//            }
//
//            var j=0;
//            data.map(function (val, j) {
//                    var videotitle = val.title;
//                    var videospeaker = val.speaker;
//                    var src = val.url;
//                    document.getElementById("title" + (j + 1)).innerText = videotitle;
//                    document.getElementById("video" + (j + 1)).setAttribute('src', src);
//                    document.getElementById("speaker" + (j + 1)).innerText = videospeaker;
//            });
//
//            var j=0;
//            key.map(function (val, j) {
//                    document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_gallery_video.html?id="+val);
//    //				document.getElementById("addvideo" + (j + 1) + "").setAttribute('onclick', "addtomydashboard("+val+")");
//            });
//                var events_set2=document.getElementsByClassName("ThriiveWorldDiv_2");
//                var j=2;
//                for(i=0;i<events_set2.length;i++){
//                    if(document.getElementById("title"+j).innerHTML==""){
//                        events_set2[i].style.display="none";
//                    }
//                    j=j+3;
//                }
//                var events_set3=document.getElementsByClassName("ThriiveWorldDiv_3");
//                var j=3;
//                for(i=0;i<events_set3.length;i++){
//                    if(document.getElementById("title"+j).innerText==""){
//                        events_set3[i].style.display="none";
//                    }
//                    j=j+3;
//                }
//            carousel(0, 1);
//        });
    
    }       
    }else if(categorysearch=="media"){
        var videos = firebase.database().ref("thriiveworld/media/video").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
		snapshot.forEach(function (child) {
            child.forEach(function(media){
                var elem=media.val().toLowerCase();
                var elem2=keyword.toLowerCase(); 
                if(elem===elem2 && elem!=""){
                    this.data.push(child.val());
                    this.key.push(child.key);
               }
            });
		}.bind(this));
            if(data.length>0){  
                var videosCount = data.length;
                var videosCount = videosCount/3;

                var sectiondiv=document.getElementById("thriiveworld_desktop");
                var displaydiv=document.createElement("div");
                displaydiv.className="div_displayTable";

                var prevbutton=document.createElement("div");
                prevbutton.className="TW_PreviousButton";
                prevanchor=document.createElement("a");
                prevanchor.style="cursor:pointer";

                var previmg=document.createElement("img");
                previmg.id="twPrevButtonImg";
                previmg.src="images/Next-1B.png";
                previmg.style="width:100%";
                previmg.onclick="callcarousel(-1);";

                prevanchor.appendChild(previmg);
                prevbutton.appendChild(prevanchor);


                var maindiv=document.createElement("div");
                maindiv.id="thriiveworld_desktop";

                var nextbutton=document.createElement("div");
                nextbutton.className="TW_NextButton";
                nextanchor=document.createElement("a");
                nextanchor.style="cursor:pointer";

                var nextimg=document.createElement("img");
                nextimg.id="twNextButtonImg";
                nextimg.src="images/Next-1A.png";
                nextimg.style="width:100%";
                nextimg.onclick="callcarousel(-1);";

                nextanchor.appendChild(nextimg);
                nextbutton.appendChild(nextanchor);

                displaydiv.appendChild(prevbutton);
                displaydiv.appendChild(maindiv);
                displaydiv.appendChild(nextbutton);
                sectiondiv.appendChild(displaydiv);
                for(var j=0;j<videosCount;j++){
                    var rowdiv=document.createElement("div");
                    rowdiv.className="thriiveworld animate_right";
                    for(var i=1;i<=3;i++){
                        var redirectlink=document.createElement("a");
                        redirectlink.id="redirect"+i;
                        var block=document.createElement("div");
                        block.className="ThriiveWorldDiv_"+i;

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
                        rowdiv.appendChild(block);
                    }
                    maindiv.appendChild(rowdiv);
                }
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
				document.getElementById("redirect" + (j + 1)).setAttribute("href","thriive_world_gallery_video.html?id="+val);
//				document.getElementById("addvideo" + (j + 1) + "").setAttribute('onclick', "addtomydashboard("+val+")");
		});
            var events_set1=document.getElementsByClassName("ThriiveWorldDiv_1");
            var j=1;
            for(i=0;i<events_set1.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    events_set1[i].style.display="none";
                }
                j=j+3;
            }
            var events_set2=document.getElementsByClassName("ThriiveWorldDiv_2");
            var j=2;
            for(i=0;i<events_set2.length;i++){
                if(document.getElementById("title"+j).innerHTML==""){
                    events_set2[i].style.display="none";
                }
                j=j+3;
            }
            var events_set3=document.getElementsByClassName("ThriiveWorldDiv_3");
            var j=3;
            for(i=0;i<events_set3.length;i++){
                if(document.getElementById("title"+j).innerText==""){
                    events_set3[i].style.display="none";
                }
                j=j+3;
            }
		carousel(0, 1);
	});
    }
        
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