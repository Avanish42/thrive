//FUNCTION TO CHANGE THE CATEGORY
function changecategory(){
    var elem=document.getElementById('category').value;
    displayModalities_grid(elem);
    displayModalities_grid_mobile(elem);
//    displayModalities_list(elem);
//    displayModalities_list_mobile(elem);
    document.getElementById("selectedcategory").innerHTML=elem;
}

//FUNCTION TO DISPLAY MODALITIES FOR DESKTOP GRID SECTION
function displayModalities_grid(category) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities/"+category);
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('therapy_Grid_View_Desktop');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        if(data.length<1){
            document.getElementById("selectedcategory").innerHTML=category + " doesn't have any modalities";
            document.getElementById("therapy_Grid_View_Desktop").innerHTML="";
        }else{
			document.getElementById("therapy_Grid_View_Desktop").innerHTML="";
           for (j = 1; j < data.length+1; j++) {
            var i=1;
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
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.iconurl;
            document.getElementById('img'+(j+1)+'').setAttribute("src",img);
            document.getElementById('title'+(j+1)+'').innerHTML=val.name;

        });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
        			
                });
    });
}


//FUNCTION TO DISPLAY MODALITIES FOR MOBILE GRID SECTION
function displayModalities_grid_mobile(category) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities/"+category);
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('therapy_Grid_View_Mobile');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
//        var i = 0;
        var length=data.length/2;
            var i=1;
		document.getElementById("therapy_Grid_View_Mobile").innerHTML="";
        for (var j = 1; j < length+1; j++) {
            var rowdiv= document.createElement("div");
            rowdiv.className="div_displayTable";
            for(var k=1;k<=2;k++){
                var therapy = document.createElement("div");
                therapy.className="therapy1";
                therapy.id = "therapy_mobile" + i;
                var link = document.createElement("a");
                link.id = "link_mobile" + i;
                var img = document.createElement("img");
                img.id = "img_mobile" + i;
                img.style="width:60%";
                var title=document.createElement("h3");
                title.className="therapy_program_Name";
                title.id="title_mobile"+i;

                link.appendChild(img);
                therapy.appendChild(link);
                therapy.appendChild(title);
                rowdiv.appendChild(therapy);
                i=i+1;
            }
            section.appendChild(rowdiv);
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('img_mobile'+(j+1)+'').setAttribute("src",val.iconurl);
            document.getElementById('title_mobile'+(j+1)+'').innerHTML=val.name;

        });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link_mobile"+(j+1)+"");
                    id.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
        			
                });
        //        console.log(data);
    });
}

//FUNCTION TO DISPLAY MODALITIES FOR MOBILE GRID SECTION
function displayModalities_list(category) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities/"+category);
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('therapy_List_View_Desktop');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
            document.getElementById("therapy_List_View_Desktop").innerHTML="";
        if(data.length<1){
            document.getElementById("selectedcategory").innerHTML=category + " doesn't have any modalities";
            document.getElementById("therapy_List_View_Desktop").innerHTML="";
        }else{
			document.getElementById("therapy_List_View_Desktop").innerHTML="";
        for (j = 1; j < data.length+1; j++) {
            var i=1;
            var therapy = document.createElement("div");
            therapy.className = "div_displayTable therapy_list_Div";
            var icondiv=document.createElement("div");
            icondiv.className="therapy_list_Img_div";
            var link = document.createElement("a");
            link.id = "linklist" + j;
            var img = document.createElement("img");
            img.id = "imglist" + j;
            img.style="width:90%";
            var textdiv=document.createElement("div");
            textdiv.className="therapy_list_Img_content_div";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="therapy_Name_List";
            title.id="titlelist"+j;
            desc.id="disclist"+j; 
            desc.className="therapy_description_List"; 
            var knowmore=document.createElement("div");
            knowmore.className="knowMore_Therapy_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink"+j;
            var knowimg=document.createElement("img");
            knowimg.src="images/theraphy/knowMore.png";
            knowimg.style="width:100%";
            var rss=document.createElement("div");
            rss.className="therapy_Social_Media";
            rss.style="padding-right:4%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink"+j;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="therapy_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink"+j;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="therapy_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink"+j;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
//
//            <div class="fb-share-button" data-href="https://thriivedev-9673e.firebaseapp.com/therapy.html" data-layout="button" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthriivedev-9673e.firebaseapp.com%2Ftherapy.html&amp;src=sdkpreparse">Share</a></div>
            
            
            var fb=document.createElement("div");
            fb.className="therapy_Social_Media fb-share-button";
            fb.setAttribute("data-mobile-ifrme", "true");
            fb.setAttribute("data-layout","button");
            fb.setAttribute("data-size","small");
            fb.setAttribute("data-href","https://thriivedev-9673e.firebaseapp.com/therapy.html");
            fb.id="fb"+j;
            var fblink=document.createElement("a");
            fblink.className="fb-xfbml-parse-ignore";
            fblink.setAttribute("target","_blank")
            fblink.href="https://www.facebook.com/sharer/sharer.phpu=https%3A%2F%2Fthriivebeta.in%2Ftherapy.html&amp;src=sdkprepa";
            var fbimg=document.createElement("img");
            fbimg.src="images/SocialMedia_F.png";
            fbimg.style="width:100%";
            
            
            link.appendChild(img);
            icondiv.appendChild(link);
            therapy.appendChild(icondiv);
            
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
            therapy.appendChild(textdiv);
            section.appendChild(therapy);
            if(i==5){
                i=1;
            }
            else{
                i=i+1;
            }
        }
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.iconurl;
            document.getElementById('imglist'+(j+1)+'').setAttribute("src",img);
            document.getElementById('titlelist'+(j+1)+'').innerHTML=val.name;
            document.getElementById('disclist'+(j+1)+'').innerHTML=val.modalitydesc.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var imgid=document.getElementById("linklist"+(j+1)+"");
                    var knowid=document.getElementById("knowlink"+(j+1)+"");
                    var fbid=document.getElementById("fb"+(j+1)+"");
                    imgid.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
                    knowid.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
                    fbid.setAttribute('data-href','therapy_subPage.html?id='+val+'&category='+category);
        			
                });
        //        console.log(data);
    });
}


