

//FUNCTION FOR DISPLAYING MENU

function display_menu(active_item){
    
    document.write('<div id="menu" class="overlay">\
        <div id="MenuDiv">\
            <div id="LeftSideMenu">\
                 <a href="#"><div class="close"><img id="menu_close_Img" src="images/Close_Button.png" onclick="closemenu()"></div></a>\
<span class="homeButton"><a href="index.html"><img src="images/home.png" width="100%"></span>\
                <br>\
                <br>\
                <a href="ourstory.html"><div id="our_story_div" class="menu_itmes active" onmouseover="activate_ourstory_img()">OUR STORY</div></a>\
                <a href="tribe.html"><div id="thriive_tribe_div" class="menu_itmes" onmouseover="activate_thriive_tribe_img()">THRIIVE TRIBE</div></a>\
                <a href="whatsHappening.html"><div id="whats_happening_div" class="menu_itmes" onmouseover="activate_whats_happening_img()">WHAT\'S HAPPENING!</div></a>\
                <a href="therapy.html"><div id="therapist_div" class="menu_itmes" onmouseover="activate_therapies_img()">THERAPIES</div></a>\
                <a href="thriive_world.html"><div id="thriive_world_div" class="menu_itmes" onmouseover="activate_thriive_world_img(); display_thriive_world_submenu();" onmouseout="hide_thriive_world_submenu()">THRIIVE WORLD\
                  </div></a>\
				<div id="thriive_world_sub_menu" onmouseover="display_thriive_world_submenu();" class="submenu-fadein">\
					<a href="thriive_world_audio_videos.html"><div id="thriive_world_gallery_div" class="menu_itmes">wisdom videos/audios</div></a>\
					<a href="thriive_world_music.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">thriive music</div></a>\
					<a href="thriive_world_guided_meditation.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">guided meditation</div></a>\
					<a href="http://thriivein.blogspot.in/" target="_blank"><div id="thriive_world_thriive_talks_div" class="menu_itmes">thriive talks</div></a>\
					<a href="articles.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">articles</div></a>\
					<a href="news_letters_tw.html"><div id="thriive_world_newsletter_div" class="menu_itmes">newsletter</div></a>\
				</div>\
                <div class="signupnewsletter"><a href="news_letters.html"><img id="signupNewsLetterImg" src="images/Signup_For_NewsLetters.png" width="80%" onclick="closemenu()"></a></div>\
                <a href=""><p style="color:#fff; margin-left:12%">Terms and Conditions</p></a>\
            </div>\
            <div id="RightSideMenu">\
                 <img id="our_story_img" src="images/our-story.jpg" width="100%">\
                 <img id="thriive_tribe_img" src="images/thriive-tribe.png" width="100%">\
                 <img id="whats_happening_img" src="images/whats-happening.png" width="100%">\
                 <img id="thriive_therapy_img" src="images/therapies.png" width="100%">\
                 <img id="thriive_world_img" src="images/thriive-world.png" width="100%">\
            </div>\
        </div>\
    </div>');
    switch(active_item){
        case "ourstory" :
            document.getElementById("our_story_div").classList.add("active_highlight");
            break;
        case "therapy" :
            document.getElementById("therapist_div").classList.add("active_highlight");
            break;
        case "tribe" :
            document.getElementById("thriive_tribe_div").classList.add("active_highlight");
            break;
        case "whatshappening" :
            document.getElementById("whats_happening_div").classList.add("active_highlight");
            break;
        case "whatshappening" :
            document.getElementById("whats_happening_div").classList.add("active_highlight");
            break;
        case "thriiveworld" :
            document.getElementById("thriive_world_div").classList.add("active_highlight");
            break;
    }
}

