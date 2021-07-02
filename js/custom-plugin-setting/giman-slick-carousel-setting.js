$(document).ready(function(){
	'use strict';
	/* =================================
	   Slick JS
	   (App Screenshot Carousel)
	====================================*/
	$('.testimony-wrapper').slick({
		fade: true,
		infinite: true,
		autoplay: false,
		dots: true,
		arrows: false,
		speed: 500,
		cssEase: 'linear'
	});


	$('.app-slider').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		dots: false,
		draggable: false
	});

	$('.instagram-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 700,
	  fade: true,
	  cssEase: 'ease-in',
	  autoplay: true,
	  pauseOnHover: false
	});

	$('.logo-slider').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		dots: true,
		arrows: false,
		speed: 500,
		// settings for responsive, display only one logo per slide
		responsive: [{
            breakpoint: 480, // in pixels
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
	});

});