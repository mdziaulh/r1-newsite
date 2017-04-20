jQuery(document).ready(function($){
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();

/*====================================================
    Owl Carousel
=====================================================*/


    jQuery('.c-testimonial__carousel').owlCarousel({
        animateIn: 'fadeInUp',
        animateOut: 'fadeOutDown',
        items:1,
        loop:true,
        autoplay:true,
        autoHeight: true,
        nav:true,
        navText: [ ],
        margin: 0,
        autoplaySpeed: 600,
        autoplayHoverPause: true,
        responsiveClass:true,
        autoplayTimeout: 3000,
    });


    jQuery('.c-about-work__slider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        controlNav: false,
        animationSpeed: 600,
        slideshowSpeed: 4000,
        smoothHeight: true,
        directionNav: true
    });

    jQuery('.rc-related-projects__carousel').owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoHeight: true,
        nav:true,
        navText: [ ],
        margin: 0,
        autoplaySpeed: 600,
        autoplayHoverPause: false,
        autoplayTimeout: 3000,
        margin: 0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            640:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    jQuery('.rc-feed-inner__image').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        controlNav: true,
        animationSpeed: 600,
        slideshowSpeed: 4000,
        smoothHeight: true,
        directionNav: false
    });

/*==================================
    Scrolling...
===================================*/
$('.c-header__bottom-arrow').on('click', 'a', function(e) {       
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});

/*====== Back to Top ======*/

$(".c-back-top").hide();
        
$('.c-back-top a').on('click', function(event) {
    $('body,html').animate({scrollTop:0},800);
    return false;
});

$(window).on('scroll', function() {
    
    if($(this).scrollTop()>$('#hero-panel').outerHeight()){
        $('.c-back-top').fadeIn();
    }
    else{
        $('.c-back-top').fadeOut();
    }
});


/*======================================
    Skill Bar
========================================*/
function isElementInViewport(){
    var scrollTop = $(window).scrollTop();
    var viewportHeight = $(window).height();
    $('.c-team-member__skiller #skill:not(.html5)').each(function(){
        var top = $(this).offset().top;
        console.log(top);
        console.log(scrollTop + viewportHeight);
        if(scrollTop + viewportHeight >= top ){
            $(this).find('.expand').addClass('html5');
            $(this).find('.expand1').addClass('css3');
            $(this).find('.expand2').addClass('jquery');
            $(this).find('.expand3').addClass('photoshop');
            $(this).find('.expand4').addClass('Wordpress');
            console.log(true);
        }else{
            console.log(false);
        }
    });
}
$(window).scroll(isElementInViewport);

/*============ Our Team Sliding ============*/


$('.c-our-team__image-box').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.c-team-member__details').slideDown();
    // $('.c-team-members__all').slideUp();
    $("#"+tab_id).slideUp();

    $('.c-our-team__close').click(function(){

        $('.c-team-member__details').slideUp();
        $('.c-team-members__all').slideDown();

    return false;
    });
return false;
});


// ===== Portfolio Tabs Settings ===== //

    $(".c-portfolio-menu__link").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".c-portfolio__tab-item").not(tab).slideUp();
        $(tab).slideDown();
    });

/*======= Cloase Dome ======*/
});

jQuery(window).load(function(){
    var container = jQuery('.module-masonry__container');
    container.masonry({
        itemSelector: '.module-masonry__grid-item'
    });

    container.imagesLoaded().always( function( instance ) {
        jQuery('.module-masonry__loader').fadeOut(function(){
            jQuery('.module-masonry__container').animate({
                opacity: 1
            }, function(){
                container.masonry('reload');
            });
        });        
    });
});

/*========= Isotop =========*/

jQuery(window).load(function($){

    /* Use this block of code to apply isotope for images */
    
    var $container = jQuery('#isotope-items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    
    /* Use this block of code to enable filter */
    
    jQuery('.rc-portfolio__nav a').click(function(){
        jQuery('.rc-portfolio__nav .current').removeClass('current');
        jQuery(this).addClass('current');
    
        var selector = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        
        return false;
    }); 
    
    /* Use this block of code to append additional item */
    
    var $container = jQuery('#isotope-items');
    jQuery('.append').click(function(){
        var $elems = getItemElement().add( getItemElement() ).add( getItemElement() );
        
        $container.append( $elems ).isotope( 'appended', $elems );
    });
    
    function getItemElement(i) {
        var rand = Math.floor((Math.random() * 8) + 1);
        var $item = jQuery('<div class="isotope-item rc-portfolio__item food"><img src="asset/images/service-img'+i+'.jpg" alt="image"></div>');
        return $item;
    }
    
    /* Use this block of code to automatically load photos when page load */
    
    do_isotope();
    
    function do_isotope(){
        var $container = jQuery('#isotope-items');
        var $elems = [];
        for ( var i = 1; i < 9; i++ ) {
            elem = getItemElement(i);
            $elems.push( elem );
        }
        
        jQuery.each($elems, function(index) {
            var item = jQuery(this);
            $container.delay(index*1000).append(item).isotope( 'appended', item ).isotope('layout');
        });
    }
});

$('.c-service__box').on('click', function(e) {       
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});