//FUNCTION FOR DISPLAYING PAGE HEADER-2 (with css)
function display_header_2(){
    document.write('<div class="maindiv">\
    <!--TOGGLE BUTTON DIV-->\
    <div class="leftDiv">\
        <a class="anchorTagButton"><img src="images/menuIcon_3.png" alt="menueIcon" width="100%" onclick="menu_list()"></a> \
    </div>   \
    \
    <!--LOGO DIV-->\
    <div class="MidleDiv"> \
        <a href="index.html"><img id="logo_image" src="images/Logo_2.png" alt="Thriive Logo" width="85%"></a>\
    </div>\
    \
    <!--SEARCH AND LOGIN DIV-->\
    <div class="rightDiv">');
    document.write('<!--LOGIN ICON-->\
            <span id="signin_tag" style="display:none;"><a class="anchorTagButton" href="login_old.html">\
            <div style="display:inline-table; width:5.5%"> \
                 <img src="images/SignIn_2.png" class="search_Login_Icons">\
            </div>\
        <span id="signIn">\
            <strong> sign in </strong>\
        </span> </a>\
        <span id="line">&nbsp;&nbsp;|&nbsp; &nbsp;</span></span>');
    document.write('<!--LOGIN ICON-->\
            <span class="login_dropdown" id="signedin_tag" style="display:none;">\
                <strong>\
                    <span id="signin_user_name" style="display:none; cursor:pointer;"data-toggle="tooltip" data-placement="top" title="Logout"></span>\
                </strong>\
                <div class="dropdown-content">\
                    <a href="account_Page.html">My Account</a>\
                    <a href="accountOverView.html">Account Overview</a>\
                    <!--<a href="#">Manage Preferences</a>-->\
                    <a href="newsletterPreferences.html">Newsletter Preferences</a>\
                    <a href="address_options.html">Address Options</a>\
                    <a href="editDetails.html">Edit Details</a>\
                    <a href="reset_password.html">Reset Password</a>\
                    <a href="deleteAccount.html">Delete Account</a>\
                    <a href="" onclick="logout_user();">Logout</a>\
                </div>\
                <span>&nbsp;&nbsp;|&nbsp; &nbsp;</span>\
            </span>');
    document.write('<!--SEARCH ICON-->\
      <span id="signinBeforeClick" onclick="showSearch();">\
			<div class="searchBeforeClick">\
			<a href="search.html">	<img class="search_Login_Icons" src="images/Search_2.png"></a>\
			</div>\
			<a href="search.html" class="anchorTagButton"><span id="search"><strong>search </strong> </span> </a>\
      </span>\
	<!--SEARCH BUTTON AFTER CLICK-->\
		<span id="signAfterClick">\
			<div class="searchAfterClick">\
				<img class="search_Login_Icons" src="images/Search_2.png">\
			</div>\
			<form style="display:inline-table;position: relative;">\
				<input type="text" name="search" placeholder="Search..">\
			</form>\
       </span>\
    </div>\
</div>');
    display_username_if_signed_in();
}


