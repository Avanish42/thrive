window.onload=randomNumber;
//VALIDATE EMPTY FIELD
function ValidateEmptyField(elem){
    FieldElem=document.getElementById(elem).value;
    if(FieldElem.length==0){
        document.getElementById(elem).classList.add("error");
        return 1;
    }else{
        document.getElementById(elem).classList.remove("error");
        return 0;
    }
}

function isEmpty(elem){
//    elem=elem.value;
    if(elem.length==0){
        return true;
    }else{
        return false;
    }
}

//FIRST NAME VALIDATION
function validateName(){
    var letters = /^[A-Za-z]+$/;
    var name=document.getElementById("name").value;
    if (isEmpty(name)){
        document.getElementById("Firstname_error").innerHTML="Enter First Name";
        document.getElementById("name").style.border = "1px solid red";
		document.getElementById("name").focus();
        return false;
    }
    if(!(name.match(letters))){
        document.getElementById("Firstname_error").innerHTML="Enter Valid First Name";
        document.getElementById("name").style.border = "1px solid red";
		document.getElementById("name").focus();
        return false;
    }else{
        document.getElementById("Firstname_error").innerHTML="";
         document.getElementById("name").style.border = "none";
        return true;
    }
}

//CITY NAME VALIDATION
function validateCityName(){
    var letters = /^[A-Za-z]+$/;
    var cityName=document.getElementById("cityName").value;
    if (isEmpty(cityName)){
        document.getElementById("cityName_error").innerHTML="Enter City Name";
        document.getElementById("cityName").style.border = "1px solid red";
		document.getElementById("cityName").focus();
        return false;
    }else{
        document.getElementById("cityName_error").innerHTML="";
         document.getElementById("cityName").style.border = "none";
        return true;
    }
}


//ADDRESS VALIDATION
function validateAddress(){
    var address=document.getElementById("address").value;
    if (isEmpty(address)){
        document.getElementById("address_error").innerHTML="Enter Your Address";
        document.getElementById("address").style.border = "1px solid red";
		document.getElementById("address").focus();
        return false;
    }else{
        document.getElementById("address_error").innerHTML="";
        document.getElementById("address").style.border = "none";
        return true;
    }
}

//EMAIL VALIDATION
function validateEmail(){
    var email=document.getElementById("email").value;
    if (isEmpty(email)){
        document.getElementById("email_error").innerHTML="Enter Email ID";
        document.getElementById("email").style.border = "1px solid red";
		document.getElementById("email").focus();
        return false;
    }else{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
        document.getElementById("email_error").innerHTML="Enter Valid Email ID";
        document.getElementById("email").style.border = "1px solid red";
			document.getElementById("email").focus();
        return false;
        }else{
             document.getElementById("email_error").innerHTML="";
        document.getElementById("email").style.border = "none";
            return true;
        }
    }
}

//WEBSITE VALIDATION
function validateWebsite(){
    var website=document.getElementById("website").value;
//    var filter = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
    if (isEmpty(website)){
//        document.getElementById("website_error").innerHTML="Enter web address";
//        document.getElementById("website").style.border = "1px solid red";
//		document.getElementById("name").focus();
    }else{
        var filter = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
        if(!filter.test(website)) {
            document.getElementById("website_error").innerHTML="Enter valid website";
            document.getElementById("website").style.border = "1px solid red";
			document.getElementById("website").focus();
            return false;
        } else {
            document.getElementById("website_error").innerHTML=" ";
        document.getElementById("website").style.border = "none";
            return true;
        }
    }
}

//PHONE NUMBER VALIDATION
function validatePhone(){
    var phone=document.getElementById("phone").value;
    var callNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
    var phoneno = /^\d{10}$/; 
    
    if(isEmpty(phone)){
        document.getElementById("phone_error").innerHTML="Enter Phone Number";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("phone").focus();
        return false;
    }if(!phone.match(/^\d+/)){
        document.getElementById("phone_error").innerHTML="Enter valid Phone Number";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("phone").focus();
        return false;
    }if(!(phone.length==10)){
        document.getElementById("phone_error").innerHTML="Enter 10 Digits Number";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("phone").focus();
        return false;
    }
    else{
        document.getElementById("phone_error").innerHTML="";
        document.getElementById("phone").style.border = "none"
        return true;
    }
}

