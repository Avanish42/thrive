//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


function openConformationEvent(){
    document.getElementById("myModal").style.display="block";
}

function closeModal(){
    document.getElementById("myModal").style.display="none";
}