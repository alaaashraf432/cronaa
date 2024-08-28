

// scroll to top jquery
$(document).ready(function () {
    $('#scroll-button').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });
})