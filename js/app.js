
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
  $('.owl-work').owlCarousel({
    stagePadding: 100,
    loop:true,
    center:true,
    margin: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause:true
  });
  $('.owl-cards').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false
  });

});