//FUNCTION FOR DISPLAY FOOTER
function display_footer(){
    document.write('<!---------- FOOTER  SECTION FOR DESKTOP ---------->\
<div class="footerDiv" id="FooterSection_Desktop">\
	<!--ADDRESS & SOCIAL MEDIA DIV-->\
	<div class="address_SocialMedia_Div">\
		<div class="addressDiv">\
			<h3 class="footerHeading">THRIIVE ART &amp SOUL LLP </h3>\
			<h3 class="footerText">C 101, Ashok Towers, Opp. Bharat Mata Cinema, Parel, Mumbai - 400012</h3> </div>\
		<div class="socialMediaDiv">\
			<h3 class="footerHeading" style="margin-left:4%;font-weight:normal;">THRIIVE SOCIAL</h3>\
			<div>\
				<div class="socialMediaDivIcon">\
					<a href="https://www.facebook.com/thriiveindia" target="_blank"> <img src="images/SocialMedia_F.png" width="85%"> </a>\
				</div>\
				<div class="socialMediaDivIcon">\
					<a href="https://twitter.com/thriiveindia" target="_blank"> <img src="images/SocialMedia_T.png" width="85%"> </a>\
				</div>\
				<div class="socialMediaDivIcon">\
					<a href="https://www.instagram.com/thriiveindia/" target="_blank"> <img src="images/SocialMedia_I.png" width="85%"> </a>\
				</div>\
				<div class="socialMediaDivIcon">\
					 <a href="http://thriivein.blogspot.in/" target="_blank"><img src="images/SocialMedia_B.png" width="85%"> </a>\
				</div>\
				<div class="socialMediaDivIcon">\
					 <a href="mailto:info@trhiive.in"> <img src="images/SocialMedia_M.png" width="85%"> </a>\
				</div>\
			</div>\
		</div>\
	</div>\
	<!--FOOTER ICONS DIV-->\
	<div class="footerButtonDiv">\
		<!--CONNECT Div-->\
		<div class="connectWithUsDiv">\
			<div style="width:60%">\
				<a href="connect.html"> <img src="images/Contact.png" width="100%"> </a>\
			</div>\
			<h3 class="footerText"><a style="color:#fff" href="tel:+919820389877"> +91 98203 898 77 </a><br> <a style="color:#fff;" href="mailto:connect@thriive.in"> CONNECT@THRIIVE.IN </a></h3> </div>\
		<!--SIGN UP DIV-->\
		<div class="signUpDiv">\
			<div style="width:40%">\
				<a href="news_letters.html"><img src="images/Signup.png" width="100%"></a>\
			</div>\
			<h3 class="footerText">Subscribe to the newsletter for<br>freebies.</h3> </div>\
		<!--CAREES DIV-->\
		<div class="caressDiv">\
			<div style="width:40%">\
				<a href="career.html"> <img id="carees" src="images/carees.png" width="100%"> </a>\
			</div>\
			<h3 class="footerText">Creativity is collaboration & we’re <br>always eager to meet talented people.</h3> </div>\
	</div>\
</div>\
<!-- **************FOOTER  SECTION FOR MOBILE************** -->\
<div class="footerDiv" id="FooterSection_Mobile">\
	<div style="text-align:center; color:#fff; margin-top:5%">\
		<!-- ADDRESS BLOCK -->\
		<div>\
			<h3 style="font-weight: 400; font-size:3vw">\ <span style="font-weight: 400;"> THRIIVE ART &amp SOUL LLP </span>\
                        <br> C 101, Ashok Towers, Opp. Bharat Mata Cinema, <br> Parel, Mumbai - 400012 </h3> </div>\
		<!-- CONNECT WITH US BLOCK -->\
		<div>\
			<div style="width:35%; margin:auto">\
				<a href="connect.html"> <img src="images/Contact.png" width="100%"> </a>\
			</div>\
			<h3 style="font-weight: 400; font-size:3vw"> <a style="color:#fff" href="tel:+919820389877"> +91 98203 &nbsp; 898 &nbsp;77 &nbsp; | &nbsp; <a style="color:#fff;" href="mailto:connect@thriive.in"> CONNECT@THRIIVE.IN </a></h3> </div>\
		<!-- SIGN UP BLOCK -->\
		<div>\
			<div style="width:25%;  margin:auto"> <a href="news_letters.html"> <img src="images/Signup.png" width="100%;"> </a> </div>\
			<h3 style="font-weight: 400; font-size:3vw"> Subscribe to the newsletter for freebies.</h3> </div>\
		<!-- CAREERS BLOCK -->\
		<div>\
			<div style="width:25%;  margin:auto"> <a href="career.html">  <img src="images/carees.png" width="100%"></A> </div>\
			<h3 style="font-weight: 400; font-size:3vw"> Creativity is collaboration & we are <br>always eager to meet talented people.</h3> </div>\
		<!-- THRIIVE SOCIAL BLOCK -->\
		<div class="socialMedia_Div_Mobile">\
			<br>\
			<h3 style="font-weight: 400; font-size:3vw">THRIIVE SOCIAL</h3>\
			<!--FACEBOOK-->\
			<div class="socialMedia_Icon_mobile">\
				<a href="https://www.facebook.com/thriiveindia" target="_blank"> <img src="images/SocialMedia_F.png" width="100%"> </a>\
			</div>\
			<!--TWITTER-->\
			<div class="socialMedia_Icon_mobile">\
				<a href="https://twitter.com/thriiveindia" target="_blank"> <img id="tw_Mobile" src="images/SocialMedia_T.png" width="100%"> </a>\
			</div>\
			<!--INSTAGRAM-->\
			<div class="socialMedia_Icon_mobile">\
				<a href="https://www.instagram.com/thriiveindia/" target="_blank"> <img id="ig_Mobile" src="images/SocialMedia_I.png" width="100%"> </a>\
			</div>\
			<div class="socialMedia_Icon_mobile">\
				 <a href="http://thriivein.blogspot.in/" target="_blank"> <img id="bg_Mobile" src="images/SocialMedia_B.png" width="100%"> </a>\
			</div>\
			<div class="socialMedia_Icon_mobile">\
				<a href="mailto:info@trhiive.in"> <img id="mail_Mobile" src="images/SocialMedia_M.png" width="100%"> </a>\
			</div>\
		</div>\
	</div>\
</div>\
<!-- COPYRIGHT BLOCK -->\
<div>\
	<div class="copyright">\
		<h4>  Copyright &copy; 2016. Thriive Art & Soul LLP. All rights reserved. Privacy & Cookie Policy.</h4> </div>\
</div> ');
}




