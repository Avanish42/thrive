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
                <a href="whatsHappening.html"><div id="whats_happening_div" class="menu_itmes" onmouseover="activate_whats_happening_img(); hide_wspProviderDiv();">WHAT\'S HAPPENING!</div></a>\
                <a href="therapy.html"><div id="therapist_div" class="menu_itmes" onmouseover="activate_therapies_img();">WELLNESS SERVICES</div></a>\
                <a href="practitioners.html"><div id="practitioners_div" class="menu_itmes" onmouseover="activate_practitioners_img();">WELLNESS SERVICE PROVIDERS</div></a>\
                <a href="thriive_world.html"><div id="thriive_world_div" class="menu_itmes " onmouseover="activate_thriive_world_img(); display_thriive_world_submenu();" onmouseout="hide_thriive_world_submenu()">THRIIVE WORLD</div></a>\
                <span id="plusButton" onclick="openSubmenuinMobile();"><img src="images/plusButton-2.png" width="100%"></span>\
                <span id="minusButton" onclick="closeSubmenuinMobile();"><img src="images/minus.png" width="100%"></span>\
				<div id="thriive_world_sub_menu" onmouseover="display_thriive_world_submenu();" class="submenu-fadein">\
					<a href="thriive_world_audio_videos.html"><div id="thriive_world_gallery_div" class="menu_itmes">thriive videos</div></a>\
					<a href="thriive_world_music.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">thriive audios</div></a>\
					<!-- <a href="thriive_world_guided_meditation.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">guided meditation</div></a> -->\
					<a href="http://thriivein.blogspot.in/" target="_blank"><div id="thriive_world_thriive_talks_div" class="menu_itmes">thriive talks</div></a>\
					<a href="articles.html"><div id="thriive_world_gmeditation_div" class="menu_itmes">articles</div></a>\
					<!-- <a href="news_letters_tw.html"><div id="thriive_world_newsletter_div" class="menu_itmes">newsletter</div></a> -->\
				</div>\
                <!--<div class="signupnewsletter"><a href="news_letters.html"><img id="signupNewsLetterImg" src="images/Signup_For_NewsLetters.png" width="80%" onclick="closemenu()"></a></div>-->\
\
                <div class="signUpButtons">  <img src="images/signup_user.png" width="100%" onclick="activateUsersignup();"> </div>\
                <div class="signUpButtons" onclick="activateWSPsignup();"><a href="wsp_signupPage.html">  <img src="images/signup_wsp.png" width="100%"> </a> </div>\
                <a onclick="termsclick();"><p class="terms">Terms and Policies</p></a> \
            </div>\
            <div id="RightSideMenu">\
                 <img id="our_story_img" src="images/our-story.jpg" width="100%">\
                 <img id="thriive_tribe_img" src="images/thriive-tribe.png" width="100%">\
                 <img id="whats_happening_img" src="images/whats-happening.png" width="100%">\
                 <img id="thriive_therapy_img" src="images/therapies.png" width="100%">\
                 <img id="thriive_practitioners_img" src="images/practitioners.png" width="100%">\
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
        case "practitioners" :         
            document.getElementById("practitioners_div").classList.add("active_highlight");
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
            <a class="anchorTagButton"><img src="images/menuIcon_3.png" alt="menueIcon" width="100%" onclick="menu_list()"></a>\
        </div>\
    \
    <!--LOGO DIV-->\
    <div class="MidleDiv">\
        <a href="index.html"><img id="logo_image" src="images/Logo_2.png" alt="Thriive Logo" width="85%"></a>\
    </div>\
    \
    <!--SEARCH AND LOGIN DIV-->\
    <div class="rightDiv">\
   <!--LOGIN ICON-->\
        <span id="signin_tag" onclick="openSigninForm();">\
            <div id="btnSignInUser" style="display:inline-table; width:5.5%">\
                 <img src="images/SignIn_2.png" class="search_Login_Icons">\
            </div>\
        <span id="signIn">\
            <strong> sign in </strong>\
        </span>\
        </span>\
            <span id="line">&nbsp;&nbsp;|&nbsp; &nbsp;</span>\
        \
        <!--MENU ITEMS-->\
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
        </span>\
    \
    <!--SEARCH BUTTON -->    \
      <span id="signinBeforeClick" onclick="showSearch();">\
            <div class="searchBeforeClick">\
                <a href="">	<img class="search_Login_Icons" id="serchImg" src="images/Search_2.png"></a>\
            </div>\
            <a class="anchorTagButton"><span id="search"><input type="text" name="search" placeholder="search.." /> </span> </a>\
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
</div>\
    <!-- MODAL CONTENT -->\
    <div id="myModal" class="modal">\
          <div class="modal-content other_Pagess_body_Backgruond">\
