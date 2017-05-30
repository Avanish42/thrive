//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function fetchdata(content){
    const dbRefObject = firebase.database().ref().child('thriivetalks');
    var categoryref = dbRefObject.child("article");
    var eventid= getUrlVars()['id'];
    var modality = categoryref.child(eventid);
    modality.on('value', function (snapshot) {
        var text=document.getElementById(content);
        if(content=="description"){
            document.getElementById(content).innerHTML=snapshot.child(content).val();
        }else{
            document.getElementById(content).innerText=snapshot.child(content).val();
        }    
	});
}

    
function displayOtherArticles(){
    var videos = firebase.database().ref("thriivetalks/article").on('value', function (snapshot) {
		this.data = [];
		this.key = [];
        var eventid = getUrlVars()['id'];
		snapshot.forEach(function (child) {
            if(child.key!=eventid){
                this.data.push(child.val());
			    this.key.push(child.key);
            }
		}.bind(this));
        var length=data.length;
        var maindiv=document.getElementById("otherarticles");
        for(var i=1;i<=length;i++){
            var article=document.createElement("h3");
            article.className="other_article_name";
            
            var link=document.createElement("a");
            link.id="link"+i;
            
            article.appendChild(link);
            maindiv.appendChild(article);
            
        }
        var j=0;
        data.map(function(val,j){
            document.getElementById('link'+(j+1)).innerText=val.name;
        });
        var j=0;
        key.map(function(val,j){
            document.getElementById("link" + (j + 1)).setAttribute("href","articles_subpage.html?id="+val);
        });
    });
}

//var length=data.length;
//        var maindiv=document.getElementById('otherarticles');
//        for(var i=1;i<=length;i++){
//            var article=document.createAttribute("h3");
//            article.className="other_article_name";
//            
//            var link=document.createAttribute("a");
//            link.id="link"+i;
//            
//            article.appendChild(link);
//            maindiv.appendChild(article);
//           
//        }
        