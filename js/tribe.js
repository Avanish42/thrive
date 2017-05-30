//ON PAGE RESIZE FUNCTION TO MAKE THE IMAGES RESPONSIVE
window.onresize = function () {
    if (window.innerWidth < 736) {
        var Mobile_slideIndex = 1;
        var Mobile_slideIndex_triiveFriends = 1;
        Mobile_showDivs(Mobile_slideIndex);
        Mobile_showDivs_triiveFriends(Mobile_slideIndex_triiveFriends);
    }
    else {
        location.reload();
    }
}


//ON PAGE LOAD FUNCTION TO MAKE THE IMAGES RESPONSIVE
window.onload = function () {
    if (window.innerWidth < 736) {
        var Mobile_slideIndex = 1;
        var Mobile_slideIndex_triiveFriends = 1;
        Mobile_showDivs(Mobile_slideIndex);
//        Mobile_showDivs_triiveFriends(Mobile_slideIndex_triiveFriends);
    }
}

//FUNCTION TO NAVIGATE MOBILE AMBASSODR IN THE MOBILE
var Mobile_slideIndex = 1;

function global_ambassador_navigations(n) {
    Mobile_showDivs(Mobile_slideIndex += n);
}

function Mobile_showDivs(n) {
    var i;
    var x = document.getElementsByClassName("tribe_speaker_Div");
    if (n > x.length) {
        Mobile_slideIndex = 1;
    }
    if (n < 1) {
        Mobile_slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    fadeIn(x[Mobile_slideIndex - 1]);
    x[Mobile_slideIndex - 1].style.display = "block";
}

function fadeIn(element) {
    element.style.opacity = 0;
    var Mobile_tick = function () {
        element.style.opacity = +element.style.opacity + 0.01;
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(Mobile_tick)) || setTimeout(Mobile_tick, 16)
        }
    };
    Mobile_tick();
}

//	THRIIVE FRIENDS NAVIGATION FUNCTION
var Mobile_slideIndex_triiveFriends = 1;

function thrrive_friends_navigations(n) {
    Mobile_showDivs_triiveFriends(Mobile_slideIndex_triiveFriends += n);
}

function Mobile_showDivs_triiveFriends(n) {
    var i;
    var x = document.getElementsByClassName("tribe_friend_Div");
    if (n > x.length) {
        Mobile_slideIndex_triiveFriends = 1;
    }
    if (n < 1) {
        Mobile_slideIndex_triiveFriends = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    fadeIn(x[Mobile_slideIndex_triiveFriends - 1]);
    x[Mobile_slideIndex_triiveFriends - 1].style.display = "block";
}

function fadeIn(element) {
    element.style.opacity = 0;
    var Mobile_tick = function () {
        element.style.opacity = +element.style.opacity + 0.01;
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(Mobile_tick)) || setTimeout(Mobile_tick, 16)
        }
    };
    Mobile_tick();
}



function displayJasmoheen(){
    document.getElementById("jasmoheen").style.display="block";
    document.getElementById("christian").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("jasmoheen_thum").style.display="none";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayChristian(){
    document.getElementById("christian").style.display="block";
    document.getElementById("jasmoheen").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("christian_thum").style.display="none";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayIlona(){
    document.getElementById("ilona").style.display="block";
    document.getElementById("christian").style.display="none";
    document.getElementById("jasmoheen").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("ilona_thum").style.display="none";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayJudi(){
    document.getElementById("judi").style.display="block";
    document.getElementById("ilona").style.display="none";
    document.getElementById("christian").style.display="none";
    document.getElementById("jasmoheen").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("judi_thum").style.display="none";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayAlex(){
    document.getElementById("alex").style.display="block";
    document.getElementById("judi").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("christian").style.display="none";
    document.getElementById("jasmoheen").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("alex_thum").style.display="none";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayRaechandran(){
    document.getElementById("raechandran").style.display="block";
    document.getElementById("alex").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("christian").style.display="none";
    document.getElementById("jasmoheen").style.display="none";
    document.getElementById("erik").style.display="none";
    
    document.getElementById("raechandran_thum").style.display="none";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
}

function displayErik(){
    document.getElementById("erik").style.display="block"
    document.getElementById("raechandran").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("christian").style.display="none";
    document.getElementById("jasmoheen").style.display="none";
    
    document.getElementById("erik_thum").style.display="none"
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("jasmoheen_thum").style.display="inline-table";
}