\
            <span id="closeButton" class="close_model" onclick="closeModal();">&times;</span>\
            <section class="totalBodySection">\
              <section class="signIn_section">\
\
                    <!--USER SIGN IN SECTION-->\
                    <div class="user_signIn">\
                            <h2 class="signIn_heading" id="loginModuleHeaing">sign in as a user</h2>\
                    <div id="loginModule">\
\
                    <div class="singInUserIcon"> <img src="images/SignIn_User_Icon.png" width="100%"></div>\
\
                        <!--RADIO BUTTONS FOR USER AND PRACTITIONER-->\
                        <div class="row">\
                            <div class="radioButtons">\
                                <img src="images/radioButton-2.png" id="userButton" width="100%" onclick="signintypeAsUser();">\
                            </div>\
                            <span class="sign_User">  sign in as user</span>\
                            <div class="radioButtons">\
                                <img src="images/radioButton.png" id="PractitionerButton" width="100%" onclick="signintypeAsPractitioner();">\
                            </div>\
                           <span class="sign_User">  sign in as practitioner</span>\
                        </div>\
\
                        <!--RADIO BUTTONS FOR USER AND PRACTITIONER-->\
                        <div class="row" id="singupMessage">\
                            <p>This Login is for Practitoner / Wellness Service Provider</p>\
                        </div>\
\
                        <div> <!--E-MAIL DIV-->\
                            <input class="signIn_input" id="txtEmailAsUser" type="email" placeholder="enter your e-mail" onblur="validateEmailAsUser()">\
                        </div>\
\
                        <div style="position: relative;"> <!--PASSWORD DIV-->\
                            <input class="signIn_input" id="txtPasswordAsUser" type="password" placeholder="password" onblur="validatePasswordAsUser()">\
                            <img id="PW_Eye" class="pw_icon" src="images/PW_Eye.png" onclick="showPassword()"><br>\
                            <span class="forgetPassword" onclick="openForgetPassword();">Forget Password ?</span>\
                            <span style="clear:both"></span>\
                        </div>\
\
                                 <div id="btnLogin"  class="btn btn-action">\
                                    <button class="buttonStyles" type="button" id="btnLoginAsUser" onclick="signInAsUser()">\
                                        <img src="images/submit-button.png" width="100%">\
                                     </button>\
                                </div>\
\
                                <!--LOG IN-->\
                                <div>\
                                    <h3 class="notyetSingIn"> Not yet signed in? <br>\
                                        <span  class="signUpNow">  <div id="form" onclick="loadUserSignUp()"> Sign Up Now </div> </span>\
                                    </h3>\
                                </div>\
\
                                <!-- ERROR OR SUCCESS MESSAGE -->\
                                <div id="SubmitMessage"></div>\
\
                                <hr width="70%">\
\
                            <div class="socialMediaDiv_1" id="socialMedia"> <!--SOCIAL MEDIA DIV-->\
                                <div class="socialMediaIcon" style="cursor:pointer">\
                                    <img id="gbtnLogin" src="images/SocialMedia_G.png" width="100%"  onclick="gLogin()">\
                                </div> <!--GOOGLE-->\
                                <div class="socialMediaIcon" style="cursor:pointer">\
                                    <img id="fbtnLogin" src="images/SocialMedia_F.png" width="100%" onclick="fLogin()">\
                                </div> <!--FACE BOOK-->\
                            </div>\
                    </div>\
