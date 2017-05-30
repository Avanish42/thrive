//ONRESIZE FUNCTION 
window.onresize=displayEvents;


//---------------------- EVENT CALENDAR FOR DESKTOP -------------------------------//
//--FUNCTION TO CHANGE DIV & DIV BACKGROUND IMAGE SIZES DYNAMICALLY WITH SCREEN SIZE--//
function eventCalendarDivSize() {
    //    CALANDER VERTICAL IMAGE SIZES
    var width1 = document.getElementsByClassName("cal1")[0].clientWidth;
    var width2 = document.getElementsByClassName("cal2")[0].clientWidth;
    var width3 = document.getElementsByClassName("cal3")[0].clientWidth;
    var width4 = document.getElementsByClassName("cal4")[0].clientWidth;
    //    alert(width1);
//    var height1 = width1 * 2.18;
//	  var height2 = width2 * 2.39;
//    var height3 = width3 * 2.455;
//    var height4 = width4 * 1.709;
    var height1 = width1 * 2.25;
    var height2 = width2 * 2.3;
    var height3 = width3 * 2.3;
    var height4 = width4 * 2.3;
    var cal1 = document.getElementsByClassName('cal1');
    var cal2 = document.getElementsByClassName('cal2');
    var cal3 = document.getElementsByClassName('cal3');
    var cal4 = document.getElementsByClassName('cal4');
    //    document.getElementsByClassName('cal1')[0].setAttribute("style", "height:" + height1 + "px");
    for (var i = 0; i < cal1.length; i++) {
        cal1[i].setAttribute("style", "height:" + height1 + "px");
        cal1[i].style.backgroundSize = "100%" + height1 + "px";
    }
    for (var i = 0; i < cal2.length; i++) {
        cal2[i].setAttribute("style", "height:" + height2 + "px");
        cal2[i].style.backgroundSize = "100%" + height2 + "px";
    }
    for (var i = 0; i < cal3.length; i++) {
        cal3[i].setAttribute("style", "height:" + height3 + "px");
        cal3[i].style.backgroundSize = "100%" + height3 + "px";
    }
    for (var i = 0; i < cal4.length; i++) {
        cal4[i].setAttribute("style", "height:" + height4 + "px");
        cal4[i].style.backgroundSize = "100%" + height4 + "px";
    }
}

//---------------------- EVENT CALENDAR FOR MOBILE DEVICE -------------------------------//
//( Important notice for Calender, in html page we have hide first tow images, so similarly we have to hide all javascript coding related to that images, and change the height for navigation buttion from height1 to "height3", otherwise it will not work)
    function eventCalendarDivSizeForMobile() {
    //    CALANDER VERTICAL IMAGE SIZES
       var width1 = document.getElementsByClassName("cal1_M")[0].clientWidth;
       var width2 = document.getElementsByClassName("cal2_M")[0].clientWidth;
       var width3 = document.getElementsByClassName("cal3_M")[0].clientWidth;
       var width4 = document.getElementsByClassName("cal4_M")[0].clientWidth;

        var height1 = width1 * 2.3;
        var height2 = width2 * 2.3;
        var height3 = width3 * 2.3;
        var height4 = width4 * 2.3;
		
		var cal1_M = document.getElementsByClassName('cal1_M');
		var cal2_M = document.getElementsByClassName('cal2_M');
		var cal3_M = document.getElementsByClassName('cal3_M');
		var cal4_M = document.getElementsByClassName('cal4_M');
		
		for (var i = 0; i < cal1_M.length; i++) {
        cal1_M[i].setAttribute("style", "height:" + height1 + "px");
        cal1_M[i].style.backgroundSize = "100%" + height1 + "px";
		}
		for (var i = 0; i < cal2_M.length; i++) {
			cal2_M[i].setAttribute("style", "height:" + height2 + "px");
			cal2_M[i].style.backgroundSize = "100%" + height2 + "px";
		}
		for (var i = 0; i < cal3_M.length; i++) {
			cal3_M[i].setAttribute("style", "height:" + height3 + "px");
			cal3_M[i].style.backgroundSize = "100%" + height3 + "px";
		}
		for (var i = 0; i < cal4_M.length; i++) {
			cal4_M[i].setAttribute("style", "height:" + height4 + "px");
			cal4_M[i].style.backgroundSize = "100%" + height4 + "px";
		}
    }


