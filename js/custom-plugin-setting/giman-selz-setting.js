$(function() {
	'use strict';
	$.selz({
	  theme: {
	    button: {
	      bg: "#f36843",
	      text: "#fff"
	    },
	    checkout: {
	      headerBg: "#282828",
	      headerText: "#fff"
	    }
	  },
	  getTracking: function($link) {
	    return $link.data("tracking");
	  },
	  onDataReady: function ($link, data) {
	  },
	  onModalOpen: function ($link) {
	    // Track open in Google Analytics
	    ga('send', 'pageview', $link.attr("href"));
	  },
	  onPurchase: function (data) {
	    // Track purchase
	  },
	  onProcessing: function (data) {
	    // Track processing
	  },
	  onClose: function ($link, data) {
	    // Continue checkout flow
	    if(typeof data.modal_url === "string"){
	      $link.data("modal-url", data.modal_url);
	    }
	  }
	});
});