// Globally head date object for the month shown
var date = new Date();
date.setDate(1);
//date.setMonth(0);
window.onload = function () {
    // Add the current month on load
    if(window.innerWidth>736){
        document.getElementById("event_calendar_mobile").style.display="none";
        document.getElementById("event_calender_desktop").style.display="block";
        createMonth();
    }else{
        document.getElementById("event_calender_desktop").style.display="none";
        document.getElementById("event_calendar_mobile").style.display="block";
        createMonth_mobile();
    }
};


// Converts day ids to the relevant string
function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
}
// Converts month ids to the relevant string
function monthsAsString(monthIndex) {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
}

//FUNCTION TO GET THE MONTH NUMBER ACCORDING TO THE USER INPUT
function MonthNumber(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthvalue = months.indexOf(month);
    return monthvalue;
}

//Checking the exact date has a events or not
function checkEventHasOrNot(num,mon,year) {
    //    var ref = firebase.database().ref().child('whatshappening/events');
    var monthvalue = MonthNumber(mon);
    var date = (monthvalue + 1) + "/" + Number(num) + "/" + year;
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        var count=0;
        snapshot.forEach(function (child) {
            if ((child.val().fromdate) == date) {
                count=count+1;
                var key = child.key;
                appendclasses(num,mon,year,"exist",count,key);
            }
        });
    });
}

//FUNCTION TO APPEND CLASSES INTO THE DATES WHICH ARE HAVING WORKSHOP
function appendclasses(num,mon,year,flag,count,key){
    var newId=num + "-" + mon + "-" + year;
    var monthvalue = MonthNumber(mon);
    var hrefid = (monthvalue + 1) + "/" + num + "/" + year;
    var url= "whatsHappening.html?id="+key
    if(flag=="exist"){
        var todaysDate = new Date();
        var today = todaysDate.getDate();
        var currentMonth = todaysDate.getMonth();
        var currentYear = todaysDate.getFullYear();
        var thisMonth = monthsAsString(currentMonth);
        // Find element with the ID for today
        var currentDay = today + "-" + thisMonth + "-" + currentYear;
        if(currentDay==newId){
            document.getElementById(newId).setAttribute("class","event_day current_day");
        }else{
            document.getElementById(newId).setAttribute("class","event_day");
        }
        document.getElementById(newId).setAttribute("data-notifications",count);
        document.getElementById(hrefid).setAttribute("onclick","whatsahappening_list_desktop("+(monthvalue)+","+year+","+num+",'individual');whatsahappening_grid_desktop("+(monthvalue)+","+year+","+num+",'individual')");
         document.getElementById(hrefid).setAttribute("style","cursor:pointer;")
    }else{
        document.getElementById(newId).setAttribute("class","normal_day");
    } 
}
 
// Creates a day element DESKTOP
function createCalendarDay(num, day, mon, year) {
    var currentCalendar1 = document.getElementById("calendargroup1");
    var currentCalendar2 = document.getElementById("calendargroup2");
    var newDay = document.createElement("div");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");
    date.innerHTML = num;
    date.setAttribute("class","date");
    dayElement.innerHTML = day;
    newDay.id = num + "-" + mon + "-" + year;
    var monthvalue = MonthNumber(mon);
    var currentdate = (monthvalue + 1) + "/" + num + "/" + year;
    var attr=document.createElement("a");
    attr.id=currentdate;
    attr.appendChild(date);
    
    if (num < 17 && num > 0) {
        newDay.appendChild(attr);
        currentCalendar1.appendChild(newDay);
    }
    else {
        newDay.appendChild(attr);
        currentCalendar2.appendChild(newDay);
    }
    document.getElementById(newDay.id).setAttribute("class","normal_day");
    var event =  checkEventHasOrNot(num,mon,year);
}