//DATE VALIDATION
function validateDate(){
    var dob=document.getElementById("dob").value;
    if (isEmpty(dob)){
        document.getElementById("dob_error").innerHTML="Enter Your Date of Birth";
        document.getElementById("dob").style.border = "1px solid red";
		document.getElementById("dob").focus();
        return false;
    }else{
        document.getElementById("dob_error").innerHTML="";
        document.getElementById("dob").style.border = "none";
        return true;
    }
}

//AGE VALIDATION
function validateAge(){
    var age=document.getElementById("age").value;
    if (isEmpty(age)){
        document.getElementById("age_error").innerHTML="Enter Your Age";
        document.getElementById("age").style.border = "1px solid red";
		document.getElementById("age").focus();
        return false;
    }else{
//        document.getElementById("age_error").innerHTML="";
//        document.getElementById("age").style.border = "none";
        if(!isNaN(age)){
            if(age < 18){
            document.getElementById("age_error").innerHTML="Your Age is below 18";
            document.getElementById("age").style.border = "1px solid red";
			document.getElementById("age").focus();
            return false;
            }
            if(age >90){  
            document.getElementById("age_error").innerHTML="Your Age is more than 90";
            document.getElementById("age").style.border = "1px solid red";
			document.getElementById("age").focus();
            return false;
            }
            else{
            document.getElementById("age_error").innerHTML="";
            document.getElementById("age").style.border = "none";
            return true;
            }
        }
    }
    
}

//GENDER VALIDATION
function validateGender(){
    var gender=document.getElementById("gender").value;
    if(gender==0){
        document.getElementById("gender_error").innerHTML="Please Select Gender";
        document.getElementById("gender").style.border = "1px solid red";
		document.getElementById("gender").focus();
        return false;
    }else{
        document.getElementById("gender_error").innerHTML="";
        document.getElementById("gender").style.border = "none";
        return true;
    }
}

//ABOUT YOURSELF VALIDATION
function validateYourSelf(){
    var yourSelf = document.getElementById("aboutYourSelf").value;
    if(yourSelf==""){
        document.getElementById("aboutYourSelf_error").innerHTML="Enter about yourself"
        document.getElementById("aboutYourSelf").style.border= "1px solid red";
		document.getElementById("aboutYourSelf").focus();
        return false;
    }else{
        document.getElementById("aboutYourSelf_error").innerHTML=""
        document.getElementById("aboutYourSelf").style.border= "none";
        return true;
    }
}
//facebook VALIDATION
function validateFacebook(){
    var letters = /^[A-Za-z]+$/;
    var elem=document.getElementById("facebook").value;
    if (isEmpty(elem)){
        document.getElementById("facebook_error").innerHTML="Enter Your Facebook Link";
        document.getElementById("facebook").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("facebook_error").innerHTML="";
         document.getElementById("facebook").style.border = "none";
        return true;
    }
}

//twitter VALIDATION
function validateTwitter(){
    var letters = /^[A-Za-z]+$/;
    var elem=document.getElementById("twitter").value;
    if (isEmpty(elem)){
        document.getElementById("twitter_error").innerHTML="Enter Your Twitter Link";
        document.getElementById("twitter").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("twitter_error").innerHTML="";
         document.getElementById("twitter").style.border = "none";
        return true;
    }
}

//G+ VALIDATION
function validateGplus(){
    var letters = /^[A-Za-z]+$/;
    var elem=document.getElementById("Gplus").value;
    if (isEmpty(elem)){
        document.getElementById("Gplus_error").innerHTML="Enter Your G+ Link";
        document.getElementById("Gplus").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("Gplus_error").innerHTML="";
         document.getElementById("Gplus").style.border = "none";
        return true;
    }
}
//YOUTUBE VALIDATION
function validateYoutube(){
    var letters = /^[A-Za-z]+$/;
    var elem=document.getElementById("Youtube").value;
    if (isEmpty(elem)){
        document.getElementById("Youtube_error").innerHTML="Enter Your Youtube Link";
        document.getElementById("Youtube").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("Youtube_error").innerHTML="";
         document.getElementById("Youtube").style.border = "none";
        return true;
    }
}

