$( window ).load(function() {

    if(document.getElementById("map")){
    console.log('load map');        
        mapboxgl.accessToken = 'pk.eyJ1IjoibGFsYTEyMTIiLCJhIjoiY2pvc3RoNTUyMHUyNDNqcHR4MGZrNjd6ZCJ9.5MOx28fKyQSzcx2-Z1aOBg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }
    //?????
    $('.hamb').change(($event)=>{
        console.log($('.hamb:checked').length);
        
        // $('body').removeClass('mobile-nav-active');
        // $('#mobile-nav-toggle i').removeClass('lnr-cross lnr-menu');
        // $('#mobile-body-overly').hide();
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
        $('#mobile-body-overly').toggle();
    });

    // $(document).on('click', '#mobile-nav-toggle', function(e) {
    
    //   }).on('change','.hamb',()=>{
    //     if($('.hamb').is(':checked'))
    //       {

    //       }

    //   });

    $(window).resize(($event)=>{
        var window_size_width = $(this).width(),
            window_size_height = $(this).height();
        console.log(window_size_height);
    })
    .click(($event)=>{
        // console.dir($event);
        console.log($event.target.className);
    //    if($event.target.className != 'hamb')
    //    {$('.hamb'). prop("checked", false);
        
    //    }
        // console.log($event.target.className == $event);
    }).scroll(function() {
        // Header scroll class transition navbar
        if ($(this).scrollTop() > 100) {
          $('#header').addClass('header-scrolled');
        } else {
          $('#header').removeClass('header-scrolled');
        }
      });

      
});



$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

    console.log(window_width);
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.nav-menu').superfish({
        animation: {
        opacity: 'show'
        },
        speed: 400
    });   

  // Mobile Navigation
  if ($('#nav-menu-container').length) {

    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    
    function chckvar(){
        var attr;
        if($('#nav-menu-container').find(".not-login").length > 0)
        {
          attr= {'class': '','id': ''};
        }else{attr= {'class': 'reverse-item','id': ''};}
        return attr;
    };

    $mobile_nav.find('> ul').attr(chckvar());

    $('body').append($mobile_nav);
    $('body').prepend('<div id="mobile-nav-toggle"><input type="checkbox" class="hamb"/><span></span><span></span><span></span></div>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
            // close mobilenav
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').fadeOut();
        }
      }
    });

    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        console.log('"s"');
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });
  

   



    $('.active-realated-carusel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],                
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });


    $('.active-about-carusel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });


    $('.active-offered-carusel').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:30,
        dots: true,
        responsive:{    
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        801:{
          items: 3
        }
    }
    });

    $('.active-info-carusel').owlCarousel({
        items:1,
        loop:true,
        margin: 100, 
        dots: true,    
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });


    $('.active-testimonial').owlCarousel({
        items:2,
        loop:true,
        margin: 30,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],        
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });


        $('.active-testimonials-slider').owlCarousel({
        items:3,
        loop:true,
        margin: 30,
        dots: true,
        autoplay:true,    
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            801: {
                items: 3,
            }            
        }
    });


    $('.active-fixed-slider').owlCarousel({
        items:3,
        loop:true,
        dots: true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });




    //  Start Google map 

            // When the window has finished loading create our google map below

 

        $(document).ready(function() {
            $('#mc_embed_signup').find('form').ajaxChimp();
        });      








 });
