$(document).ready(function(){
	'use strict';
	/* =================
		Countdown Timer
	====================*/
	$('.countdown-timer').countdown('2016/07/14', function(event) { // DEFINE YOUR DATE HERE
	   var $this = $(this).html(event.strftime(''
	    + '<li><span>%D</span></li>'
	    + '<li><span> %H</span></li>'
	    + '<li><span> %M</span></li>'
	    + '<li><span> %S</span></li>'));
	});
});