// Creates a day element MOBILE
function createCalendarDay_mobile(num, day, mon, year) {
    var currentCalendar1 = document.getElementById("calendargroupmobile1");
    var currentCalendar2 = document.getElementById("calendargroupmobile2");
    var currentCalendar3 = document.getElementById("calendargroupmobile3");
    var currentCalendar4 = document.getElementById("calendargroupmobile4");
    var newDay = document.createElement("div");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");
    date.innerHTML = num;
    date.setAttribute("class","date");
    dayElement.innerHTML = day;
    newDay.id = num + "-" + mon + "-" + year;
    var monthvalue = MonthNumber(mon);
    var currentdate = (monthvalue + 1) + "/" + num + "/" + year;
    var attr=document.createElement("a");
    attr.id=currentdate;
    attr.appendChild(date);
    
    if (num <= 8 && num > 0) {
    newDay.appendChild(attr);
    currentCalendar1.appendChild(newDay);
    }
    else if (num <= 16 && num > 8) {
        newDay.appendChild(attr);
        currentCalendar2.appendChild(newDay);
    }
    else if (num <= 24 && num > 16) {
        newDay.appendChild(attr);
        currentCalendar3.appendChild(newDay);
    }
    else {
        newDay.appendChild(attr);
        currentCalendar4.appendChild(newDay);
    }
    document.getElementById(newDay.id).setAttribute("class","normal_day");
    var event =  checkEventHasOrNot(num,mon,year);
}



// Clears all days from the calendar DESKTOP
function clearCalendar() {
    var currentCalendar1 = document.getElementById("calendargroup1");
    var currentCalendar2 = document.getElementById("calendargroup2");
    currentCalendar1.innerHTML = "";
    currentCalendar2.innerHTML = "";
}

// Clears all days from the calendar MOBILE
function clearCalendar_mobile() {
    var currentCalendar1 = document.getElementById("calendargroupmobile1");
    var currentCalendar2 = document.getElementById("calendargroupmobile2");
    var currentCalendar3 = document.getElementById("calendargroupmobile3");
    var currentCalendar4 = document.getElementById("calendargroupmobile4");
    currentCalendar1.innerHTML = "";
    currentCalendar2.innerHTML = "";
    currentCalendar3.innerHTML = "";
    currentCalendar4.innerHTML = "";
} 

// Clears the calendar and shows the next month
function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    if(window.innerWidth>736){
        clearCalendar();
        carousel(-1);
        document.getElementById("event_calendar_mobile").style.display="none";
        document.getElementById("event_calender_desktop").style.display="block";
        createMonth(date.getMonth());
    }else{
        clearCalendar_mobile();
        carousel_mobile(-1);
        document.getElementById("event_calender_desktop").style.display="none";
        document.getElementById("event_calendar_mobile").style.display="block";
        createMonth_mobile(date.getMonth());
    }
    var month = date.getMonth(),
    year = date.getFullYear();
    var day=date.getDate();
    removefilterdata();
//    whatsahappening_grid_desktop(month,year,day,"wholemonth");
    whatsahappening_list_desktop(month,year,day,"wholemonth");
}

// Clears the calendar and shows the previous month
function previousMonth() {
    date.setMonth(date.getMonth() - 1);
    var val = date.getMonth();
    if(window.innerWidth>736){
        clearCalendar();
        carousel(-1);
        document.getElementById("event_calendar_mobile").style.display="none";
        document.getElementById("event_calender_desktop").style.display="block";
        createMonth(date.getMonth());
    }else{
        clearCalendar_mobile();
        carousel_mobile(-1);
        document.getElementById("event_calender_desktop").style.display="none";
        document.getElementById("event_calendar_mobile").style.display="block";
        createMonth_mobile(date.getMonth());
    }
    removefilterdata(); 
    var month = date.getMonth(),
    year = date.getFullYear();
    var day=date.getDate();
//    whatsahappening_grid_desktop(month,year,day,"wholemonth");
    whatsahappening_list_desktop(month,year,day,"wholemonth");
}

//FUNCTION TO REMOVE FILTERS DATA
function removefilterdata(){
    var masterdiv=document.getElementById("master");
    var workshopdiv=document.getElementById("workshop");
    var citydiv=document.getElementById("city");
    for (var i=masterdiv.length-1; i>=1; i--){
         masterdiv.remove(i);
    }
    for (var i=workshopdiv.length-1; i>=1; i--){
         workshopdiv.remove(i);
    }
    for (var i=citydiv.length-1; i>=1; i--){
         citydiv.remove(i);
    }
}

