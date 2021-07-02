$(document).ready(function(){
	'use strict';
	/* =========================
	GIMAN JS - TABLE OF CONTENTS
	============================

	1. DETECT MOBILE DEVICE
	2. HAMBURGER ICON & HEADER
	3. SMOOTH SCROLL
	4. HEADROOM (jQuery Navbar on Scroll Hide/Show)
	5. SWIPEBOX (Jquery lightbox)
	6. CONTACT OVERLAY
	7. CONTACT FORM VALIDATION
	8. AJAXCHIMP (jQuery Mailchimp Subscribe)
	9. SCROLL REVEAL (on scroll fade animations)
	10. STELLAR (jQuery Parallax Background)
	========================= */

	/* ====================
	1. DETECT MOBILE DEVICE
	=======================*/
	// Detect whether the page is being opened in mobile device or not
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};


    if(isMobile.any()){   
        $.each($(".btn-subscribe"), function(){
            $(this).after("</br></br></br>");
        });
    }

    

	/* ==============
	2. HAMBURGER ICON
	================*/
	// Look for .hamburger and body tag
	var hamburger = document.getElementsByClassName("hamburger")[0],
		body = document.getElementsByTagName("body")[0];

	// On hover
	hamburger.addEventListener("click", function() {
		event.preventDefault();
		// Toggle class "is-active"
		hamburger.classList.toggle("is-active");
		// Do something else, like open/close menu
		body.classList.toggle("nav-open");
	});

	// Remove classes on body tag and hamburger
	$(window).scroll(function() {
	    if ($(window).scrollTop() > 200) {
	      	// If body and hamburger has this class, remove it
	        if ($(body).hasClass('nav-open')) {
		         $(body).removeClass('nav-open');
	        }

	        if ($(hamburger).hasClass('is-active')) {
		        $(hamburger).removeClass('is-active');
	        }
	    }
	});


	/* ============================================
	3. HEADROOM (Jquery Navbar on Scroll Hide/Show)
	=============================================*/
	//Run headroom on desktop only
	if(!isMobile.any()) {

		// grab an element
		var navElement = document.querySelector("#nav-wrapper");

		// construct an instance of Headroom, passing the element
		var headroom  = new Headroom(navElement);

		// initialise
		headroom.init();
	}

	/* ===============
	4.	SMOOTH SCROLL
	=================*/
	// Smooth Scroll on Navigation Menu
	$(function() {
		$('#main-nav li a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 750);

					if ($(navElement).hasClass('headroom--pinned')) {
						$(navElement).removeClass('headroom--pinned');
					}

					return false;
				}
			}
		});
	});

	// Smooth Scroll to top On Nav Brand
	$('#to-top').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 750);
    });

    // Smooth Scroll on an anchor/link with .scroll-to class
    $(function() {
	  $('a.scroll-to[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 750);
	        return false;
	      }
	    }
	  });
	});


	/* ==========================
	5. SWIPEBOX (Jquery lightbox)
	===========================*/
	// Swipebox Gallery
	$( '.swipebox' ).swipebox();

	// Swipebox Video
	$( '.swipebox-video' ).swipebox();

    /* ===============
	6. CONTACT OVERLAY
	=================*/
	var triggerBttn = document.querySelectorAll( '.contact-trigger' );

	var	overlay = document.querySelector( 'div.contact-overlay' ),
		closeBttn = overlay.querySelector( 'a.overlay-close' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			$('body').removeClass('overlay-on');
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			$("body").addClass('overlay-on');
			classie.add( overlay, 'open' );
		}
		classie.remove(overlay, 'close');
	}

	var i;
	for (i = 0; i < triggerBttn.length; i++) {
		triggerBttn[i].addEventListener( 'click', toggleOverlay );
	}
	closeBttn.addEventListener( 'click', toggleOverlay );


	/* =======================
	7. CONTACT FORM VALIDATION
	========================*/
	$('#submit').click(function(e){

        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var fname = $('#fname').val(); // Variable for First Name field
        var email = $('#email').val(); // Variable for Email field
        var message = $('#message').val(); // Variable for Message field

     	// Form field validation
        if(fname.length == 0){
            var error = true;
            $('#fname').parent('div').addClass('field-error'); // Will add class "field-error" to display error label/sign
        } else {
            $('#fname').parent('div').removeClass('field-error');
        }

        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
            $('#email').parent('div').addClass('field-error');
        } else {
            $('#email').parent('div').removeClass('field-error');
        }

        if(message.length == 0){
            var error = true;
            $('#message').parent('div').addClass('field-error');
        } else {
            $('#message').parent('div').removeClass('field-error');
        }

        if(error == true){
        	$('#contact-error').addClass('show-up'); // Display error notification when there's an error
        } else {
           $('#contact-error').removeClass('show-up');
        }

        if(error == false){
            $.post("php/contact.php", $("#contact-form").serialize(),function(result){ // Sending message by contact.php file
                if(result == 'sent'){
                    $('#contact-success').addClass('show-up'); // Display success notifications when message sent & no error
                    $('.submit-btn').addClass('disabled');
                }
            });
        }
    });


    /* ======================================
	8. AJAXCHIMP (jQuery Mailchimp Subscribe)
	=======================================*/
	$('.the-subscribe-form').ajaxChimp({
		callback: mailchimpCallback,
	    url: 'http://worksofwisnu.us6.list-manage.com/subscribe/post?u=b57b4e6ae38c92ac22d92a234&amp;id=17754c49aa'
	    // Replace the URL above with your mailchimp URL (put your URL inside '').
	});

	// callback function when the form submitted, show the notification box
	function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-success').addClass('show-up');
        }
        else if (resp.result === 'error') {
             $('#subscribe-error').addClass('show-up');
        }
    }


    /* =========================================
	9. SCROLL REVEAL (on scroll fade animations)
	==========================================*/
	var revealConfig = { vFactor: 0.20 }
	window.sr = new scrollReveal(revealConfig);

	/* =====================================
	10. STELLAR (jQuery Parallax Background)
	======================================*/
	// Run stellar on desktop only
	if(!isMobile.any()) {
		$.stellar({
			responsive: false,
	        horizontalScrolling: false,
			parallaxElements: false
		});
	}

});