//FUNCTION WHATS HAPPENING BUTTONS SECTION FOR DESKTOP
function display_whatsHappeningButtons_Desktop(){
    document.write('<section id="whatsHappening_Buttons_Desktop" style="margin-bottom:5%">\
            <!-------------------------- CALENDAR SECTION BUTTONS -------------------------->\
                <div class="div_displayTable" style="padding: 0% 0% 0% 0%; width:100%;">\
                       <!--KEYWORD BUTTON-->\
                            <div class="keyword_Whathappening">\
                                <input class="keyword_text_Whathappening " type="text" value="" placeholder="keyword"> \
                            </div>\
                   \
\
                            <!--MASTERERS BUTTON-->\
                            <div class="dropdown_Whathappening">\
                                <select class="dropdown_text_Whathappening" id="master" onchange="javascript:displayfilterbasedevents();">\
                                    <option value="master">master</option>\
                                </select>\
                            </div>\
\
                            <!--WORKSHOPS BUTTON-->\
                            <div class="dropdown_Whathappening">\
                                <select class="dropdown_text_Whathappening" id="workshop" onchange="javascript:displayfilterbasedevents();">\
                                    <option value="workshop">workshop</option>\
                                </select>\
                            </div>\
\
\                           <!--CITY BUTTON-->\
                            <div class="dropdown_Whathappening">\
                                <select class="dropdown_text_Whathappening" id="city" onchange="javascript:displayfilterbasedevents();">\
                                    <option value="city">city</option>\
                                </select>\
                            </div>\
\
                    <div class="whatsHappeningButtons">\
                      <a> <img onclick="displayListView();" id="listViewActive" src="images/whats_happning/list_button.png" style="width:85%;"> </a>\
                    </div>\
\
                    <div class="whatsHappeningButtons">\
                          <a> <img id="gridViewActive" src="images/whats_happning/grid_button_2.png" style="width:85%;" onclick="displayGridView();" > </a>\
                    </div>\
                </div>\
            </section>\
                   ')
}



//FUNCTION WHATS HAPPENING BUTTONS SECTION FOR MOBILE
function display_whatsHappeningButtons_Mobile(){
    document.write('<div class="div_displayTable" style="padding: 0% 0% 0% 0%; width:100%;">\
                    \
                     <div class="whatsHappeningButtons" style="margin-left:75%">\
                        <a> <img id="listViewActive_mobile"  onclick="javascript:displayListView();" src="images/whats_happning/list_button.png" width="130%" > </a>\
                    </div>\
\
                    <div class="whatsHappeningButtons">\
                       <a> <img id="gridViewActive_mobile" onclick="javascript:displayGridView();" src="images/whats_happning/grid_button_2.png" width="130%" > </a>\
                    </div>\
                    \
                </div>\
                    \
                <div class="div_displayTable" style="padding: 0% 0% 0% 0%; width:100%;">\
                    \
                     <!--KEYWORD BUTTON-->\
                            <div class="keyword_Whathappening">\
                                <input class="keyword_text_Whathappening " type="text" value="" placeholder="keyword"> \
                            </div>\
                            \
                            <!--MASTERS BUTTON-->\
                            <div class="dropdown_Whathappening" style="margin-left:25%">\
                                <select class="dropdown_text_Whathappening">\
                                    <option class=\'head\'>master</option>\
                                    <option value=\'\'>master 1</option>\
                                    <option value=\'\'>master 2</option>\
                                </select>\
                            </div>\
                    </div>\
                    <br>\
                    \
                        <div class="div_displayTable" style="padding: 0% 0% 0% 0%; width:100%;">\
                    \
                            <!--WORKSHOP BUTTON-->\
                            <div class="dropdown_Whathappening" style="margin-left:12.5%">\
                                <select class="dropdown_text_Whathappening">\
                                    <option class=\'head\'>workshop</option>\
                                    <option value=\'\'>workshop 1</option>\
                                    <option value=\'\'>workshop 2</option>\
                                </select>\
                            </div>\
                    \
                    \
                               <!--CITY BUTTON-->\
                            <div class="dropdown_Whathappening" style="margin-left:25%">\
                                <select class="dropdown_text_Whathappening">\
                                    <option class=\'head\'>city</option>\
                                    <option value=\'\'>city 1</option>\
                                    <option value=\'\'>city 2</option>\
                                </select>\
                            </div>\
                        </div>\
                   ')
}