//FUNCTION TO DISPLAY MODALITIES FOR MOBILE LIST SECTION
function  displayModalities_list_mobile(category) {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("modalities/"+category);
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('therapy_List_View_Mobile');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
		document.getElementById("therapy_List_View_Mobile").innerHTML="";
        for (j = 1; j < data.length+1; j++) {
            var i=1;
            var therapy = document.createElement("div");
            therapy.className = "div_displayTable";
            therapy.style = "padding: 0% 6% 0% 0%; width:100%; margin-bottom:5%";
            var icondiv=document.createElement("div");
            icondiv.className="therapy_List_image_div";
            var link = document.createElement("a");
            link.id = "linklist_mobile" + j;
            var img = document.createElement("img");
            img.id = "imglist_mobile" + j;
            img.style="width:90%";
            var textdiv=document.createElement("div");
            textdiv.className="therapy_list_Img_content_div";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="therapy_Name_List";
            title.id="titlelist_mobile"+j;
            desc.id="disclist_mobile"+j; 
            desc.className="therapy_description_List"; 
            var knowmore=document.createElement("div");
            knowmore.className="knowMore_Therapy_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink_mobile"+j;
            var knowimg=document.createElement("img");
            knowimg.src="images/theraphy/knowMore.png";
            knowimg.style="width:100%";
            
            var rss=document.createElement("div");
            rss.className="therapy_Social_Media";
            rss.style="padding-right:4%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink"+j;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="therapy_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink"+j;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="therapy_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink"+j;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
            
            var fb=document.createElement("div");
            fb.className="therapy_Social_Media";
            var fblink=document.createElement("a");
            fblink.id="fblink"+j;
            var fbimg=document.createElement("img");
            fbimg.src="images/SocialMedia_F.png";
            fbimg.style="width:100%";
            
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
            
            therapy.appendChild(textdiv);
            
            
            link.appendChild(img);
            icondiv.appendChild(link);
            therapy.appendChild(icondiv);
            section.appendChild(therapy);
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.iconurl;
            document.getElementById('imglist_mobile'+(j+1)+'').setAttribute("src",img);
            document.getElementById('titlelist_mobile'+(j+1)+'').innerHTML=val.name;
            document.getElementById('disclist_mobile'+(j+1)+'').innerHTML=val.modalitydesc.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var imgid=document.getElementById("linklist_mobile"+(j+1)+"");
                    var knowid=document.getElementById("knowlink_mobile"+(j+1)+"");
                    imgid.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
                    knowid.setAttribute('href','therapy_subPage.html?id='+val+'&category='+category);
        			
                });
    });
}

//FUNCTION TO CHNAGE THE VIEW FROM GRID TO LIST VIEW
function forListView() {
    document.getElementById("gridview").style.display = "none";
    document.getElementById("listview").style.display = "block";
    if (window.innerWidth > 736) {
        document.getElementById("therapy_List_View_Desktop").style.display = "block";
        document.getElementById("therapy_List_View_Mobile").style.display = "none";
    }
    else {
        document.getElementById("therapy_List_View_Desktop").style.display = "none";
        document.getElementById("therapy_List_View_Mobile").style.display = "block";
    }
    document.getElementById("therapy_Grid_View_Desktop").style.display = "none";
    document.getElementById("therapy_Grid_View_Mobile").style.display = "none";
}

//FUNCTION TO CHNAGE THE VIEW FROM GLIST TO GRID VIEW
function forGridView() {
    document.getElementById("listview").style.display = "none";
    document.getElementById("gridview").style.display = "block";
    if (window.innerWidth > 736) {
        document.getElementById("therapy_Grid_View_Desktop").style.display = "block";
        document.getElementById("therapy_Grid_View_Mobile").style.display = "none";
    }
    else {
        document.getElementById("therapy_Grid_View_Desktop").style.display = "none";
        document.getElementById("therapy_Grid_View_Mobile").style.display = "block";
    }
    document.getElementById("therapy_List_View_Desktop").style.display = "none";
    document.getElementById("therapy_List_View_Mobile").style.display = "none";
}

//FUNCTION CALLS ON PAGE RELOAD AND PAGE RESIZE
//window.onload = forGridView;
//window.onresize = forGridView;


