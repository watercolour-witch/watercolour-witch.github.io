$(document).ready(function(){
	'use strict';
	/* ===============================
		INSTAFEED (Instagram Gallery)
	================================*/
	var feed = new Instafeed({
        get: 'user', // Get photos based on tag
        accessToken: 'IGQVJYbEpRNW9XQzZAkUU8tLTFNU2l1ZAFZAERzY5MjJJRF9yLWM2Q1d3TG9EVTNLa0VGRDZAZAUjYtMTAzRXo0YTJzR1paWlM5eVdXU01ianIya2ZA3cm9DQUw3S19nTG5GYmdYRUhRd09Ra3gwaFQydjRyQgZDZD', // Access Token, generate yours here http://instagramwordpress.rafsegat.com/docs/get-access-token/
        userId: '1695826387', // User Id (The first row from access token, before the first dot (.) sign)
        template: '<li class="image-large"><a href="{{link}}" target="blank"><img src="{{image}}" class="image-gallery-item image-left full-width" /></a></li>',
        limit: 6, // Show only 6 photos
        resolution: 'standard_resolution',
        sortBy: 'most-liked'
    });
    feed.run();

});