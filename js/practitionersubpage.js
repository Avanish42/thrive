//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

//FUNCTION TO FETCH THE DATA FROM DATABASE
function fetchdata(content) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var eventsRef = dbRefObject.child("practitioner");
    var eventid = getUrlVars()['id'];
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
        var text = document.getElementById(content);
        if (content == "img") {
            text.setAttribute('src', snapshot.child(content).val());
        }
        else if (content == "speaker") {
            document.getElementById(content).innerText = snapshot.child("name").val();
            displayIndividualevents();
        }
        else if (content == "website") {
            text.setAttribute('href', snapshot.child(content).val())
            document.getElementById(content).innerText = snapshot.child(content).val();
        }
        else {
            document.getElementById(content).innerText = snapshot.child(content).val();
        }
    });
}

//FUNCTION TO CHNAGE THE TITLE OF THE PAGE ACCORDING TO THE WSP
function settitle(title) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var eventsRef = dbRefObject.child("practitioner");
    var eventid = getUrlVars()['id'];
    var eventdata = eventsRef.child(eventid);
    eventdata.on('value', function (snapshot) {
        document.title = "THRIIVE | " + snapshot.child(title).val();
        gettherapies();
    });
}

//FUNCTION TO GET THE MODALITIES PROVIDED BY THE WSP
function gettherapies() {
    const dbRefObject = firebase.database().ref().child('therapies');
    var practitionerref = dbRefObject.child("practitioner");
    var practitionerid = getUrlVars()['id'];
    this.data = [];
    var dates = practitionerref.child(practitionerid).on('value', function (snapshot) {
        this.data.push(snapshot.val().modality1);
        this.data.push(snapshot.val().modality2);
        this.data.push(snapshot.val().modality3);
        this.data.push(snapshot.val().modality4);
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
                        this.data.push(modality.val());
                        this.parent.push(child.key);
                        this.key.push(modality.key);
                    }
                }
            });
        }.bind(this));
        var practitionercount = data.length;
        var keycount = key.length;
        var maindiv = document.getElementById("therapiesoffer");
        var i = 1;
        length = practitionercount / 6;
        for (j = 1; j < length + 1; j++) {
            var rowdiv = document.createElement("div");
            rowdiv.className = "therapies w3-animate-right"
            for (var k = 1; k <= 5; k++) {
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
            var img = val.img;
            document.getElementById('img' + (j + 1) + '').setAttribute("src", val.img);
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

//FUNCTION TO DISPLAY INDIVIDUAL EVENTS OF THE PARTICULAR WSP
function displayIndividualevents() {
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening/events');
    var speaker=document.getElementById("speaker").innerHTML;
    var events= dbRefObject.orderByChild("fromdate").on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var date = new Date();
        snapshot.forEach(function (child) {
            if(child.val().speaker==speaker){
                if((new Date(child.val().fromdate) >= date)){
                    this.data.push(child.val());
                    this.key.push(child.key);
                }
            }
        }.bind(this));
        for(var i=0;i<data.length;i++){
            var maindiv=document.createElement("div");
            maindiv.className = "practitioner_subpage_image_div";
            
            var link=document.createElement("a");
            var img= document.createElement("img");
            link.id="link"+(i+1);
            img.src="images/whats_happning/Event-"+ (i+1) +".png";
            img.style="width:100%";
            link.appendChild(img);
            var eventimageinfo=document.createElement("div");
            eventimageinfo.className="event_Image_SubPage_Info";
            eventimageinfo.id="eventdaylist"+(i+1);
            var eventimagemonth=document.createElement("div");
            eventimagemonth.className="event_Image_SubPage_month";
            eventimagemonth.id="eventmonthlist"+(i+1);
            
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="Event_Caption_SubPage";
            title.id="titlelist"+(i+1);
            desc.id="disclist"+(i+1); 
            desc.className="Event_SubCaption_subPage"; 
            
            maindiv.appendChild(link);
            link.appendChild(eventimageinfo);
            link.appendChild(eventimagemonth);
            maindiv.appendChild(title);
            maindiv.appendChild(desc);
            document.getElementById('individualevents').appendChild(maindiv);
        }
        var j=0;
        data.map(function (val, j) {
            var eventdate = val.fromdate;
                var newdate = new Date(eventdate);
                var eventmonth = newdate.getMonth();
                var eventday = newdate.getDate();
                eventmonth = months[eventmonth];
            var title=val.title;
            var desc=val.overview;

            document.getElementById('eventdaylist'+(j+1)+'').innerHTML=eventday;
            document.getElementById('eventmonthlist'+(j+1)+'').innerHTML=eventmonth;
            document.getElementById('titlelist'+(j+1)+'').innerHTML=title.substring(0,40)+"...";
            document.getElementById('disclist'+(j+1)+'').innerHTML=desc.substring(0,80) + "...";

        });
        key.map(function(val,j){
            var imgid=document.getElementById("link"+(j+1)+"");
            imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
        });
    });
}
