$( document ).ready(function(){

    $(".button-collapse").sideNav();
    $('.slider').slider();
    $('.parallax').parallax();

    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .stop().animate({scrollTop: targetOffset}, 1300);
        return false;
        }
        }
    });

});