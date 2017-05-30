// FUNTION TO GET THE ID AND CATEGORY FROM URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

window.onload=loadAmbassodor;
function loadAmbassodor(){
    var id=getUrlVars()['id'];
    document.getElementById("jasmuheen").style.display="none";
    document.getElementById("christian").style.display="none";
    document.getElementById("ilona").style.display="none";
    document.getElementById("judi").style.display="none";
    document.getElementById("alex").style.display="none";
    document.getElementById("raechandran").style.display="none";
    document.getElementById("erik").style.display="none";
    document.getElementById(id).style.display="inline-block";
    
    document.getElementById("jasmuheen_thum").style.display="inline-table";
    document.getElementById("christian_thum").style.display="inline-table";
    document.getElementById("ilona_thum").style.display="inline-table";
    document.getElementById("judi_thum").style.display="inline-table";
    document.getElementById("alex_thum").style.display="inline-table";
    document.getElementById("raechandran_thum").style.display="inline-table";
    document.getElementById("erik_thum").style.display="inline-table";
    if(id=="jasmuheen"){
      document.getElementById("jasmuheen_thum").style.display="none";  
    }else if(id=="christian"){
      document.getElementById("christian_thum").style.display="none";  
    }else if(id=="ilona"){
      document.getElementById("ilona_thum").style.display="none";  
    }else if(id=="judi"){
      document.getElementById("judi_thum").style.display="none";  
    }else if(id=="alex"){
      document.getElementById("alex_thum").style.display="none";  
    }else if(id=="raechandran"){
      document.getElementById("raechandran_thum").style.display="none";  
    }else{
      document.getElementById("erik_thum").style.display="none";  
    }
}

//function displayjasmuheen(){
//    document.getElementById("jasmuheen").style.display="block";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("jasmuheen_thum").style.display="none";
//      document.getElementById("christian_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayChristian(){
//    document.getElementById("christian").style.display="block";
//    document.getElementById("jasmuheen").style.display="none";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("christian_thum").style.display="none";
//    document.getElementById("jasmuheen_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayIlona(){
//    document.getElementById("ilona").style.display="block";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("jasmuheen").style.display="none";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("ilona_thum").style.display="none";
//    document.getElementById("christian_thum").style.display="block";
//    document.getElementById("jasmuheen_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayJudi(){
//    document.getElementById("judi").style.display="block";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("jasmuheen").style.display="none";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("judi_thum").style.display="none";
//    document.getElementById("christian_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("jasmuheen_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayAlex(){
//    document.getElementById("alex").style.display="block";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("jasmuheen").style.display="none";
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("alex_thum").style.display="none";
//    document.getElementById("christian_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("jasmuheen_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayRaechandran(){
//    document.getElementById("raechandran").style.display="block";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("jasmuheen").style.display="none";
//    document.getElementById("erik").style.display="none";
//    
//    document.getElementById("raechandran_thum").style.display="none";
//    document.getElementById("christian_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("jasmuheen_thum").style.display="block";
//    document.getElementById("erik_thum").style.display="block";
//}
//
//function displayErik(){
//    document.getElementById("erik").style.display="block"
//    document.getElementById("raechandran").style.display="none";
//    document.getElementById("alex").style.display="none";
//    document.getElementById("judi").style.display="none";
//    document.getElementById("ilona").style.display="none";
//    document.getElementById("christian").style.display="none";
//    document.getElementById("jasmuheen").style.display="none";
//    
//    document.getElementById("erik_thum").style.display="none"
//    document.getElementById("christian_thum").style.display="block";
//    document.getElementById("ilona_thum").style.display="block";
//    document.getElementById("judi_thum").style.display="block";
//    document.getElementById("alex_thum").style.display="block";
//    document.getElementById("raechandran_thum").style.display="block";
//    document.getElementById("jasmuheen_thum").style.display="block";
//}