//MODALITY ONE VALIDATION
function checkM1(){
    var m1=document.getElementById("m1").value;
    if(m1==0){
        document.getElementById("m1_error").innerHTML="Please Select Modality";
        document.getElementById("m1").style.border = "1px solid red";
		document.getElementById("m1").focus();
        return false;
    }else{
        document.getElementById("m1_error").innerHTML="";
        document.getElementById("m1").style.border = "none";
        return true;
    }
}

//MODALITY ONE EXPERINCE VALIDATION
function validateM1exp(){
    var m1exp=document.getElementById("m1exp").value;
    if (isEmpty(m1exp)){
        document.getElementById("m1exp_error").innerHTML="Enter Years of Experience";
        document.getElementById("m1exp").style.border = "1px solid red";
		document.getElementById("m1exp").focus();
        return false;
    }else{
//         if(!m1exp.match(/^\d+/)){
//            document.getElementById("m1exp_error").innerHTML=" Enter only number of Years";
//            document.getElementById("m1exp").style.border = "1px solid red";
//            return false;
//        }
        if(!isNaN(m1exp)){
            if(m1exp < 1){
                document.getElementById("m1exp_error").innerHTML=" Your Experience is less than 1 Year";
                document.getElementById("m1exp").style.border = "1px solid red";
				document.getElementById("m1exp").focus();
                return false;
            }else{
                document.getElementById("m1exp_error").innerHTML="";
                document.getElementById("m1exp").style.border = "none";
                return true;
            }
        }
    }
}

//YEARS OF EXPERINCE VALIDATION
function validateYearsOfExp(){
    var overall_exp=document.getElementById("overall_exp").value;
    if(overall_exp==""){
        document.getElementById("overall_exp_error").innerHTML="Enter over all years of Experience";
        document.getElementById("overall_exp").style.border = "1px solid red";
		document.getElementById("overall_exp").focus();
        return false;
    }else{
        if(!overall_exp.match(/^\d+/)){
            document.getElementById("overall_exp_error").innerHTML = " Enter only number of Years";
            document.getElementById("overall_exp").style.border = "1px solid red";
			document.getElementById("overall_exp").focus();
            return false;
        }else{
            document.getElementById("overall_exp_error").innerHTML="";
            document.getElementById("overall_exp").style.border = "none";
            return true;
        }
    }
     
}

//HOURLY CHARGES VALIDATION
function validateHourlyCharge(){
    var charges=document.getElementById("charges").value;
    if (charges==""){
        document.getElementById("charges_error").innerHTML=" Enter your hourly session charges";
        document.getElementById("charges").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("charges_error").innerHTML="";
        document.getElementById("charges").style.border = "none";
        return true;
    }
}

//COURSE /DEGREE VALIDATION
function validateCourse(){
    var course = document.getElementById("courseDetails").value;
    if (course==""){
        document.getElementById("courseDetails_error").innerHTML="Enter your Course / Degree Details";
        document.getElementById("courseDetails").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("courseDetails_error").innerHTML="";
        document.getElementById("courseDetails").style.border = "none";
        return true;
    }
}


//PRIMARY YES CAREER VALIDATION
function primaryCareerYes(){
    var primaryYes = document.getElementById("primaryCareer_Yes");
    var primaryNo = document.getElementById("primaryCareer_No");
    primaryYes.setAttribute("src", "images/radioButton-2.png");
    primaryNo.setAttribute("src", "images/radioButton.png");
    document.getElementById("otherCareer").readOnly =true;
    document.getElementById("otherCareer").setAttribute("style","background-color:#e1e1e1;");
    document.getElementById("otherCareer").value ="";
    document.getElementById("otherCareers_error").innerHTML="";
    document.getElementById("otherCareer").style.border = "none";
    document.getElementById("selectedPrimaryCareer").value="Yes";
}

