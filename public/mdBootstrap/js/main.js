var scroll = new SmoothScroll('a[href*="#"]',{
    speed:400
  });

  //objectFitImages();
  /* init Jarallax */
$(document).ready(function(){
    jarallax(document.querySelectorAll('.jarallax'));

    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
        keepImg: true,
    });
    new WOW().init();
});
