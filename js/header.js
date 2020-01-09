/* 
 * Site header: Fixed header with navigation
 */


// Fixed header
$(window).scroll(function () {

  if ( $(window).scrollTop() > 200 ) {
    $('header').addClass('fixed-header');
  } else {
    $('header').removeClass('fixed-header'); 
  }

});

// Scrolling Animation
$(document).on('click', 'a.scroll-link', function (event) {
    event.preventDefault();
 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
    
});