// Creates and populates all of the days to make up the month
function createMonth() {
    var currentCalendar = document.getElementById("calendar");
    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(date.getMonth());
    dateObject.setYear(date.getFullYear());
    var month = monthsAsString(dateObject.getMonth());
    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), month, dateObject.getFullYear());
    dateObject.setDate(dateObject.getDate() + 1);
    while (dateObject.getDate() != 1) {
        createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), month, dateObject.getFullYear());
        dateObject.setDate(dateObject.getDate() + 1);
    }
    // Set the text to the correct month
    var currentMonthText = document.getElementById("current-month_desktop");
    currentMonthText.innerText = month + " " + date.getFullYear();
    var firstset = document.getElementById('calendargroup1');
    var secondset = document.getElementById('calendargroup2');
    var adddivs = 16 - secondset.childNodes.length;
    for(var i=0;i<adddivs;i++){
        var newDay = document.createElement("div");
        var dateelement = document.createElement("p");
        var dayElement = document.createElement("p");
        dateelement.innerHTML = i+1;
        newDay.className = "next_month_day";
        newDay.appendChild(dateelement);
        secondset.appendChild(newDay);
    }
    var checkdate = new Date();
    var count = 0;
    for (i = 0; i < firstset.childNodes.length; i++) {
        var childId = firstset.childNodes[i].id;
        if (typeof (childId) !== 'undefined') {
            var day = checkdate.getDate();
            var month = checkdate.getMonth();
            month = monthsAsString(month);
            var year = checkdate.getFullYear();
            var today = day + "-" + month + "-" + year;
            if (childId == today) {
                count = count + 1;
            }
            else {
                count = count + 0;
            }
        }
    }
    if (count > 0) {
        myIndex = 1;
    }
    else {
        myIndex = 2;
    }
    getCurrentDay(date.getMonth());
    carousel(myIndex);
}

// Creates and populates all of the days to make up the month FOR MOBILE
function createMonth_mobile() {
    var currentCalendar = document.getElementById("calendar_mobile");
    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(date.getMonth());
    dateObject.setYear(date.getFullYear());
    var month = monthsAsString(dateObject.getMonth());
    createCalendarDay_mobile(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), month, dateObject.getFullYear());
    dateObject.setDate(dateObject.getDate() + 1);
    while (dateObject.getDate() != 1) {
        createCalendarDay_mobile(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), month, dateObject.getFullYear());
        dateObject.setDate(dateObject.getDate() + 1);
    }
    // Set the text to the correct month
    var currentMonthText = document.getElementById("current-month_mobile");
    currentMonthText.innerText = month + " " + date.getFullYear();
    var firstset = document.getElementById('calendargroupmobile1');
    var secondset = document.getElementById('calendargroupmobile2');
    var thirdset = document.getElementById('calendargroupmobile3');
    var fourthset = document.getElementById('calendargroupmobile4');
    var adddivs = 8 - fourthset.childNodes.length;
    for(var i=0;i<adddivs;i++){
        var newDay = document.createElement("div");
        var dateelement = document.createElement("p");
        var dayElement = document.createElement("p");
        dateelement.innerHTML = i+1;
        newDay.className = "next_month_day";
        newDay.appendChild(dateelement);
        fourthset.appendChild(newDay);
    }
    var checkdate = new Date();
    var first = 0;
    var second = 0;
    var third = 0;
    var four = 0;
    for (i = 0; i < firstset.childNodes.length; i++) {
        var childId = firstset.childNodes[i].id;
        if (typeof (childId) !== 'undefined') {
            var day = checkdate.getDate();
            var month = checkdate.getMonth();
            month = monthsAsString(month);
            var year = checkdate.getFullYear();
            var today = day + "-" + month + "-" + year;
            if (childId == today) {
                first = first + 1;
            }
            else {
                first = first + 0;
            }
        }
    }
    
    for (i = 0; i < secondset.childNodes.length; i++) {
        var childId = secondset.childNodes[i].id;
        if (typeof (childId) !== 'undefined') {
            var day = checkdate.getDate();
            var month = checkdate.getMonth();
            month = monthsAsString(month);
            var year = checkdate.getFullYear();
            var today = day + "-" + month + "-" + year;
            if (childId == today) {
                second = second + 1;
            }
            else {
                second = second + 0;
            }
        }
    }
    for (i = 0; i < thirdset.childNodes.length; i++) {
        var childId = thirdset.childNodes[i].id;
        if (typeof (childId) !== 'undefined') {
            var day = checkdate.getDate();
            var month = checkdate.getMonth();
            month = monthsAsString(month);
            var year = checkdate.getFullYear();
            var today = day + "-" + month + "-" + year;
            if (childId == today) {
                third = third + 1;
            }
            else {
                third = third + 0;
            }
        }
    }
    for (i = 0; i < fourthset.childNodes.length; i++) {
        var childId = fourthset.childNodes[i].id;
        if (typeof (childId) !== 'undefined') {
            var day = checkdate.getDate();
            var month = checkdate.getMonth();
            month = monthsAsString(month);
            var year = checkdate.getFullYear();
            var today = day + "-" + month + "-" + year;
            if (childId == today) {
                four = four + 1;
            }
            else {
                four = four + 0;
            }
        }
    }
    if (first > 0) {
        myIndex = 1;
    }
    else if(second >0) {
        myIndex = 2;
    }else if(third>0){
        myIndex = 3;
    }else if(four > 0){
        myIndex = 4;
    }else{
        myIndex = 1;
    }
    getCurrentDay(date.getMonth());
    carousel_mobile(myIndex);
}


