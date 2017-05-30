//FUNCTION TO DISPLAY WSP'S DESKTOP GRID SECTION
function display_practitioner_section_grid_desktop() {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("practitioner");
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var gridsection = document.getElementById('practitioners_Grid_View_Desktop');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        var i=1;
        var length=data.length;
        length=length/3;
        for (j = 1; j < length+1; j++) {
            var rowdiv=document.createElement("div");
            rowdiv.className="div_displayTable";
            rowdiv.style="padding: 0% 0% 3% 3%;";
            for(var k=1;k<=3;k++){
                var therapy = document.createElement("div");
//                therapy.className="therapy" + i;
                therapy.className = "practitioner_image_div" + k;
                var icondiv=document.createElement("div");
                var link = document.createElement("a");
                link.id = "link" + i;
                var img = document.createElement("img");
                img.id = "img" + i;
                img.style="width:100%";
                var textdiv=document.createElement("div");
                var title=document.createElement("h3");
                title.className="practitioner_Name";
                title.id="title"+i;
                var desc=document.createElement("h4");
                desc.className="practitioner_description";
                desc.id="desc"+i;
                textdiv.appendChild(title);
                textdiv.appendChild(desc);
                link.appendChild(img);
                icondiv.appendChild(link);
                therapy.appendChild(icondiv);
                therapy.appendChild(textdiv);
                rowdiv.appendChild(therapy);
                i++;
            }
                gridsection.appendChild(rowdiv);
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('img'+(j+1)+'').setAttribute("src",val.img);
            document.getElementById('title'+(j+1)+'').innerHTML=val.name;
//            document.getElementById('desc'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link"+(j+1)+"");
                    id.setAttribute('href','practitioners_subpage.html?id='+val+'');
        			
                });
        var practitioners_set2=document.getElementsByClassName("practitioner_image_div2");
        var j=2;
        for(i=0;i<practitioners_set2.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set2[i].style.display="none";
            }
            j=j+3;
        }
        var practitioners_set1=document.getElementsByClassName("practitioner_image_div3");
        var j=3;
        for(i=0;i<practitioners_set1.length;i++){
            if(document.getElementById("title"+j).innerHTML==""){
                practitioners_set1[i].style.display="none";
            }
            j=j+3;
        }
        
    });
}


//FUNCTION TO DISPLAY WSP'S DESKTOP LIST SECTION
function display_practitioner_section_list_desktop() {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("practitioner");
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('practitioners_List_View_Desktop');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        for (j = 1; j < data.length+1; j++) {
            var i=1;
            var therapy = document.createElement("div");
            therapy.className = "div_displayTable";
            therapy.style="padding: 0% 6% 0% 0%; width:100%; margin-bottom:5%;";
            var icondiv=document.createElement("div");
            icondiv.className="practitioner_image_div_List_View";
            var link = document.createElement("a");
            link.id = "linklist" + j;
            var img = document.createElement("img");
            img.id = "imglist" + j;
            img.style="width:100%";
            var textdiv=document.createElement("div");
            textdiv.className="practitioner_Content_List";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="practitioner_Name_List";
            title.id="titlelist"+j;
            desc.id="disclist"+j; 
            desc.className="practitioner_description_List"; 
            var knowmore=document.createElement("div");
            knowmore.className="knowMore_Therapy_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink"+j;
            var knowimg=document.createElement("img");
            knowimg.src="images/theraphy/knowMore.png";
            knowimg.style="width:100%";
            
            var rss=document.createElement("div");
            rss.className="practitioner_Social_Media";
            rss.style="padding-right:4%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink"+j;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="practitioner_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink"+j;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="practitioner_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink"+j;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
            
            var fb=document.createElement("div");
            fb.className="practitioner_Social_Media";
            var fblink=document.createElement("a");
            fblink.id="fblink"+j;
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
            
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('imglist'+(j+1)+'').setAttribute("src",val.img);
            document.getElementById('titlelist'+(j+1)+'').innerHTML=val.name;
            document.getElementById('disclist'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var imgid=document.getElementById("linklist"+(j+1)+"");
                    var knowid=document.getElementById("knowlink"+(j+1)+"");
                    imgid.setAttribute('href','practitioners_SubPage.html?id='+val+'');
                    knowid.setAttribute('href','practitioners_SubPage.html?id='+val+'');
        			
            });
    });
}

             
//FUNCTION TO DISPLAY WSP'S MOBILE LIST SECTION
function display_practitioner_section_list_mobile() {
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("practitioner");
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var section = document.getElementById('practitioners_List_View_Mobile');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        for (j = 1; j < data.length+1; j++) {
            var i=1;
            var therapy = document.createElement("div");
            therapy.className = "div_displayTable";
            therapy.style="padding: 0% 6% 0% 0%; width:100%; margin-bottom:5%";
            var icondiv=document.createElement("div");
            icondiv.className="practitioner_image_div_List_View_Mobile";
            var link = document.createElement("a");
            link.id = "linklist_mobile" + j;
            var img = document.createElement("img");
            img.id = "imglist_mobile" + j;
            img.style="width:100%";
            var textdiv=document.createElement("div");
            textdiv.className="practitioner_Content_List";
            var title=document.createElement("h3");
            var desc=document.createElement("h4");
            title.className="practitioner_Name_List";
            title.id="titlelist_mobile"+j;
            desc.id="disclist_mobile"+j; 
            desc.className="practitioner_description_List"; 
            var knowmore=document.createElement("div");
            knowmore.className="knowMore_Therapy_L";
            var knowlink=document.createElement("a");
            knowlink.id="knowlink_mobile"+j;
            var knowimg=document.createElement("img");
            knowimg.src="images/theraphy/knowMore.png";
            knowimg.style="width:100%";
            
            var rss=document.createElement("div");
            rss.className="practitioner_Social_Media";
            rss.style="padding-right:4%";
            var rsslink=document.createElement("a");
            rsslink.id="rsslink_mobile"+j;
            var rssimg=document.createElement("img");
            rssimg.src="images/SocialMedia_B.png";
            rssimg.style="width:100%";
            
            var insta=document.createElement("div");
            insta.className="practitioner_Social_Media";
            var instalink=document.createElement("a");
            instalink.id="instalink_mobile"+j;
            var instaimg=document.createElement("img");
            instaimg.src="images/SocialMedia_I.png";
            instaimg.style="width:100%";
            
            var twitter=document.createElement("div");
            twitter.className="practitioner_Social_Media";
            var twitterlink=document.createElement("a");
            twitterlink.id="twitterlink_mobile"+j;
            var twitterimg=document.createElement("img");
            twitterimg.src="images/SocialMedia_T.png";
            twitterimg.style="width:100%";
            
            var fb=document.createElement("div");
            fb.className="practitioner_Social_Media";
            var fblink=document.createElement("a");
            fblink.id="fblink_mobile"+j;
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
            
        
            link.appendChild(img);
            icondiv.appendChild(link);
            therapy.appendChild(icondiv);
            
            
            section.appendChild(therapy);
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('imglist_mobile'+(j+1)+'').setAttribute("src",val.img);
            document.getElementById('titlelist_mobile'+(j+1)+'').innerHTML=val.name;
//            document.getElementById('disclist_mobile'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var imgid=document.getElementById("linklist_mobile"+(j+1)+"");
                    var knowid=document.getElementById("knowlink_mobile"+(j+1)+"");
                    imgid.setAttribute('href','practitioners_SubPage.html?id='+val+'');
                    knowid.setAttribute('href','practitioners_SubPage.html?id='+val+'');
        			
            });
    });
}