//PRIMARY NO CAREER VALIDATION
function primaryCareer(){
    var primaryYes = document.getElementById("primaryCareer_Yes");
    var primaryNo = document.getElementById("primaryCareer_No");
        primaryYes.setAttribute("src", "images/radioButton.png");
        primaryNo.setAttribute("src", "images/radioButton-2.png");
    if(primaryYes.src=="images/radioButton-2.png"){
        document.getElementById("selectedPrimaryCareer").value="Yes";
    }else{
        document.getElementById("selectedPrimaryCareer").value="No";
    }
    document.getElementById("otherCareer").readOnly =false;
    document.getElementById("otherCareer").focus();
    document.getElementById("otherCareer").setAttribute("style","background-color:#ffffff;");
}


//HOME VISIT YES VALIDATION
function homeVisitYes(){
    var primaryYes = document.getElementById("homeVisit_Yes");
    var primaryNo = document.getElementById("homeVisit_No");
    primaryYes.setAttribute("src", "images/radioButton-2.png");
    primaryNo.setAttribute("src", "images/radioButton.png");
}

//HOME VISIT NO VALIDATION
function homeVisitNo(){
    var primaryYes = document.getElementById("homeVisit_Yes");
    var primaryNo = document.getElementById("homeVisit_No");
        primaryYes.setAttribute("src", "images/radioButton.png");
        primaryNo.setAttribute("src", "images/radioButton-2.png");
    if(primaryYes.src=="images/radioButton-2.png"){
        document.getElementById("selectedPrimaryCareer").value="Yes";
    }else{
        document.getElementById("selectedPrimaryCareer").value="No";
    }
}

//IF NOT VALIDATIONS
function validateIfnoCareer(){
    var primaryYes = document.getElementById("selectedPrimaryCareer").value;
    var NoprimaryCareer = document.getElementById("otherCareer").value;
    if(primaryYes=="Yes"){
       if(NoprimaryCareer == ""){
            document.getElementById("otherCareers_error").innerHTML="";
            document.getElementById("otherCareer").style.border = "none";
		    return true;
        }
    }
    else{
       if(NoprimaryCareer == ""){
            document.getElementById("otherCareers_error").innerHTML="Enter what else do you do";
            document.getElementById("otherCareer").style.border = "1px solid red";
            document.getElementById("otherCareer").focus();
		    return false;
        }else{
            document.getElementById("otherCareers_error").innerHTML="";
            document.getElementById("otherCareers_error").innerHTML="";
            document.getElementById("otherCareer").style.border = "none";
			return true;
        } 
    }
    
}

//WHAT AILMENTS HAVE YOU SEEN BEST RESULTS VALIDATION
function validateAilments(){
    var course = document.getElementById("bestModality").value;
    if (course==""){
        document.getElementById("bestModality_error").innerHTML="Enter your Best Modality Details";
        document.getElementById("bestModality").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("bestModality_error").innerHTML="";
        document.getElementById("bestModality").style.border = "none";
        return true;
    }
}

function randomNumber(){
    var number=Math.floor(1000000 + Math.random() * 9000000);
    var membershipid="THR"+number;
    document.getElementById("memid").value=membershipid;
    
}

//Validating all fields on onsubmitting the form 
function wspValidateFields(){
   
    var valid=false;
    if(!validateName()){
        document.getElementById("name").focus();
        return valid;
    }if(!validateCityName()){
        document.getElementById("cityName").focus();
        return valid;
    }if(!validateAddress()){
        document.getElementById("address").focus();
        return valid;
    }if(!validateEmail()){
        document.getElementById("email").focus();
        return valid;
    }
//	if(!validateWebsite()){
//        document.getElementById("website").focus();
//        return valid;
//    }
//	if(!validatePhone()){
//        document.getElementById("phone").focus();
//        return valid;
//    }
    if(!validateDate()){
        document.getElementById("dob").focus();
        return valid;
    }
//    if(!validateAge()){
//        document.getElementById("age").focus();
//        return valid;
//    }
    if(!validateGender()){
        document.getElementById("gender").focus();
        return valid;
    }
//	if(!validateFacebook()){
//        document.getElementById("facebook").focus();
//        return valid;
//    }if(!validateTwitter()){
//        document.getElementById("twitter").focus();
//        return valid;
//    }if(!validateGplus()){
//        document.getElementById("Gplus").focus();
//        return valid;
//    }if(!validateYoutube()){
//        document.getElementById("Youtube").focus();
//        return valid;
//    }
	if(!validateYourSelf()){
        document.getElementById("aboutYourSelf").focus();
        return valid;
    }
    if(!checkM1()){
        document.getElementById("m1").focus();
        return valid;
    }
    if(!validateM1exp()){
        document.getElementById("m1exp").focus();
        return valid;
    }
//    if(!validateYearsOfExp()){
//        document.getElementById("overall_exp").focus();
//        return valid;
//    }if(!validateIfnoCareer()){
//        return valid;
//    }
    storevalues();
}

