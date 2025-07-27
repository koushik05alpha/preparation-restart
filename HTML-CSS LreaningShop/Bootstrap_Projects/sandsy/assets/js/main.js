(function ($) {
    "use strict";

    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
    $(window).on('scroll', function(){
		AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    });
    
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });

    /*--
        Header Sticky
    -----------------------------------*/
    $window.on('scroll', function () {
        if ($window.scrollTop() > 350) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });


    /*--
        Off Canvas Function
    -----------------------------------*/
    
    $('.header-popup-menu-toggle').on('click', function(){
        $('.site-main-popup-menu').addClass('open')
    });
    
    $('.menu-close').on('click', function(){
        $('.site-main-popup-menu').removeClass('open')
    });


    /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
    SVGInject(document.querySelectorAll("img.svgInject"), {
        makeIdsUnique: true,
        afterInject: function (img, svg) {
            new Vivus(svg, {
                duration: 80
            });
        }
    });
    /* Vivus On Hover */
    $('[data-vivus-hover]').hover(function () {
        var svg = $(this).find('svg')[0];
        new Vivus(svg, {
            duration: 50
        });
    })


    // Team Thumb Slider 
    var teamThumbSlider = new Swiper('.team-thumb-slider', {
        slidesPerView : 3,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        freeMode: true,
        spaceBetween : 40,
        loopedSlides: 5, //looped slides should be the same
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            1499:{
                slidesPerView : 3
            },
            991:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 1
            },
            575:{
                slidesPerView : 1,
                spaceBetween : 20
            },
            320:{
                slidesPerView : 1,
                spaceBetween : 20
            }
        }
    });

    // Team Content Slider
    var teamContentSlider = new Swiper('.team-content-slider', {
        spaceBetween: 0,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
          swiper: teamThumbSlider
        }
      });


       // Testimonial Slider
        var testimonialSlider = new Swiper('.testimonial-slider', {
            slidesPerView : 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            spaceBetween : 50,
            autoHeight: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                1499:{
                    slidesPerView : 1
                },

                991:{
                    slidesPerView : 1
                },

                767:{
                    slidesPerView : 1

                },

                575:{
                    slidesPerView : 1
                }
            }
        });

    // Brand Carousel Slider
    var brandSlider = new Swiper('.brand-carousel', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            1200: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 2
            }
        }
    })



    /*--
        Magnific Popup
    -----------------------------------*/
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    $('.v-popup').magnificPopup({
        type: 'iframe'
    });

    /* ----------------------------
        Portfolio Masonry Activation
    -------------------------------*/
    $(window).load(function () {
        $('.insta-masonary-wrapper').imagesLoaded(function () {

            // init Isotope
            var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.resizer',
                }
            });
        });
    })


      


    /*--
        Scroll Up
    -----------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();


     /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
    $(function() {

        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-messege');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });

    });

    




    /*--
        On Load Function
    -----------------------------------*/
    $window.on('load', function () {
        $('.intro-section').addClass('active');
    });

    /*--
        Resize Function
    -----------------------------------*/
    $window.resize(function () {});
    
})(jQuery);