//FUNCTION TO DISPLAY WSP'S MOBILE GRID SECTION
function display_practitioner_section_grid_mobile(){
    const dbRefObject = firebase.database().ref().child('therapies');
    var modalityref = dbRefObject.child("practitioner");
    modalityref.on('value', function (snapshot) {
        this.data = [];
        this.key = [];
        var gridsection = document.getElementById('practitioners_Grid_View_Mobile');
        snapshot.forEach(function (child) {
            this.data.push(child.val());
            this.key.push(child.key);
        }.bind(this));
        var j = 0;
        var i=1;
        var length=data.length;
        length=length/2;
        for (j = 1; j < length+1; j++) {
            var rowdiv=document.createElement("div");
            rowdiv.className="div_displayTable";
            rowdiv.style="margin: 0% 0% 3% 3%;";
            for(var k=1;k<=2;k++){
                var therapy = document.createElement("div");
//                therapy.className="therapy" + i;
                therapy.className = "practitioner_image_div_Mobile_GridView" + k;
                var icondiv=document.createElement("div");
                var link = document.createElement("a");
                link.id = "link_mobile" + i;
                var img = document.createElement("img");
                img.id = "img_mobile" + i;
                img.style="width:100%";
                var textdiv=document.createElement("div");
                var title=document.createElement("h3");
                title.className="practitioner_Name";
                title.id="title_mobile"+i;
                var desc=document.createElement("h4");
                desc.className="practitioner_description";
                desc.id="desc_mobile"+i;
                textdiv.appendChild(title);
                textdiv.appendChild(desc);
                link.appendChild(img);
                icondiv.appendChild(link);
                therapy.appendChild(icondiv);
                therapy.appendChild(textdiv);
                rowdiv.appendChild(therapy);
                i++;
            }
                gridsection.appendChild(rowdiv);
//                gridsection.appendChild('<br>');
                
        }
        data.map(function (val, j) {
            var name = val.name;
            var img = val.img;
            document.getElementById('img_mobile'+(j+1)+'').setAttribute("src",val.img);
            document.getElementById('title_mobile'+(j+1)+'').innerHTML=val.name;
//            document.getElementById('desc_mobile'+(j+1)+'').innerHTML=val.about.substring(0,80) + "...";

        });
                key.map(function(val,j){
                    
                    var id=document.getElementById("link_mobile"+(j+1)+"");
                    id.setAttribute('href','practitioners_subpage.html?id='+val+'');
        			
                });
        var practitioners_set2=document.getElementsByClassName("practitioner_image_div_Mobile_GridView2");
        var j=2;
        for(i=0;i<practitioners_set2.length;i++){
            if(document.getElementById("title_mobile"+j).innerHTML==""){
                practitioners_set2[i].style.display="none";
            }
            j=j+2;
        }
        
    });
}