function storevalues() {
	var firstname = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var cityName = document.getElementById("cityName").value;
	var address = document.getElementById("address").value;
	var email = document.getElementById("email").value;
	var website = document.getElementById("website").value;
	var phone = document.getElementById("phone").value;
	var dob = document.getElementById("dob").value;
	var age = document.getElementById("age").value;
	var gender = document.getElementById("gender").value;
	var facebook = document.getElementById("facebook").value;
	var twitter = document.getElementById("twitter").value;
	var gPlus = document.getElementById("gPlus").value;
	var Youtube = document.getElementById("Youtube").value;
	var aboutYourSelf = document.getElementById("aboutYourSelf").value;
	var m1 = document.getElementById("m1").value;
	var m1exp = document.getElementById("m1exp").value;
	var m2 = document.getElementById("m2").value;
	var m2exp = document.getElementById("m2exp").value;
	var m3 = document.getElementById("m3").value;
	var m3exp = document.getElementById("m3exp").value;
	var m4 = document.getElementById("m4").value;
	var m4exp = document.getElementById("m4exp").value;
	var other = document.getElementById("other").value;
	var otherexp = document.getElementById("otherexp").value;
	var overall_exp = document.getElementById("overall_exp").value;
	var charges = document.getElementById("charges").value;
	var courseDetails = document.getElementById("courseDetails").value;
	var bestModality = document.getElementById("bestModality").value;
	var selectedPrimaryCareer = document.getElementById("selectedPrimaryCareer").value;
	var otherCareer = document.getElementById("otherCareer").value;
	var memid = document.getElementById("memid").value;
	var ref = firebase.database().ref();
	var emailUserRef = ref.child("users");
	var wspPreRegistrations = ref.child("wsppreregistrstions");
	emailUserRef.orderByChild("email").equalTo(email).once('value', function (snapshot) {
		wspPreRegistrations.orderByChild("email").equalTo(email).once('value', function (wsppreshot) {
			var exists = (snapshot.val() !== null);
			if (exists) {
				alert("Already Exist");
				//Do Nothing
			}
			else {
				var existed = (wsppreshot.val() !== null);
				if (existed) {
					alert("Already Exist");
				}
				else {
					//Update WSP details on Firebase
					wspPreRegistrations.push({
						firstname: firstname, 
						lastname: lastname,
						city: cityName,
						address: address,
						email: email,
						website: website,
						phone: phone,
						dob: dob,
						age: age,
						gender: gender,
						facebook: facebook,
						twitter: twitter,
						gPlus: gPlus,
						Youtube: Youtube,
						aboutYourSelf: aboutYourSelf,
						m1: m1,
						m1exp: m1exp,
						m2: m2,
						m2exp: m2exp,
						m3: m3,
						m3exp: m3exp,
						m4: m4,
						m4exp: m4exp,
						other: other,
						otherexp: otherexp,
						overall_exp: overall_exp,
						charges: charges,
						courseDetails: courseDetails,
						bestModality: bestModality,
						selectedPrimaryCareer: selectedPrimaryCareer,
						otherCareer: otherCareer,
						memid: memid,
						status: "waiting",
						submittedOn: firebase.database.ServerValue.TIMESTAMP
					});
					window.location.href = "http://mailer.thriive.in/mail.php?template=WSPSignUpU&email=" + email + "&name=" + firstname + " " + lastname + "&memid=" + memid;
				}
			}
		});
	});
}