
$(function(){
    var path = document.getElementById("animpath").cloneNode();
    var animFunc = new MotionPathEffect(path.pathSegList);
    var elem = document.getElementById('animatedElem');

    var animation = new Animation(elem, animFunc,
        { duration: 4, iterations: Infinity }
    );

    var player = document.timeline.play(animation);
});