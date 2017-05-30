//FUNCTION TO GET THE VALUES FROM THE URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//<div class="div_displayTable">
//                    <h3 class="artical_title">HARMONISING MALE AND FEMALE ENERGY</h3>
//                    <h3 class="SubHeading">by: Birgitt Shola Starp</h3>
//                    
//                    <div class="artical_ContentDiv">
//                        <p class="articalContent">In our lifetime experience we have hardly met any other cultural model than the one we grew up with; even other countries seem to be just a variation of the same theme. We are therefore inclined to believe that our personality and individual identity is our very own – simply because we don't have any different <span class="viewMore"> <a href="articles_subPage.html#artical_1">Read More</a></span> </p>
//                    </div>
//                </div>
function displayartcles(){
    var ref =  firebase.database().ref();
    var articlesref=ref.child('thriivetalks/article');
    
    articlesref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        snapshot.forEach(function(child){
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        
        var length= data.length;
        var maindiv = document.getElementById("articles");
        for(var i=1;i<=length;i++){
            var rowdiv=document.createElement("div");
            rowdiv.className="div_displayTable";
            
            var title=document.createElement('h3');
            title.className="artical_title";
            title.id="title"+i;
            var speaker=document.createElement('h3');
            speaker.className="SubHeading";
            speaker.id="speaker"+i;
            
            var descriptiondiv=document.createElement("div");
            descriptiondiv.className="artical_ContentDiv";
            
            var desc=document.createElement("p");
            desc.className="articalContent";
            desc.id="desc"+i;
            
            
            descriptiondiv.appendChild(desc);
            
            rowdiv.appendChild(title);
            rowdiv.appendChild(speaker);
            rowdiv.appendChild(descriptiondiv);
            maindiv.appendChild(rowdiv);
        }
        var j=0;
        data.map(function(val,j){
            document.getElementById('title'+(j+1)).innerText=val.name.toLowerCase();
            document.getElementById('speaker'+(j+1)).innerText=val.author.toLowerCase();
            document.getElementById('desc'+(j+1)).innerText =val.excerpt.substr(0,200)+"...";
        });
         for(var i=1;i<=length;i++){
            var descdiv=document.getElementById('desc'+i);
            
            var readmore = document.createElement("span");
            readmore.className="viewMore";
            
            var link = document.createElement("a");
            link.id="link"+i;
            link.innerText="Read More";
            
            readmore.appendChild(link);
            descdiv.appendChild(readmore);
        }
        key.map(function(val,j){
            document.getElementById("link" + (j + 1)).setAttribute("href","articles_subPage.html?id="+val);
        });
        
    });
}