
$(function(){
    var path = document.getElementById("animpath");
    var animFunc = new MotionPathEffect(path.pathSegList);
    var elem = document.getElementById('animatedElem');

    var animation = new Animation(elem, animFunc,
        { duration: 4000, iterations: Infinity }
    );

    var player = document.timeline.play(animation);
});