//FUNCTION TO GET CURRENT DAY OF THE MONTH 
function getCurrentDay(month) {
    // Create a new date that will set as default time
    var todaysDate = new Date();
    var today = todaysDate.getDate();
    var currentMonth = todaysDate.getMonth();
    var currentYear = todaysDate.getFullYear();
    var thisMonth = monthsAsString(currentMonth);
    // Find element with the ID for today
    var currentDay = document.getElementById(today + "-" + thisMonth + "-" + currentYear);
    if(currentMonth==month)
    {
        currentDay.className = " current_day";
    }
}

//NAVIGATION OF OTHER DAYS IN THE MONTH 
var myIndex = 0;
var myIndex_mobile = 0;

function otherDays(n) {
    carousel(myIndex += n);
}

function carousel(n) {
    var i;
    var x = document.getElementsByClassName("calendar-events");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    if (n > x.length) {myIndex = x.length} 
    if(n<=1){myIndex = 1}
    x[myIndex-1].style.display = "block";  
       
}

// NAVIGATION OF OTHER DAYS IN THE MONTH FOR MOBILE 
function otherDays_mobile(n) {
    carousel_mobile(myIndex_mobile += n);
}

function carousel_mobile(n) {
    myIndex_mobile=n;
    var i;
    var x = document.getElementsByClassName("calendar-events_mobile");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    if (n > x.length) {myIndex_mobile = x.length} 
    if(n<=1){myIndex_mobile = 1}
    
    x[myIndex_mobile-1].style.display = "block";  
       
}


    
//FUNCTION TO CHANGE THE VIEW TO LIST
//function displayListView(){
//    document.getElementById("WH_Grid_Dektop").style.display="none";
//    document.getElementById("WH_List_Dektop").style.display="block";
//    
//    var grid_id=document.getElementById("gridViewActive");
//    var list_id=document.getElementById("listViewActive");
//    var list_id_mobile=document.getElementById("listViewActive_mobile");
//    var grid_id_mobile=document.getElementById("gridViewActive_mobile");
//    
//    grid_id.setAttribute("src", "images/whats_happning/grid_button_2.png");
//    list_id.setAttribute("src", "images/whats_happning/list_button.png");
//    grid_id_mobile.setAttribute("src", "images/whats_happning/grid_button_2.png");
//    list_id_mobile.setAttribute("src", "images/whats_happning/list_button.png");
//}


//FUNCTION TO CHANGE THE VIEW TO GRID 
//function displayGridView(){
//    document.getElementById("WH_Grid_Dektop").style.display="block";
//    document.getElementById("WH_List_Dektop").style.display="none";
//    var grid_id=document.getElementById("gridViewActive");
//    var list_id=document.getElementById("listViewActive");
//    var list_id_mobile=document.getElementById("listViewActive_mobile");
//    var grid_id_mobile=document.getElementById("gridViewActive_mobile");
//    
//    grid_id.setAttribute("src", "images/whats_happning/grid_button.png");
//    list_id.setAttribute("src", "images/whats_happning/list_button_2.png");
//    grid_id_mobile.setAttribute("src", "images/whats_happning/grid_button.png");
//    list_id_mobile.setAttribute("src", "images/whats_happning/list_button_2.png");
//    
//}




