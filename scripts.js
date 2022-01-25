console.log('Scripts are running')

function getWindowParams(){
  sectionHeight1 = $("#section-1").height();
  sectionHeight2 = $("#section-2").height();
  sectionHeight3 = $("#section-3").height();
  sectionHeight4 = $("#section-4").height();
  divisor        = document.getElementById("divisor")
  divisor1       = document.getElementById("divisor1")
  divisor2       = document.getElementById("divisor2")
  divisor3       = document.getElementById("divisor3")
  $el            = $('#divisor');   
  bottom         = $el.position().top + $el.outerHeight(true)
  offsetBottom   = $el.offset().top + $el.outerHeight(true)
  space          = offsetBottom - bottom
  spottom        = space + bottom
  s1             = sectionHeight1
  s2             = sectionHeight2
  s3             = sectionHeight2 + sectionHeight3
}

function setPhone(){

    divisor.style.height = "0%";
    divisor1.style.height = "0%";
    divisor2.style.height = "0%";

    if(scroll > 0 && scroll < s2){
        divisor.style.height = ((((scroll)/bottom)*100)) + "%";
        divisor1.style.height = "0%";
    } else if(scroll > s2 && scroll < s3) {
        divisor.style.height = "100%";
        divisor1.style.height = ((((scroll - s2)/bottom)*100)) + "%";
    } else if(scroll > s3) {
        divisor1.style.height = "100%";
        divisor2.style.height = ((((scroll - s3)/bottom)*100)) + "%";
    }
}

$(document).ready(function(){
    history.scrollRestoration = 'manual';
    getWindowParams()
    setPhone()
}),

$(window).resize(function() {
    getWindowParams()
    setPhone()
}),

$(document).scroll(()=>{
  scroll = $(document.scrollingElement).scrollTop();
  $('nav').toggleClass('nav-scrolled', $(this).scrollTop() > 100);
  $('.nav-item a').toggleClass('nav-link-alt', $(this).scrollTop() > 100);
  $('.navbar-brand').toggleClass('navbar-brand-alt', $(this).scrollTop() > 100);
  $('.navbar-nav').toggleClass('navbar-nav-alt', $(this).scrollTop() > 100);
  $('.jwpVBP').toggleClass('white', scroll > (sectionHeight1/2));
  $('.bullet1').toggleClass('active', scroll > -1 && scroll < (sectionHeight1/2));
  $('.bullet2').toggleClass('active', scroll > sectionHeight1 && scroll < (sectionHeight1 + (sectionHeight2/2)));
  $('.bullet3').toggleClass('active', scroll > (sectionHeight1 + (sectionHeight2/2)) && scroll < (sectionHeight1 + sectionHeight2 + (sectionHeight3/2)));
  $('.bullet4').toggleClass('active', scroll > (sectionHeight1 + sectionHeight2 + (sectionHeight3/2)));
  setPhone();
});

