(function($) {
    "use strict";

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.elkevent-nav').addClass("is-sticky");
        } else {
            $('.elkevent-nav').removeClass("is-sticky");
        }
    });

   
    // Preloader Area
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });
    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
   

}(jQuery));