//FUNCTION TO DISPLAY EVENTS IN THE LSIT
function whatsahappening_list_desktop(eventmonth,eventyear,eventday,eventtype){
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var eventtype=eventtype;
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var maindiv = document.getElementById("WH_List_Dektop");
    maindiv.innerHTML="";
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var date = new Date();
        if(eventtype=="individual"){
            date = new Date(eventyear,eventmonth,eventday);
            var endDate= new Date(eventyear,eventmonth,eventday);
        }else{
            if(eventmonth==date.getMonth()){
                date=new Date();
                var endDate = new Date(eventyear, eventmonth + 1, 0);
            }else{
                var date = new Date(eventyear, eventmonth, 1);
                var endDate = new Date(eventyear, eventmonth + 1, 0);
            }
        }    
        snapshot.forEach(function (child) {
            if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this));
        var eventCount = data.length;
        var keycount = key.length;
        var classindex = 1;
        var j=1;
        for (var i=1; i<= eventCount;i++){
            var eventdiv=document.createElement("div");
            eventdiv.className="div_displayTable";
            eventdiv.style="margin-bottom:5%;";
            
            
            var eventblock=document.createElement("div");
            eventblock.className="Event_Block_List";
            var link = document.createElement("a");
            link.id = "linklist" + i;
            var img = document.createElement("img");
            img.src = "images/whats_happning/Event-"+j+".png";
            img.style="width:100%";
            var eventimageinfo=document.createElement("div");
            eventimageinfo.className="event_Image_day_L";
            eventimageinfo.id="eventdaylist"+i;
            var eventimagemonth=document.createElement("div");
            eventimagemonth.className="event_Image_month_L";
            eventimagemonth.id="eventmonthlist"+i;
            
            var textdiv=document.createElement("div");
            textdiv.className="Event_Block_Details_List";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="Event_Name_List";
            title.id="titlelist"+i;
            desc.id="disclist"+i; 
            desc.className="Event_description_List"; 
            var knowmore=document.createElement("div");
            
            knowmore.className="knowMore_Event_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink"+i;
            var knowimg=document.createElement("img");
            knowimg.src="images/whats_happning/knowMore_Whats_Happening.png";
            knowimg.style="width:100%";
            
            var rss=document.createElement("div");
            rss.className="Event_Social_Media";
            rss.style="padding-right:2%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink"+i;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="Event_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink"+i;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="Event_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink"+i;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
            
            var fb=document.createElement("div");
            fb.className="Event_Social_Media";
            var fblink=document.createElement("a");
            fblink.id="fblink"+i;
            var fbimg=document.createElement("img");
            fbimg.src="images/SocialMedia_F.png";
            fbimg.style="width:100%";

            link.appendChild(img);
            eventblock.appendChild(link);
            eventblock.appendChild(eventimageinfo);
            eventblock.appendChild(eventimagemonth);
            eventdiv.appendChild(eventblock);
            
            
            textdiv.appendChild(title);
            textdiv.appendChild(desc);
            
            knowlink.appendChild(knowimg);
            knowmore.appendChild(knowlink);
            rsslink.appendChild(rssimg);
            rss.appendChild(rsslink);
            
            instalink.appendChild(instaimg);
            insta.appendChild(instalink);
            
            twitterlink.appendChild(twitterimg);
            twitter.appendChild(twitterlink);
            
            fblink.appendChild(fbimg);
            fb.appendChild(fblink);
            
            textdiv.appendChild(knowmore);
            textdiv.appendChild(rss);
            textdiv.appendChild(insta);
            textdiv.appendChild(twitter);
            textdiv.appendChild(fb);
            eventdiv.appendChild(textdiv);
            
            maindiv.appendChild(eventdiv);
            if(j==3){
                j=1;
                }else{
                    j++;
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
            var desc=val.overview;

            document.getElementById('eventdaylist'+(j+1)+'').innerHTML=eventday;
            document.getElementById('eventmonthlist'+(j+1)+'').innerHTML=eventmonth;
            document.getElementById('titlelist'+(j+1)+'').innerHTML=title;
            document.getElementById('disclist'+(j+1)+'').innerHTML=desc.substring(0,80) + "...";

        });
        key.map(function(val,j){
            var imgid=document.getElementById("linklist"+(j+1)+"");
            var knowid=document.getElementById("knowlink"+(j+1)+"");
            imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
            knowid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
        });

    });
}