//FUNCTION FOR DISPLAYING EVENTS BASED ON  SCREEN WIDTH
function displayEvents(){
	if(window.innerWidth>736){ //THIS LOOP ENTERS WHEN THE SCREEN WIDTH IS GREATER THAN 736PX
		document.getElementById("events_mobile").style.display="none";
		document.getElementById("events_desktop").style.display="block";
		var paras = document.getElementsByClassName('imgslides');
		while(paras[0]) {
			paras[0].parentNode.removeChild(paras[0]);
		}
		displayEvents_desktop();
		
	}else{
		document.getElementById("events_desktop").style.display="none";
		document.getElementById("events_mobile").style.display="block";
		var paras = document.getElementsByClassName('imgslides');
			while(paras[0]) {
				paras[0].parentNode.removeChild(paras[0]);
			}
			displayEvents_mobile();
	}
}


//FUNCTION TO DIS-PLAY EVENTS ON THE DESKTOP
function displayEvents_desktop() {
	
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var fade = document.getElementById("displayevents");
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) { //THIS IS MY REFERENCE TO DATABASE
        this.data = [];
        this.key = [];
        var date = new Date();
        var next = date.getMonth() + 1;
        if (next == 12) {
            next = 1;
            var year = date.getFullYear() + 1;
        }
        else {
            next = next + 1;
            var year = date.getFullYear();
        }
        var endDate = new Date(year, next, 0);
        snapshot.forEach(function (child) { //THIS WILL LOOK INTO EACH AND EVERY EVENT IN THE DATABASE
            if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this)); //BINDING THE ARRAY 
        var eventCount = data.length;
        var keycount = key.length;
        var eventcode = [];
        var mycode = [];
        var classindex = 1;
        for (var i = 1; i <= eventCount+1; i++) {
            eventcode.push('<h3 class="event_' + classindex + '_Date" id="cal' + i + '-Text-A"></h3>\
							<h4 class="event_' + classindex + '_Month" id="cal' + i + '-Text-B"></h4>\
							<h4 class="event_' + classindex + '_City" id="cal' + i + '-Text-F"></h4>\
							<h3 class="event_' + classindex + '_Author" id="cal' + i + '-Text-C"></h3>\
							<h4 class="event_' + classindex + '_Title" id="cal' + i + '-Text-D"></h4> \
							<h4 class="event_' + classindex + '_Title" id="cal' + i + '-Text-E"></h4>');
            if (i % 4 == 0) {
                classindex = 1;
            }
            else {
                classindex += 1;
            }
        }
        var k = 0;
        var l = 1;
        var m = 2;
        var n = 3;
        if (eventCount % 4 == 0) {
            eventCount = eventCount / 4;
            for (var i = 0; i <= eventCount; i++) {
                mycode.push('<div class="imgslides w3-animate-right">\
					<div class="div_displayTable">\
						<div class="fatherLeft" ><img src="images/feather-left.png" width="100%"> </div>\
						\
						<!--   CALENDAR BLOCK 1  -->\
						<div class="cal1"><a href="" id="refurl'+(k+1)+'">\
							' + eventcode[k] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 2  -->\
						<div class="cal2"><a href="" id="refurl'+(l+1)+'">\
							' + eventcode[l] + '\
                        </a></div>\
                       \
                        <!--   CALENDAR BLOCK 3  -->\
						<div class="cal3"><a href="" id="refurl'+(m+1)+'">\
							' + eventcode[m] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 4  -->\
						<div class="cal4"><a href="" id="refurl'+(n+1)+'">\
							' + eventcode[n] + '\
						</a></div>\
                        \
						<div class="fatherRight" ><img src="images/feather-right.png" width="100%"> </div>\
					</div>\
                </div>');
			k=k+4;
            l=l+4;
            m=m+4;
            n=n+4;
            }
            
        }
        else {
            eventCount = Math.floor(eventCount / 4);
            for (var i = 0; i < eventCount; i++) {
                mycode.push('<div class="imgslides w3-animate-right">\
					<div class="div_displayTable">\
					<div class="fatherLeft" ><img src="images/feather-left.png" width="100%"> </div>\
						\
						<!--   CALENDAR BLOCK 1  -->\
						<div class="cal1"><a href="" id="refurl'+(k+1)+'">\
							' + eventcode[k] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 2  -->\
						<div class="cal2"><a href="" id="refurl'+(l+1)+'">\
							' + eventcode[l] + '\
                        </a></div>\
                        <!--   CALENDAR BLOCK 3  -->\
						<div class="cal3"><a href="" id="refurl'+(m+1)+'">\
							' + eventcode[m] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 4  -->\
						<div class="cal4"><a href="" id="refurl'+(n+1)+'">\
							' + eventcode[n] + '\
						</a></div>\
                        \
					<div class="fatherRight" ><img src="images/feather-right.png" width="100%"> </div>\
					</div>\
                </div>');
				k=k+4;
				l=l+4;
				m=m+4;
				n=n+4;
            }
        }
        mycode.toString();
		for (var i = 0; i < eventCount; i++) {
            document.getElementById("events_desktop").innerHTML += mycode[i];
        }
		   data.map(function (val,j) { //MAPPING THE DATA
       		for (j;j < eventCount*4; j++) {
                var eventdate = val.fromdate;
                var newdate = new Date(eventdate);
                var eventmonth = newdate.getMonth();
                var eventday = newdate.getDate();
                eventmonth = months[eventmonth];
                var time = val.timing;
				var speaker=val.speaker;
				var title=val.title;
                var venue=val.venue;
                document.getElementById("cal" + (j + 1) + "-Text-A").innerText = eventday;
                document.getElementById("cal" + (j + 1) + "-Text-B").innerText = eventmonth;
                document.getElementById("cal" + (j + 1) + "-Text-C").innerText = speaker;
                document.getElementById("cal" + (j + 1) + "-Text-D").innerText = title;
                document.getElementById("cal" + (j + 1) + "-Text-E").innerText = time;
                document.getElementById("cal" + (j + 1) + "-Text-F").innerText = venue;
				}
        });
        key.map(function(val,j){
            for(j;j<eventCount*4;j++){
            var id=document.getElementById("refurl"+(j+1)+"");
            id.setAttribute('href','whatsHappening_SubPage_1.html?id='+val+'');
			}
        });
        eventCalendarDivSize(); //FUNCTION CALL TO MAINTAIN THE PROPER SIZE OF THE EVENT
        displayImg(0,1); //FUNCTION CALL TO DISPLAY THE SET OF SLIDES
    });
}

