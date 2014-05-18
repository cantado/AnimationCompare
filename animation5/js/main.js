
$(function(){

    var context = new webkitAudioContext();
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator.start(0);

    var elem1 = $('#animatedElem, #webanimation .animatedElem')[0];
    var elem2 = $('#animatedElem2, #webanimation .animatedElem2')[0];

    var animation1 = new Animation(elem1,
        [{left: "0px"}, {left: "100px"}],
        { duration: 2, fill: "forwards" }
    );
    var animation1sound = new Animation(null,
        function(val, anim, oldval){
            oscillator.frequency.value = val*500+200;
            console.log("anim1s");
        },
    animation1.endTime);

    var animation2 = new Animation(elem2,
        [{left: "150px"}, {left: "250px"}],
        { duration: 2, fill: "forwards" }
    );
    var animation2sound = new Animation(null,
        function(val, anim, oldval){
            if(val > 0) oscillator.frequency.value = 700-val*500;
        },
        animation2.endTime);

    var anim1 = new AnimationGroup([animation1, animation1sound]);
    var anim2 = new AnimationGroup([animation2, animation2sound]);

    var sequence = new AnimationSequence([anim1,anim2]);
    sequence.onend =  function(){ oscillator.stop(0); };

    var a1 = new Animation(
        document.getElementById('elem'),
        [{left: '0px'}, {left: '100px'}],
        {
            duration: 6,
            iterations: Infinity,
            iterationStart: 2,
            fill: "forwards",
            delay: 1,
            playbackRate: 2,
            direction: "alternate",
            easing: "ease-in"
        }
    );

// spielt die Animation ab
    var player = document.timeline.play(sequence);
});