\
                    <div id="signinAsPractitionerModule" style="display:none"></div>\
                    </div>\
                    </section>\
\
        <section id="SigUpUserForm">\
            <div class="row">\
                <h2 class="heading">SIGN UP WITH THRIIVE</h2>\
                <h2 class="heading-2">*MANDATORY</h2>\
                <p id="SignupHeading">Free access to Thriive world &amp; free guided meditations, music, and talks</p>\
            </div>\
            <center>\
                <img id="submittingGif" src="images/submitting.gif" style="display:none;" width="25%">\
                <img id="errorPng" src="images/error.png" style="display:none;" width="25%">\
                <img id="successPng" src="images/success.png" style="display:none;" width="25%">\
            </center>\
            <p id="accountCreationError"></p>\
            <!----------------------- SIGNUP FORM SECTION -------------------------->\
            <section id="formBody">\
                <form name="form" onsubmit="return Signupvalidate();" method="get" action="">\
                    <!----------------------- SIGNUP FORM DESKTOP SECTION -------------------------->\
                    <div class="row">\
                        <div class="sm6_l">\
                            <label class="details">*FIRSTNAME</label>\
                            <br>\
                            <input id="fname" class="SignupInput" type="text" name="firstname" tabindex="1">\
                            <p id="fname_error" class="error"></p>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- LAST NAME ---->\
                            <label class="details">*LASTNAME</label>\
                            <br>\
                            <input id="lname" class="SignupInput" type="text" name="lastname" tabindex="2">\
                            <p id="lname_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="sm6_l">\
                            <label class="details">*Gender</label>\
                            <div style="width:60%; vertical-align:middle">\
                                <!-- -->\
                                <input type="radio" class="spRadioButton" value="" name="gender" id="radioMale" checked>\
                                <label class="label_item" for="radioMale">\
                                    <div style="width:60%; display:inline-table;">\
                                        <img src="images/attachments/radioButton-2.png" width="100%;" tabindex="3">\
                                    </div>\
                                </label> <span class="gender">&nbsp;Male &nbsp;&nbsp;</span>\
                                <input type="radio" class="spRadioButton" value="" name="gender" id="radioFemale">\
                                <label class="label_item" for="radioFemale">\
                                    <div style="width:60%; display:inline-table;">\
                                        <img src="images/attachments/radioButton-2.png" width="100%;">\
                                    </div>\
                                </label> <span class="gender">&nbsp;Female</span>\
                                <br>\
                                <p id="gender_error" class="error"></p>\
                            </div>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- DATE OF BIRTH ---->\
                            <label class="details">*DATE OF BIRTH</label>\
                            <br>\
                            <input id="dob" class="SignupInput" type="date" name="dateofbirth" tabindex="4">\
                            <p id="dob_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="sm6_l">\
                            <label class="details">*PHONE NUMBER</label>\
                            <br>\
                            <input id="phone" class="SignupInput" type="text" name="phonenumber" tabindex="5">\
                            <p id="phone_error" class="error"></p>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- EMAIL ---->\
                            <label class="details">EMAIL<span>*</span></label>\
                            <br>\
                            <input id="email" class="SignupInput" type="email" name="email" tabindex="6">\
                            <p id="email_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="sm6_l">\
                            <!----- PASSWORD ----->\
                            <label class="details">*PASSWORD</label>\
                            <br>\
                            <input id="password" type="password" class="SignupInput" name="password" tabindex="7">\
                            <p id="password_error" class="error"></p>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- CONFIRM PASSWORD ----->\
                            <label class="details">CONFIRM PASSWORD<span>*</span></label>\
                            <br>\
                            <input id="cpassword" class="SignupInput" type="password" name="confirmpassword" tabindex="8">\
                            <p id="cpassword_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="sm6_l">\
                            <!----- TERMS AND CONDITIONS FIELD ----->\
                            <input type="checkbox" class="spRadioButton" value="" name="TandC" id="checkboxTandC">\
                            <label class="label_item" for="checkboxTandC">\
                                <div style="width:60%; display:inline-table;">\
                                    <img src="images/attachments/radioButton-2.png" width="100%;" tabindex="9">\
                                </div>\
                            </label> <span class="agree">&nbsp;I AGREE TO THE TERMS AND CONDITIONS</span>\
                            <p id="TandC_error" class="error"></p>\
                            <br>\
                        </div>\
