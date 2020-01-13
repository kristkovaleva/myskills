// Parallax //

let $fog = $('.fog'),
    $pers = $('.layer-1'),
    $sparks = $('.layer-2'),
    $container = $('body'),
    container_w = $container.width();

$(window).on('mousemove.parallax', function(event) {
  let pos_x = event.pageX,
      left  = 0;

  left = container_w / 2 - pos_x;
  

  TweenMax.to(
    $sparks, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px)'
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $pers, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 15 + 'px)'
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $fog,
    10,
    {
      css: {
        transform: 'rotate(' + left / 200 + 'deg)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});


// Back Change Js //

let images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"];
$(function () {
    let i = 0;
    $(".services-bg-image").css("background-image", "url(img/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".services-bg-image").fadeOut("slow", function () {
            $(this).css("background-image", "url(img/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 3000);
});


let change = function(section, block) {
  let list = document.querySelectorAll(`.${section} a`);
  list.forEach(function(el, i, ar) {
      el.addEventListener('click', function(e){
          e.preventDefault();
          let tab = document.querySelector(el.getAttribute('href'));

          // remove "act" class
          document.querySelector(`.${section} .act`)
              .classList.remove('act');
          document.querySelector(`.${block} .act`)
              .classList.remove('act');

          // set "act"
          el.classList.add('act');
          tab.classList.add('act');
      })
  })
}

change('tab-nav','tabs-wrap');
change('blog-nav-list','blog-wrap');


// Slider //

$('.slidebox').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  dots: true,
  autoplaySpeed: 1500,
});