function termsclick() {
    document.getElementById('terms_link').style.display = "block";
    document.getElementById('termsIframe').contentWindow.location.reload();
}

function termsclose() {
    document.getElementById('terms_link').style.display = "none";
}
window.onclick = function (event) {
    var model = document.getElementById("terms_link");
    if (event.target == model) {
        termsclose();
    }
}
document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
        termsclose();
    }
});

