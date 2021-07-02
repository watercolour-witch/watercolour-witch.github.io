$(document).ready(function(){
	'use strict';
	/* ===============================================
		TEAM SECTION (Define max height of team photo)
	================================================*/
	// Run this on mobile device only
//	if(!isMobile.any()) {
		// Get the height of team description
		var teamDescHeight = document.getElementsByClassName("team-description")[0].clientHeight;

		// Put the height value to define max height of team photo
		$(".team-photo img").css({height: teamDescHeight});
//	}
});