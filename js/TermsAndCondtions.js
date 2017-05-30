
function show(id) {
    if (id == "terms" || id == "terr_terms" || id == "privacy_terms") {
        document.getElementById("terms").classList.add("terms_menu");
        document.getElementById("disclaim").classList.remove("terms_menu");
        document.getElementById("privacy").classList.remove("terms_menu");
        document.getElementById("cookie").classList.remove("terms_menu");
        document.getElementById("terms_of_use").style.display = "block";
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("privacy&policy").style.display = "none";
        document.getElementById("cookiepolicy").style.display = "none";
    }
    else if (id == "disclaim") {
        document.getElementById("terms").classList.remove("terms_menu");
        document.getElementById("terms").classList.add("termsmenu");
        document.getElementById("disclaim").classList.add("terms_menu");
        document.getElementById("privacy").classList.remove("terms_menu");
        document.getElementById("cookie").classList.remove("terms_menu");
        document.getElementById("terms_of_use").style.display = "none";
        document.getElementById("disclaimer").style.display = "block";
        document.getElementById("privacy&policy").style.display = "none";
        document.getElementById("cookiepolicy").style.display = "none";
    }
    else if (id == "privacy" || id == "p_rights" || id == "p_rights-2") {
        document.getElementById("terms").classList.remove("terms_menu");
        document.getElementById("terms").classList.add("termsmenu");
        document.getElementById("disclaim").classList.remove("terms_menu");
        document.getElementById("privacy").classList.add("terms_menu");
        document.getElementById("cookie").classList.remove("terms_menu");
        document.getElementById("terms_of_use").style.display = "none";
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("privacy&policy").style.display = "block";
        document.getElementById("cookiepolicy").style.display = "none";
    }
    else if (id == "cookie" || id == "cookie_2") {
        document.getElementById("terms").classList.remove("terms_menu");
        document.getElementById("terms").classList.add("termsmenu");
        document.getElementById("disclaim").classList.remove("terms_menu");
        document.getElementById("privacy").classList.remove("terms_menu");
        document.getElementById("cookie").classList.add("terms_menu");
        document.getElementById("terms_of_use").style.display = "none";
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("privacy&policy").style.display = "none";
        document.getElementById("cookiepolicy").style.display = "block";
    }
}



