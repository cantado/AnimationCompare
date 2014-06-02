
$(function(){
    var elem1 = $('#animatedElem, #webanimation .animatedElem')[0];
    var elem2 = $('#animatedElem2, #webanimation .animatedElem2')[0];

    var timeModel = { duration: 2000, fill: "forwards" };

    var animation1 = new Animation(elem1,
        [{left: "0px"}, {left: "100px"}],
        timeModel
    );
    var animation2 = new Animation(elem2,
        [{left: "150px"}, {left: "250px"}],
        timeModel
    );

    var sequence = new AnimationSequence([animation1,animation2]);

    var player = document.timeline.play(sequence);
});