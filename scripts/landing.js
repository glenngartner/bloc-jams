/**
 * Created by glenn on 12/28/2016.
 */

var animatePoints = function () {

    var revealPoint = function () {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };

    $.each($('.point'), revealPoint);

};

$(window).load(function () {

    // a window height of > 900 is better, for my desktop at least
    if ($(window).height() > 900) {
        animatePoints();
    }
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    $(window).scroll(function (e) {
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    })
});