\
                        <div class="sm6_r">\
                            <!----- SUBSCRIBE TO THRIIVE UPDATES ----->\
                            <input type="checkbox" class="spRadioButton" value="" name="ThriiveUpdates" id="checkboxThriiveUpdates">\
                            <label class="label_item" for="checkboxThriiveUpdates">\
                                <div style="width:60%; display:inline-table;">\
                                    <img src="images/attachments/radioButton-2.png" width="100%;">\
                                </div>\
                            </label> <span class="agree">&nbsp;SUBSCRIBE TO THRIIVE UPDATES</span>\
                            <br>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class=" sm6_l">\
                            <img id="SignupSubmitButton" src="images/submit-button.png" width="30%;" tabindex="10" onclick="return Signupvalidate()">\
                            <h3 id="iHaveAccount" onclick="ihaveAccount();"> I Have Already Account</h3>\
                        </div>\
                    </div>\
                    <!----- CAPTCHA FIELD ----->\
                    <div class="radiobutton" style="visibility:hidden">\
                        <input type="radio" name="gender" id="Radio1" value="Male"  style="display:table;float:left;">\
                        <input type="radio" name="gender" id="Radio2" value="Female"  style="display:table;float:left;">\
                    </div>\
                </form>\
            </section>\
            <section id="wsp_reg_form" >\
                    <!----------------------- SIGNUP FORM DESKTOP SECTION -------------------------->\
                    <div class="row">\
                        <div class="sm6_l">\
                            <label class="details">*FIRSTNAME</label>\
                            <br>\
                            <input id="wsp_fname" class="SignupInput" type="text" name="firstname" tabindex="1">\
                            <p id="wsp_fname_error" class="error"></p>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- LAST NAME ---->\
                             <label class="details">*PHONE NUMBER</label>\
                            <br>\
                            <input id="wsp_phone" class="SignupInput" type="text" name="phonenumber" tabindex="5">\
                            <p id="wsp_phone_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="sm6_l">\
                            <label class="details">*CITY</label>\
                            <br>\
                            <input id="wsp_city" class="SignupInput" type="text" name="city" tabindex="5">\
                            <p id="wsp_city_error" class="error"></p>\
                        </div>\
                        <div class="sm6_r">\
                            <!----- EMAIL ---->\
                            <label class="details">EMAIL<span>*</span></label>\
                            <br>\
                            <input id="wsp_email" class="SignupInput" type="email" name="email" tabindex="6">\
                            <p id="wsp_email_error" class="error"></p>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class=" sm6_l">\
                            <img id="wsp_SignupSubmitButton" src="images/submit-button.png" width="30%;" tabindex="10" onclick="wspValidate()">\
                            <h3 id="wsp_iHaveAccount" onclick="ihaveAccount();"> I Have Already Account</h3><br>\
                            \
                        </div>\
                    </div>\
                    <!----- CAPTCHA FIELD ----->\
                    <div class="radiobutton" style="visibility:hidden">\
                        <input type="radio" name="gender" id="Radio1" value="Male"  style="display:table;float:left;">\
                        <input type="radio" name="gender" id="Radio2" value="Female"  style="display:table;float:left;">\
                    </div>\
            </section>\
        </section>\
            <h3 id="wspErrorMsg" class="wsp_alert" onclick="ihaveAccount();"></h3>\
    </section>\
    </div>\
</div>\
    \
    <div id="myModal2" class="modal">\
          <div class="modal-content other_Pagess_body_Backgruond">\
\
            <span id="closeButton2" class="close_model" onclick="closeModal2();">&times;</span>\
              <section class="signIn_section">\
\
                <!--USER SIGN IN SECTION-->\
                <div class="user_signIn">\
                    <div id="loginModule">\
                        <div> <!--E-MAIL DIV-->\
                            <label class="details">YOUR EMAIL ID<span>*</span></label><br>\
                            <input class="signIn_input" style="width:60%" id="forgetPwMail" type="email" placeholder="enter your e-mail" onblur="validateEmaiForgetPW()">\
                        </div>\
                        <p id="forgetPwMail_error" class="error" style="margin-right:20%;"></p>\
                         <div id="btnLogin"  class="btn btn-action" style="margin-right:35%">\
                            <button class="buttonStyles"  type="button" id="" onclick="">\
                                <img src="images/submit-button.png" width="100%">\
                            </button>\
                        </div>\
                    </div>\
                </div>\
                </section>\
        </div>\
    </div>');
    display_username_if_signed_in();
}


