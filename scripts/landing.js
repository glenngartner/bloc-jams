/**
 * Created by glenn on 12/28/2016.
 */

var point = document.getElementsByClassName('point');

var revealPoint = function (points) {

    var transform = "scaleX(1) translate(0)";

    for (var i = 0; i < points.length; i++) {
        points[i].style.opacity = 1;
        points[i].style.transform = transform;
        points[i].style.msTransform = transform;
        points[i].style.WebkitTransform = transform;
    }

};

revealPoint(point);