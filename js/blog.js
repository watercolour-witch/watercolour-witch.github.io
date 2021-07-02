toggleLink = jQuery('.readMoreLink');    
for (var i = 0; i < toggleLink.length; i++) {              // for each blog post
    $(toggleLink[i]).on("click", function () {  // add an onClick listener
        var storyBody = jQuery(this).parent().siblings('.storyBody');
        storyBody.toggle();
        if ( storyBody.is( ":visible" ) ) {
            $(this).text('Read less...');
        } else {
            $(this).text('Read more...');
        }
    });
}