//FUNCTION TO DISPLAY EVENTS IN THE GRID VIEW
function whatsahappening_grid_desktop(eventmonth,eventyear,eventday,eventtype){
    var eventsmonth=eventmonth;
    var eventsyear=eventyear;
    var eventtype=eventtype;
    var eventsday=eventday;
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var maindiv = document.getElementById("WH_Grid_Dektop");
    maindiv.innerHTML="";
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var date = new Date();
        if(eventtype=="individual"){
            date = new Date(eventsyear,eventsmonth,eventsday);
            var endDate= new Date(eventsyear,eventsmonth,eventsday);
        }else{
            if(eventsmonth==date.getMonth()){
                date=new Date();
                var endDate = new Date(eventsyear, eventsmonth + 1, 0);
            }else{
                var date = new Date(eventsyear, eventsmonth, 1);
                var endDate = new Date(eventsyear, eventsmonth + 1, 0);
            }
        }
        snapshot.forEach(function (child) {
            if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                this.data.push(child.val());
                this.key.push(child.key);
            }
        }.bind(this));
        var eventCount = data.length;
        var keycount = key.length;
        var length=eventCount/3;
            var i=1;
        if(eventCount<=0){
            maindiv.style="font-size:3vw;font-family: 'Amatic SC', cursive;color: #4e0475;font-weight:bold;";
            maindiv.innerHTML="no events to display for this month";
        }else{
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
                    maindiv.appendChild(EventBlock);
                    i=i+1;
                    }
//                maindiv.appendChild(rowdiv);
            } 
        }
        var masterdiv=document.getElementById("master");
        var workshopdiv=document.getElementById("workshop");
        var citydiv=document.getElementById("city");
        removefilterdata();
        for(i=1;i<=eventCount;i++){
            var masteroption=document.createElement("option");
            masteroption.id="master"+i;
            masterdiv.appendChild(masteroption);
            var workshopoption=document.createElement("option");
            workshopoption.id="workshop"+i;
            workshopdiv.appendChild(workshopoption);
            var cityoption=document.createElement("option");
            cityoption.id="city"+i;
            citydiv.appendChild(cityoption);
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
        data.map(function (val, j) {
            var spekaer=val.speaker;
            var optiontag=document.getElementById("master"+(j+1));
            optiontag.innerHTML=spekaer;
            optiontag.value=spekaer;
            var workshoptag=document.getElementById("workshop"+(j+1));
            workshoptag.innerHTML=val.title;
            workshoptag.value=val.title;
            var citytag=document.getElementById("city"+(j+1));
            citytag.innerHTML=val.venue;
            citytag.value=val.venue;
        });
        var temp=[];
        for(var i=masterdiv.length-1; i>=1; i--){
            temp[i]=document.getElementById("master"+i).value;
        }
//        console.log(temp);
        var masters = temp.filter(function (x, i, a) { 
            return a.indexOf(x) == i; 
        });
        for(var i=workshopdiv.length-1; i>=1; i--){
            temp[i]=document.getElementById("workshop"+i).value;
        }
        var workshops = temp.filter(function (x, i, a) { 
            return a.indexOf(x) == i; 
        });
        for(var i=city.length-1; i>=1; i--){
            temp[i]=document.getElementById("city"+i).value;
        }
        var cities = temp.filter(function (x, i, a) { 
            return a.indexOf(x) == i; 
        });
        removefilterdata();
        for(i=0;i<masters.length;i++){
           var masteroption=document.createElement("option");
            masteroption.id="master"+i;
            masteroption.innerHTML=masters[i];
            masteroption.value=masters[i];
            masterdiv.appendChild(masteroption); 
        }
        for(i=0;i<workshops.length;i++){
           var workshopoption=document.createElement("option");
            workshopoption.id="workshop"+i;
            workshopoption.innerHTML=workshops[i];
            workshopoption.value=workshops[i];
            workshopdiv.appendChild(workshopoption); 
        }
        for(i=0;i<cities.length;i++){
           var cityoption=document.createElement("option");
            cityoption.id="workshop"+i;
            cityoption.innerHTML=cities[i];
            cityoption.value=cities[i];
            citydiv.appendChild(cityoption); 
        }
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

function displayfilterbasedevents(){
    var month=document.getElementById("current-month_desktop").innerHTML;
    var master=document.getElementById("master").value;
    var workshop=document.getElementById("workshop").value;
    var city=document.getElementById("city").value; 
    
        var viewimage=document.getElementById("listViewActive").src;
        var viewimage=viewimage.substr(viewimage.lastIndexOf('/')+1);
        if(viewimage=="list_button.png"){
            document.getElementById("WH_Grid_Dektop").style.display="none"; 
        }else{
            document.getElementById("WH_List_Dektop").style.display="none"; 
        }
            filterbasedevents_grid(month,master,workshop,city);
            filterbasedevents_list(month,master,workshop,city);
}

function filterbasedevents_grid(month,master,workshop,city){
    var eventsmonth=month.substr(0,month.indexOf(' '));
    var eventsyear=month.substr(month.indexOf(' ')+1);
    var date= new Date(eventsyear+"-"+eventsmonth);
    var newmonth=date.getMonth();
    var newyear=date.getFullYear();
    var newday=date.getDate();
    var master=master;
    var workshop=workshop;
    var city=city;
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var maindiv = document.getElementById("WH_Grid_Dektop");
    maindiv.innerHTML="";
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        this.data = [];
        this.key = [];
//        var date = new Date();
//       
        if(newmonth==today.getMonth()){
            date=new Date();
            var endDate = new Date(newyear, newmonth + 1, 0);
        }else{
            var date = new Date(newyear, newmonth, 1);
            var endDate = new Date(newyear, newmonth + 1, 0);
        }
    
        snapshot.forEach(function (child) {
            if((master!="master")&&(workshop!="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().title==workshop)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop!="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().title==workshop)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop=="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop!="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().title==workshop)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop=="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop!="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().title==workshop)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop=="workshop")&&(city!="city")){
               if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                } 
            }else{
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    this.data.push(child.val());
                    this.key.push(child.key);
                } 
            }    
        }.bind(this));
        var eventCount = data.length;
        var keycount = key.length;
        var length=eventCount/3;
            var i=1;

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
            if(document.getElementById("title"+j).innerHTML==""){
                events_set3[i].style.display="none";
            }
            j=j+3;
        }
    });
}

