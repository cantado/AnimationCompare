
$(function(){
    var elem = $('#animatedElem, #webanimation .animatedElem')[0];

    var animation = new Animation(elem,
        [
            {left: "0px",   top: "0px"},
            {left: "100px", top: "0px"},
            {left: "100px", top: "100px"},
            {left: "0px",   top: "100px"},
            {left: "0px",   top: "0px"}
        ],
        {
            duration: 4000, iterations: Infinity
        }
    );

    var player = document.timeline.play(animation);
});