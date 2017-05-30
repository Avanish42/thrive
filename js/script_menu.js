//FINDING BROWSER HEIGHT AND WIDTH
function find_browser_width_and_height(){
    var BrowserWidth = window.innerWidth;
    var BrowserHeight = window.innerHeight;
    
    var Width_Height=[BrowserWidth, BrowserHeight];
    
    return Width_Height;
}

//SET LEFT AND RIGHT PART OF MENU HEIGHT AND WIDTH
function Set_Menu_HeightAndWidth(){
    
    Browser_Width_Height=find_browser_width_and_height();
    Browser_Width=Browser_Width_Height[0]+"px";
    Browser_Height=Browser_Width_Height[1]+"px";

    Browser_Height_2=Browser_Width_Height[1]*1.00+"px";
    
    if(Browser_Width_Height[0] <= 1024){
        Browser_Width_30=Browser_Width_Height[0]+"px";
        document.getElementById('MenuDiv').style.width="100%";
        document.getElementById("our_story_div").classList.remove("active");
    }else{
        Browser_Width_30=Browser_Width_Height[0]*0.3+"px";
        Browser_Width_70=Browser_Width_Height[0]*0.7+"px";
        document.getElementById('MenuDiv').style.width=Browser_Width;
    }
    
    
    document.getElementById('MenuDiv').style.height=Browser_Height;
    
    document.getElementById('LeftSideMenu').style.height=Browser_Height_2;
    document.getElementById('RightSideMenu').style.height=Browser_Height_2;
    
    document.getElementById('LeftSideMenu').style.width=Browser_Width_30;
    document.getElementById('RightSideMenu').style.width=Browser_Width_70;
}


function remove_active_classes_to_all_menus(){
    document.getElementById("our_story_div").classList.remove("active");
    document.getElementById("thriive_tribe_div").classList.remove("active");
    document.getElementById("whats_happening_div").classList.remove("active");
    document.getElementById("therapist_div").classList.remove("active");
    document.getElementById("practitioners_div").classList.remove("active");
    document.getElementById("thriive_world_div").classList.remove("active");
}

//SET ALL MENU IMAGES TO DISPLAY=NONE
function hide_all_menu_images(){
    document.getElementById('our_story_img').style.display="block";
    document.getElementById('thriive_tribe_img').style.display="none";
    document.getElementById('whats_happening_img').style.display="none";
    document.getElementById('thriive_therapy_img').style.display="none";
    document.getElementById('thriive_practitioners_img').style.display="none";
    document.getElementById('thriive_world_img').style.display="none";
}

function activate_ourstory_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="block";
    document.getElementById("our_story_div").classList.add("active");
}

function activate_thriive_tribe_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
    document.getElementById('thriive_tribe_img').style.display="block";
    document.getElementById("thriive_tribe_div").classList.add("active");
}

function activate_whats_happening_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
    document.getElementById('whats_happening_img').style.display="block";
    document.getElementById("whats_happening_div").classList.add("active");
}

function activate_therapies_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
    document.getElementById('thriive_therapy_img').style.display="block";
    document.getElementById("therapist_div").classList.add("active");
}

function activate_practitioners_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
    document.getElementById('thriive_practitioners_img').style.display="block";
    document.getElementById("practitioners_div").classList.add("active");
}

function activate_thriive_world_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
    document.getElementById('thriive_world_img').style.display="block";
    document.getElementById("thriive_world_div").classList.add("active");
}

function activate_thriive_talks_img(){
    remove_active_classes_to_all_menus()
    hide_all_menu_images();
    document.getElementById('our_story_img').style.display="none";
}

function closemenu() {
     document.getElementById("menu").style.width = "0%";
}

function menu_list() {
     document.getElementById("menu").style.width = "100%";
}

function display_thriive_world_submenu(){
	document.getElementById("thriive_world_sub_menu").style.display="block";
}

//function display_wspProviderDiv(){
//	document.getElementById("wsp_provider_div").style.display="block";
//}
//
//function hide_wspProviderDiv(){
//	document.getElementById("wsp_provider_div").style.display="none";
//}

function hide_thriive_world_submenu(){
	document.getElementById("thriive_world_sub_menu").style.display="none";
}