//FUNCTION TO DISPLAY EVENTS IN THE LSIT
function filterbasedevents_list(month,master,workshop,city){
    var eventsmonth=month.substr(0,month.indexOf(' '));
    var eventsyear=month.substr(month.indexOf(' ')+1);
    var date= new Date(eventsyear+"-"+eventsmonth);
    var newmonth=date.getMonth();
    var newyear=date.getFullYear();
    var newday=date.getDate();
    var master=master;
    var workshop=workshop;
    var city=city;
    var today = new Date();
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = today.getMonth();
    var currentMonth = months[month];
    var year = today.getFullYear();
    const dbRefObject = firebase.database().ref().child('whatshappening');
    var eventsRef = dbRefObject.child("events");
    var maindiv = document.getElementById("WH_List_Dektop");
    maindiv.innerHTML="";
    var dates = firebase.database().ref("whatshappening/events").orderByChild('fromdate').on('value', function (snapshot) {
        this.data = [];
        this.key = [];
//        var date = new Date();
//       
        if(newmonth==today.getMonth()){
            date=new Date();
            var endDate = new Date(newyear, newmonth + 1, 0);
        }else{
            var date = new Date(newyear, newmonth, 1);
            var endDate = new Date(newyear, newmonth + 1, 0);
        }
    
        snapshot.forEach(function (child) {
            if((master!="master")&&(workshop!="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().title==workshop)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop!="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().title==workshop)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop=="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop!="workshop")&&(city!="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().title==workshop)&&(child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master!="master")&&(workshop=="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().speaker==master)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop!="workshop")&&(city=="city")){
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().title==workshop)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                }
            }else if((master=="master")&&(workshop=="workshop")&&(city!="city")){
               if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    if((child.val().venue==city)){
                        this.data.push(child.val());
                        this.key.push(child.key);
                    }    
                } 
            }else{
                if ((new Date(child.val().fromdate) >= date) && (new Date(child.val().fromdate) <= endDate)) {
                    this.data.push(child.val());
                    this.key.push(child.key);
                } 
            }    
        }.bind(this));
        var eventCount = data.length;
        var keycount = key.length;
        var classindex = 1;
        var j=1;
        for (var i=1; i<= eventCount;i++){
            var eventdiv=document.createElement("div");
            eventdiv.className="div_displayTable";
            eventdiv.style="margin-bottom:5%;";
            
            
            var eventblock=document.createElement("div");
            eventblock.className="Event_Block_List";
            var link = document.createElement("a");
            link.id = "linklist" + i;
            var img = document.createElement("img");
            img.src = "images/whats_happning/Event-"+j+".png";
            img.style="width:100%";
            var eventimageinfo=document.createElement("div");
            eventimageinfo.className="event_Image_day";
            eventimageinfo.id="eventdaylist"+i;
            var eventimagemonth=document.createElement("div");
            eventimagemonth.className="event_Image_month";
            eventimagemonth.id="eventmonthlist"+i;
            
            var textdiv=document.createElement("div");
            textdiv.className="Event_Block_Details_List";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="Event_Name_List";
            title.id="titlelist"+i;
            desc.id="disclist"+i; 
            desc.className="Event_description_List"; 
            var knowmore=document.createElement("div");
            
            knowmore.className="knowMore_Event_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink"+i;
            var knowimg=document.createElement("img");
            knowimg.src="images/whats_happning/knowMore_Whats_Happening.png";
            knowimg.style="width:100%";
            
            var rss=document.createElement("div");
            rss.className="Event_Social_Media";
            rss.style="padding-right:2%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink"+i;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="Event_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink"+i;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="Event_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink"+i;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
            
            var fb=document.createElement("div");
            fb.className="Event_Social_Media";
            var fblink=document.createElement("a");
            fblink.id="fblink"+i;
            var fbimg=document.createElement("img");
            fbimg.src="images/SocialMedia_F.png";
            fbimg.style="width:100%";

            link.appendChild(img);
            eventblock.appendChild(link);
            eventblock.appendChild(eventimageinfo);
            eventblock.appendChild(eventimagemonth);
            eventdiv.appendChild(eventblock);
            
            
            textdiv.appendChild(title);
            textdiv.appendChild(desc);
            
            knowlink.appendChild(knowimg);
            knowmore.appendChild(knowlink);
            rsslink.appendChild(rssimg);
            rss.appendChild(rsslink);
            
            instalink.appendChild(instaimg);
            insta.appendChild(instalink);
            
            twitterlink.appendChild(twitterimg);
            twitter.appendChild(twitterlink);
            
            fblink.appendChild(fbimg);
            fb.appendChild(fblink);
            
            textdiv.appendChild(knowmore);
            textdiv.appendChild(rss);
            textdiv.appendChild(insta);
            textdiv.appendChild(twitter);
            textdiv.appendChild(fb);
            eventdiv.appendChild(textdiv);
            
            maindiv.appendChild(eventdiv);
            if(j==3){
                j=1;
                }else{
                    j++;
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
            var desc=val.overview;

            document.getElementById('eventdaylist'+(j+1)+'').innerHTML=eventday;
            document.getElementById('eventmonthlist'+(j+1)+'').innerHTML=eventmonth;
            document.getElementById('titlelist'+(j+1)+'').innerHTML=title;
            document.getElementById('disclist'+(j+1)+'').innerHTML=desc.substring(0,80) + "...";

        });
        key.map(function(val,j){
            var imgid=document.getElementById("linklist"+(j+1)+"");
            var knowid=document.getElementById("knowlink"+(j+1)+"");
            imgid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
            knowid.setAttribute('href','whatsHappening_SubPage_1.html?id='+val);
        });

    });
}


//<!-- /*  HERO SECTION NAVIGATION */-->
   
var EventImages_SlideIndex = 1;

function event_Next_img(n) {
	Next_Event(EventImages_SlideIndex += n,n);
}

function Next_Event(n,j) {
	var i;
	var x = document.getElementsByClassName("allEvents");
	if (n > x.length) {
		EventImages_SlideIndex = 1;
	}
	if (n < 1) {
		EventImages_SlideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
    if (j == -1) {
		x[EventImages_SlideIndex - 1].classList.remove("animate_right");
		x[EventImages_SlideIndex - 1].classList.add("animate_left");
	}
	else {
		x[EventImages_SlideIndex - 1].classList.add("animate_right");
		x[EventImages_SlideIndex - 1].classList.remove("animate_left");
	}
	x[EventImages_SlideIndex - 1].style.display = "block";
}