//FUNCTION FOR DISPLAY FOOTER
function display_footer(){
    document.write('<!---------- FOOTER  SECTION FOR DESKTOP ---------->\
<div class="footerDiv" id="FooterSection_Desktop">\
	<!--FOOTER ICONS DIV-->\
	<div class="footerButtonDiv">\
		<!--CONNECT Div-->\
<div class="connectWithUsDiv"> <a href="connect.html"> <img src="images/Contact.png" width="100%"> </a> </div>\
		<!--SIGN UP DIV-->\
		<div class="signUpDiv"> <a href="news_letters.html"><img src="images/Signup.png" width="100%"></a> </div>\
		<!--CAREES DIV-->\
		<div class="caressDiv"> <a href="career.html"> <img id="carees" src="images/carees.png" width="100%"> </a> </div>\
        <div class="socialMediaDivIcon" style="margin-left:5%"> <a href="https://www.facebook.com/thriiveindia" target="_blank">\
            <img src="images/SocialMedia_F.png" width="85%"> </a> </div>\
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
        <h3 class="footerText"><b>THRIIVE ART & SOUL LLP</b>, C 101, Ashok Towers, Opp. Bharat Mata Cinema, Parel, Mumbai - 400012</h3>\
        <h3 class="footerText">118, 11th Floor, Bajaj Bhavan, Nariman Point Mumbai, India, Call : <a style="color:#fff" href="callto:+917045933385">070459 33385</a></h3><br>\
	</div>\
</div>\
    \
<!-- **************FOOTER  SECTION FOR MOBILE************** -->\
<div class="footerDiv" id="FooterSection_Mobile">\
	<div class="footerMobileBody">\
		      <!-- CONNECT WITH US BLOCK -->\
			<div class="contact_M"><a href="connect.html"> <img src="images/Contact.png" width="100%"> </a> </div>\
		      <!-- SIGN UP BLOCK -->\
			<div class="NL_M"> <a href="news_letters.html"> <img src="images/Signup.png" width="100%;"> </a> </div>\
		      <!-- CAREERS BLOCK -->\
			<div class="NL_M"> <a href="career.html">  <img src="images/carees.png" width="100%"></a> </div>\
		      <!-- THRIIVE SOCIAL BLOCK -->\
		  <div class="socialMedia_Div_Mobile">\
			<br>\
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
        <!-- ADDRESS BLOCK -->\
		<div class="Adress_M">\
            THRIIVE ART &amp; SOUL LLP, C 101, Ashok Towers, Opp. Bharat Mata Cinema, Parel, Mumbai - 400012<br> \
            118, 11th Floor, Bajaj Bhavan, Nariman Point Mumbai, India, Call: <a style="color:#fff" href="callto:+917045933385">070459 33385</a>\
        </div>\
	</div>\
</div>\
<!-- COPYRIGHT BLOCK -->\
<div>\
	<div  class="copyright"> <h4> Copyright &copy; 2016. Thriive Art & Soul LLP. All rights reserved.\
    <a style="cursor: pointer;" onclick="termsclick();">Terms &amp; Policies</a></h4> </div>\
</div>\
<div id="terms_body">\
              <div id="terms_link" style="display:none;">\
                <span id="termsclose" class="termsclose" onclick="termsclose();">&times;</span>\
                <iframe id="termsIframe" src="TermsAndConditionIframe.html"></iframe>\
              </div>\
          </div>');
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


