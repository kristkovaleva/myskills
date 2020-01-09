$(document).ready(function(){
	
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
            if ($(this).scrollTop() > 1000) {
                    $('#btn-scroll-top').fadeIn();
            } else {
                    $('#btn-scroll-top').fadeOut();
            }
    });
 
    //Click event to scroll to top
    $('#btn-scroll-top').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
    });
	
});