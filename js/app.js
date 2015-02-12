
$(window).scroll(function() {
    if ($(".navbar").offset().top > 5000) {
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
  $('#coffee_counter').html(function(){
    var start = Date.parse(2012,16,7), now = Date.now(), diff = now - start;
    return Math.round(diff / 1000 /60 /60 / 24) * 2;
  });
  $('#code_counter').html(function(){
    var start = Date.parse(2010,16,7), now = Date.now(), diff = now - start;
    return Math.round(diff / 1000 /60 /60 / 24) * 15;
  });
});
