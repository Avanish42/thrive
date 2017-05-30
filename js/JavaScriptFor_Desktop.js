

//FUNCTION TO APPEND THRIIVE TALK VALUES FROM DATABASE
function appendthriivetalkvalues() {
	var dates = firebase.database().ref("thriivetalks/blog").limitToLast(3).on('value', function (snapshot) {
		this.data = [];
		snapshot.forEach(function (child) {
			this.data.push(child.val());
		}.bind(this));
		var eventCount = data.length;
		data.map(function (val, j) {
			for (j; j < eventCount; j++) {
				var title = val.name;
				var author = val.author;
				var url = val.url;
				if(title.length>35){
				var name = limitString(title,35);
					title= name+'...';
				}else{
					title= title;
				}
				document.getElementById("blog"+(j+1)).setAttribute('href',url);
				document.getElementById("blogauthor" + (j+1)).innerText = author;
				document.getElementById("desc" + (j+1)).innerText = title;
			}
		});
	});
}


// FUNCTION TO LIMIT CHARACTERS IN A STRING //
function limitString(text,length){
	if(text.length > length) text = text.substring(0,length);
	return text;
}

//-- FUNCTION FOR TESTIMONIAL QUOTES-DESKTOP & MOBILE --//
function display_testimonial(page) {
	var dates = firebase.database().ref("quotes");
	var quoteref=dates.child(page).limitToFirst(5).on('value', function (snapshot) {
		this.data = [];
		snapshot.forEach(function (child) {
			this.data.push(child.val());
		}.bind(this));
		var eventCount = data.length;
		var eventcode = [];
		var classindex = 1;
		for (var i = 1; i <= eventCount; i++) {
			eventcode.push('<div class="quoteslide zoom" style="margin-top:-29%;" >\
										<h3 class="testimonialText-1" id="quote' + i + '"></h3>\
                         				<h3 class="testimonialText-2" id="author' + i + '"></h3>\
                         				<h4 class="testimonialText-3" id="place' + i + '"></h4>\
							</div>');
		}
		eventcode.toString();
		for (var i = 0; i < eventCount; i++) {
			document.getElementById("thriivequotes").innerHTML += eventcode[i];
		}
		data.map(function (val, j) {
			for (j; j < eventCount; j++) {
				var quote = val.quote;
				var author = val.author;
				var place = val.place;
				document.getElementById("quote" + (j + 1)).innerText = quote;
				document.getElementById("author" + (j + 1)).innerText = author;
			}
		});
		quotecarousel();
	});
}
var myIndex = 0;

//FUNCTION TO DISPLAY TESTIMONIALS AT REGULAR INTERVALS
function quotecarousel() {
	var i;
	var x = document.getElementsByClassName("quoteslide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(quotecarousel, 6000);
}


//<!-- /* FUNCTION FOR THRIIVE PILLAR MOBILE NAVIGATION */-->
var Thriive_PillarMobile_slideIndex = 1;

function Pillar_Next_img(n) {
	Pillar_Mobile_showDivs(Thriive_PillarMobile_slideIndex += n,n);
}

function Pillar_Mobile_showDivs(n,j) {
	var i;
	var x = document.getElementsByClassName("ThriivePillar_Mobile_Div");
	if (n > x.length) {
		Thriive_PillarMobile_slideIndex = 1;
	}
	if (n < 1) {
		Thriive_PillarMobile_slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
    if (j == -1) {
		x[Thriive_PillarMobile_slideIndex - 1].classList.remove("animate_right");
		x[Thriive_PillarMobile_slideIndex - 1].classList.add("animate_left");
	}
	else {
		x[Thriive_PillarMobile_slideIndex - 1].classList.add("animate_right");
		x[Thriive_PillarMobile_slideIndex - 1].classList.remove("animate_left");
	}
	x[Thriive_PillarMobile_slideIndex - 1].style.display = "block";
}

//function fadeIn(element) {
//	element.style.opacity = 0;
//	var Mobile_tick = function () {
//		element.style.opacity = +element.style.opacity + 0.01;
//		if (+element.style.opacity < 1) {
//			(window.requestAnimationFrame && requestAnimationFrame(Mobile_tick)) || setTimeout(Mobile_tick, 16)
//		}
//	};
//	Mobile_tick();
//}


//<!-- /*  THRIIVE HEALAR SECTION MOBILE NAVIGATION */-->
   
var Thriive_Healer_slideIndex = 1;

function healer_Next_img(n) {
	healer_Mobile_showDivs(Thriive_Healer_slideIndex += n,n);
}

function healer_Mobile_showDivs(n,j) {
	var i;
	var x = document.getElementsByClassName("healer_Div");
	if (n > x.length) {
		Thriive_Healer_slideIndex = 1;
	}
	if (n < 1) {
		Thriive_Healer_slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
    if (j == -1) {
		x[Thriive_Healer_slideIndex - 1].classList.remove("animate_right");
		x[Thriive_Healer_slideIndex - 1].classList.add("animate_left");
	}
	else {
		x[Thriive_Healer_slideIndex - 1].classList.add("animate_right");
		x[Thriive_Healer_slideIndex - 1].classList.remove("animate_left");
	}
	x[Thriive_Healer_slideIndex - 1].style.display = "block";
}
 
    