//CALENDAR EVENTS FOR MOBILE SCREEN SIZES
function displayEvents_mobile(){
	var today = new Date();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events/");
    var fade = document.getElementById("displayevents");
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
//		this.data = [];
        this.data = [];
        this.key = [];
        var date = new Date();
        var next = date.getMonth() + 1;
        if (next == 12) {
            next = 1;
            var year = date.getFullYear() + 1;
        }
        else {
            next = next + 1;
            var year = date.getFullYear();
        }
        var endDate = new Date(year, next, 0);
        snapshot.forEach(function (child) {
            if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this));
        var eventCount = data.length;
        var eventcode = [];
        var mycode = [];
        var classindex = 1;
        for (var i = 1; i <= eventCount; i++) {
			
            eventcode.push('<h3 class="event_' + classindex + '_Date" id="cal' + i + '-Text-A"></h3>\
							<h4 class="event_' + classindex + '_Month" id="cal' + i + '-Text-B"></h4>\
							<h3 class="event_' + classindex + '_City" id="cal' + i + '-Text-F"></h3>\
							<h3 class="event_' + classindex + '_Author" id="cal' + i + '-Text-C"></h3>\
							<h4 class="event_' + classindex + '_Title" id="cal' + i + '-Text-D"></h4> \
							<h4 class="event_' + classindex + '_Title" id="cal' + i + '-Text-E"></h4>');
            if (i % 2 == 0) {
                classindex = 1;
            }
            else {
                classindex =classindex + 1;
            }
        }
        var k = 0;
        var l = 1;
		var m = 1;
		var n = 2;
        if (eventCount % 2 == 0) {
            eventCount = eventCount / 2;
            for (var i = 0; i < eventCount; i++) {
				if(i%2==0){
					var m = 1;
					var n = 2;
				}else{
					var m = 3;
					var n = 4;
				}
                mycode.push('<div class="imgslides w3-animate-right">\
					<div class="div_displayTable">\
						\
						<!--   CALENDAR BLOCK 1  -->\
						<div class="cal'+ m +'_M"><a href="" id="refurl_mobile'+(k+1)+'">\
							' + eventcode[k] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 2  -->\
						<div class="cal'+ n +'_M"><a href="" id="refurl_mobile'+(l+1)+'">\
							' + eventcode[l] + '\
                        </a></div>\
						\
					</div>\
                </div>');
				k=k+2;
				l=l+2;
            }
			
        }
        else {
            eventCount = Math.floor(eventCount / 2);
            for (var i = 0; i < eventCount; i++) {
				if(i%2==0){
					var m=1;
					var n=2;
				}else{
					var m=3;
					var n=4;
				}
               mycode.push('<div class="imgslides w3-animate-right">\
					<div class="div_displayTable">\
						\
						<div class="cal'+ m +'_M"><a href="" id="refurl_mobile'+(k+1)+'">\
							' + eventcode[k] + '\
						</a></div>\
                        \
						<!--   CALENDAR BLOCK 2  -->\
						<div class="cal'+ n +'_M"><a href="" id="refurl_mobile'+(l+1)+'">\
							' + eventcode[l] + '\
                        </a></div>\
						\
					</div>\
                </div>');
				k=k+2;
				l=l+2;
            }
			
        }
        mycode.toString();
        for (var i = 0; i < eventCount; i++) {
            document.getElementById("events_mobile").innerHTML += mycode[i];
        }
		data.map(function (val, j) {
            for (j;j < eventCount*2; j++) {
                var eventdate = val.fromdate;
                var newdate = new Date(eventdate);
                var eventmonth = newdate.getMonth();
                var eventday = newdate.getDate();
                eventmonth = months[eventmonth];
                var time = val.timing;
                var speaker=val.speaker;
				var title=val.title;
                var venue=val.venue;
                document.getElementById("cal" + (j + 1) + "-Text-A").innerText = eventday;
                document.getElementById("cal" + (j + 1) + "-Text-B").innerText = eventmonth;
                document.getElementById("cal" + (j + 1) + "-Text-C").innerText = speaker;
                document.getElementById("cal" + (j + 1) + "-Text-D").innerText = title;
                document.getElementById("cal" + (j + 1) + "-Text-E").innerText = time;
                document.getElementById("cal" + (j + 1) + "-Text-F").innerText = venue;
            }
        });
		 key.map(function(val,j){
            for(j;j<eventCount*2;j++){
            var id=document.getElementById("refurl_mobile"+(j+1)+"");
            id.setAttribute('href','whatsHappening_SubPage_1.html?id='+val+'');
			}
        });
        eventCalendarDivSizeForMobile();
        displayImg(0,1);
    });

}

<!--/* FUNCTION FOR CALENDAR-DESKTOP NAVIGATION */-->
var imgindex = 1;
//displayImg(imgindex);

function imgSlide(n) {
    displayImg(imgindex += n,n);
}

function displayImg(n,j) {
    var i;
    var x = document.getElementsByClassName("imgslides");

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	if (n >= x.length) {
		imgindex = x.length;
		document.getElementById('next').style.visibility = "hidden";
		document.getElementById('prev').style.visibility = "visible";
	}
	else if(n <= 1) {
		imgindex = 1;
		document.getElementById('prev').style.visibility = "hidden";
		document.getElementById('next').style.visibility = "visible";
	}
	else {
		document.getElementById('prev').style.visibility = "visible";
		document.getElementById('next').style.visibility = "visible";
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


	

