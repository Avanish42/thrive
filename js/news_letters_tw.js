
window.onresize= displaynewsletters;

function   displaynewsletters(){
    

    if (window.innerWidth>736){
        
            desktop_showDivs_NewsLetter(1);
        
    }else{
        Mobile_showDivs_NewsLetter(1);
    }
}

            var newsletter_slideIndex_deskpot = 1;

            function show_next_newsLetter_desktop(n) {
              Mobile_showDivs_NewsLetter(newsletter_slideIndex_deskpot += n);
            }
			

            function desktop_showDivs_NewsLetter(n) {
              var i;
              var x = document.getElementsByClassName("NewsLetterDesktop");
                
              if (n > x.length) {
                  newsletter_slideIndex_deskpot = 1;
              }
              if (n < 1) {
                  newsletter_slideIndex_deskpot = x.length;
              }
              for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
              }
                fadeIn(x[newsletter_slideIndex_deskpot-1]);
                x[newsletter_slideIndex_deskpot-1].style.display = "block";
            }
             
            function fadeIn(element) {
              element.style.opacity = 0;


              var Mobile_tick = function() {
                element.style.opacity = +element.style.opacity + 0.01;


                if (+element.style.opacity < 1) {
                  (window.requestAnimationFrame && requestAnimationFrame(Mobile_tick)) || setTimeout(Mobile_tick, 16)
                }
              };

              Mobile_tick();
            }




var newsletter_slideIndex =1;

  function show_next_newsLetter_mobile(n) {
              Mobile_showDivs_NewsLetter(newsletter_slideIndex += n);
            }
			

            function Mobile_showDivs_NewsLetter(n) {
              var i;
              var x = document.getElementsByClassName("Newsletter");
                
              if (n > x.length) {
                  newsletter_slideIndex = 1;
              }
              if (n < 1) {
                  newsletter_slideIndex = x.length;
              }
              for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
              }
                fadeIn(x[newsletter_slideIndex-1]);
                x[newsletter_slideIndex-1].style.display = "block";
            }
             
            function fadeIn(element) {
              element.style.opacity = 0;


              var Mobile_tick = function() {
                element.style.opacity = +element.style.opacity + 0.01;


                if (+element.style.opacity < 1) {
                  (window.requestAnimationFrame && requestAnimationFrame(Mobile_tick)) || setTimeout(Mobile_tick, 16)
                }
              };

              Mobile_tick();
            }
            