
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
        return false;
    }
    if(!(name.match(letters))){
        document.getElementById("Firstname_error").innerHTML="Enter Valide First Name";
        document.getElementById("name").style.border = "1px solid red";
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
        return false;
    }else{
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
        document.getElementById("email_error").innerHTML="Enter Valid Email ID";
        document.getElementById("email").style.border = "1px solid red";
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
        document.getElementById("website_error").innerHTML="Enter web address";
        document.getElementById("website").style.border = "1px solid red";
    }else{
        var filter = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!filter .test(website)) {
            document.getElementById("website_error").innerHTML="Enter valid web address";
            document.getElementById("website").style.border = "1px solid red";
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
        return false;
    }if(!phone.match(/^\d+/)){
        document.getElementById("phone_error").innerHTML="Enter valid Phone Number";
        document.getElementById("phone").style.border = "1px solid red";
        return false;
    }if(!(phone.length==10)){
        document.getElementById("phone_error").innerHTML="Enter 10 Digits Number";
        document.getElementById("phone").style.border = "1px solid red";
        return false;
    }
    else{
        document.getElementById("phone_error").innerHTML="";
        document.getElementById("phone").style.border = "none"
    }
}

//DATE VALIDATION
function validateDate(){
    var dob=document.getElementById("dob").value;
    if (isEmpty(dob)){
        document.getElementById("dob_error").innerHTML="Enter Your Date of Birth";
        document.getElementById("dob").style.border = "1px solid red";
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
        return 1;
    }else{
        document.getElementById("age_error").innerHTML="";
        document.getElementById("age").style.border = "none";
    }
    if(!isNaN(age)){
        if(age < 18){
        document.getElementById("age_error").innerHTML="Your Age is below 18";
        document.getElementById("age").style.border = "1px solid red";
        return false;
        }
        if(age >90){  
        document.getElementById("age_error").innerHTML="Your Age is more than 90";
        document.getElementById("age").style.border = "1px solid red";
        return false;
        }
        else{
        document.getElementById("age_error").innerHTML="";
        document.getElementById("age").style.border = "none";
        return true;
        }
    }
}

//GENDER VALIDATION
function validateGender(){
    var gender=document.getElementById("gender").value;
    if(gender==0){
        document.getElementById("gender_error").innerHTML="Please Select Gender";
        document.getElementById("gender").style.border = "1px solid red";
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
        document.getElementById("aboutYourSelf_error").innerHTML="Enter about your self"
        document.getElementById("aboutYourSelf").style.border= "1px solid red";
    }else{
        document.getElementById("aboutYourSelf_error").innerHTML=""
        document.getElementById("aboutYourSelf").style.border= "none";
    }
}


//MODALITY ONE VALIDATION
function checkM1(){
    var m1=document.getElementById("m1").value;
    if(m1==0){
        document.getElementById("m1_error").innerHTML="Please Select Modality";
        document.getElementById("m1").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("m1_error").innerHTML="";
        document.getElementById("mi").style.border = "none";
        return true;
    }
}

//MODALITY ONE EXPERINCE VALIDATION
function validateM1exp(){
    var m1exp=document.getElementById("m1exp").value;
    if (isEmpty(m1exp)){
        document.getElementById("m1exp_error").innerHTML="Enter Years of Experience";
        document.getElementById("m1exp").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("m1exp_error").innerHTML="";
        document.getElementById("m1exp").style.border = "none";
    }
    if(!m1exp.match(/^\d+/)){
        document.getElementById("m1exp_error").innerHTML=" Enter only number of Years";
        document.getElementById("m1exp").style.border = "1px solid red";
    }
    if(!isNaN(m1exp)){
        if(m1exp < 1){
        document.getElementById("m1exp_error").innerHTML=" Your Experience is less then 1 Year";
        document.getElementById("m1exp").style.border = "1px solid red";
        return false;
        }else{
        document.getElementById("m1exp_error").innerHTML="";
        document.getElementById("m1exp").style.border = "none";
        return true;
        }
    }
}

//YEARS OF EXPERINCE VALIDATION
function validateYearsOfExp(){
    var overall_exp=document.getElementById("overall_exp").value;
    if(overall_exp==""){
        document.getElementById("overall_exp_error").innerHTML="Enter over all years of Experience";
        document.getElementById("overall_exp").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("overall_exp_error").innerHTML="";
        document.getElementById("overall_exp").style.border = "none";
        return false;
    }
     if(!overall_exp.match(/^\d+/)){
        document.getElementById("overall_exp_error").innerHTML=" Enter only number of Years";
        document.getElementById("overall_exp").style.border = "1px solid red";
     }else{
        document.getElementById("overall_exp_error").innerHTML="";
        document.getElementById("overall_exp").style.border = "none";
        return true;
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

//IF NOT VALIDATIONS
function validateIfnoCareer(){
    var NoprimaryCareer = document.getElementById("otherCareer").value;
    if(NoprimaryCareer == ""){
        document.getElementById("otherCareers_error").innerHTML="Enter what else do you do";
        document.getElementById("otherCareer").style.border = "1px solid red";
    }else{
    document.getElementById("otherCareers_error").innerHTML="";
    document.getElementById("otherCareers_error").innerHTML="";
    document.getElementById("otherCareer").style.border = "none";
}
}

//WHAT AILMENTS HAVE YOU SEEN BEST RESULTS VALIDATION
function validateBestModality(){
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
