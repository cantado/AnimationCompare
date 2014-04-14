
$(function(){
    var animFunc = new MotionPathEffect($('#animpath')[0].pathSegList);
    var elem = $('#animatedElem, #webanimation .animatedElem')[0];

    var animation = new Animation(elem, animFunc,
        {
            duration: 4, iterations: Infinity
        }
    );

    var player = document.timeline.play(animation);
});