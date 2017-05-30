//FUNCTION TO GET THE VALUES FROM URL 
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
window.onload=function(){
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
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
        metatitle.content = snapshot.child('title').val();
        document.getElementsByTagName('head')[0].appendChild(metatitle);
        var metadesc = document.createElement('meta');
        metadesc.setAttribute('property',"og:description");
        metadesc.content = snapshot.child('overview').val().substr(0,80);
        document.getElementsByTagName('head')[0].appendChild(metadesc);
        var metaimg = document.createElement('meta');
        metaimg.setAttribute('property',"og:image");
        metaimg.content = snapshot.child('promourl').val();
        document.getElementsByTagName('head')[0].appendChild(metaimg);
	});
}

function setMetaTag(metaName, name, value) {
        var meta = '<meta '+metaName+'="'+name+'" content="'+value+'"/>';
//        document.getElementsByTagName('meta').insertAfter('title');
    console.log(meta);
}
//FUNCTION TO FETCH THE DATA FROM THE DATABASE 
function fetchdata(content) {
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
        var text=document.getElementById(content);
        if(content=="promourl"){
            text.setAttribute('src',snapshot.child(content).val())    
        }else if(content=="fee"){
            document.getElementById("enroll").setAttribute('href','payubiz.html?id='+eventid);
            document.getElementById(content).innerText=snapshot.child(content).val();
        }else{
            document.getElementById(content).innerText=snapshot.child(content).val();
        }    
	});
}

//FUNCTION TO FETCH OTHER STUFF FROM THE DATABASE 
function fetchrsvpdata(content) {
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
        var text=document.getElementById(content);
        document.getElementById(content).innerText=snapshot.child("rsvp/"+content).val();
		document.getElementById('topview').scrollIntoView({block: 'start', behavior: 'smooth'});
	});
}


//FUCNTION TO DISPLAY THE PREVIOUS EVENT FROM THE DATABASE
function prevevent(){
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var categoryref = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    this.key=[];
    categoryref.orderByChild('fromdate').on('value', function (snapshot) {
        var date = new Date();
       snapshot.forEach(function (child) {
           if(new Date(child.val().fromdate) >= date){
            this.key.push(child.key);
           }
        }.bind(this)); 
        var i=0;
        for(i=0;i<key.length;i++){
            if(key[i]==eventid){
                if(i==0){
                    window.location="whatsHappening_SubPage_1.html?id="+key[i];
                    youMayAlsoLike(key);
                }else{
                    window.location="whatsHappening_SubPage_1.html?id="+key[i-1];
                    youMayAlsoLike(key);
                }
            }
        }
    });
}


//FUNCTION TO DISPLAY NEXT EVENT FROM THE EVENTS
function nextevent(){
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var categoryref = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    
    this.key=[];
    categoryref.orderByChild('fromdate').on('value', function (snapshot) {
        var date = new Date();
       snapshot.forEach(function (child) {
           if(new Date(child.val().fromdate) >= date){
            this.key.push(child.key);
           }
        }.bind(this)); 
        var i=0;
        for(i=0;i<key.length;i++){
            if(key[i]==eventid){
                if(i==(key.length-1)){
                    window.location="whatsHappening_SubPage_1.html?id="+key[(key.length-1)];
                    youMayAlsoLike(key);
                }else{
                    window.location="whatsHappening_SubPage_1.html?id="+key[i+1];
                    youMayAlsoLike(key);
                }
            }
        }
        
    });
}


//FUNCTION TO DISPLAY YOU MAY ALSO SECTION
function youMayAlsoLike(){
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var categoryref = dbRefObject.child("events");
    var eventid= getUrlVars()['id'];
    this.key=[];
   categoryref.orderByChild('fromdate').on('value', function (snapshot) {
        var date = new Date();
       snapshot.forEach(function (child) {
           if(new Date(child.val().fromdate) >= date){
            this.key.push(child.key);
           }
        }.bind(this)); 
        var i=0;
        for(i=0;i<key.length;i++){
            if(key[i]==eventid){
                if(i==key.length-2){
                    var keyindex=i;
                    var count=1;
                }else{
                    var keyindex=i;
                    var count=2;
                }
            }
        }
       var maindiv=document.getElementById('youmayalsolike');
       var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//    const dbRefObject = firebase.database().ref().child('whatshappening');
    for (i=0;i<count;i++){
        var event=key[keyindex+(i+1)];
        var eventref = categoryref.child(event);
        eventref.on('value', function (snapshot) {
            var block=document.createElement("div");
            block.className="Event_Block_"+(i+1)+"_Left";
            var link=document.createElement("a");
            link.href="whatsHappening_SubPage_1.html?id=id"+(i+1);
            var img=document.createElement("img");
            img.src="images/whats_happning/Event-"+(i+1)+".png";
            img.style="width:80%";
            var eventday=document.createElement("div");
            var eventmonth=document.createElement("div");
            eventday.className="event_Image_day";
            eventmonth.className="event_Image_month";
            eventday.id="eventday"+(i+1);
            eventmonth.id="eventmonth"+(i+1);
            var title=document.createElement("h3");
            var desc=document.createElement("h3");
            title.className="Event_Caption";
            title.id="title"+i;
            desc.className="Event_SubCaption";
            desc.style="color:#333333;";
            desc.id="desc"+i;
            var eventdate = snapshot.child("fromdate").val();
            var newdate = new Date(eventdate);
            eventday.innerHTML=newdate.getDate();
            eventmonth.innerHTML=months[newdate.getMonth()];
            title.innerHTML=snapshot.child("title").val().substr(0,20)+"...";
            desc.innerHTML="by "+snapshot.child("speaker").val();
            link.appendChild(img);
            block.appendChild(link);
            link.appendChild(eventday);
            link.appendChild(eventmonth);
            block.appendChild(title);
            block.appendChild(desc);
            maindiv.appendChild(block);
        });
    }
    });
}
