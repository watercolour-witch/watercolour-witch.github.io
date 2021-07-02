$(document).ready(function(){
	'use strict';
	/* ===============================
		ISOTOPE (jQuery Sort & FIlter)
	================================*/
	var $filterContainer = $('.bundle-list-filter');

	//	Show All the filter items first
	$filterContainer.isotope({
	  filter: '*',
	  itemSelector: '.bundle-filter',
	  layoutMode: 'fitRows'
	});

	//	Adjust active class for the active filter button
	$('.filter-button a').click(function(){
        $('.filter-button .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');

        //	Filter item based on active selector
        $filterContainer.isotope({
            filter: selector
         });
         return false;
    });

});