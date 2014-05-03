
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var getCoordinates = function(val){
    var r = val * c.width / 1.5;
    var phi = (val * 45) % 360;
    return {
        x: r * Math.cos(phi) + c.width/2,
        y: r * Math.sin(phi) + c.height/2
    };
};

var animation = new Animation(null,
    function(val, anim, oldval){
        oldval = getCoordinates(oldval);
        val = getCoordinates(val);
        ctx.moveTo(oldval.x, oldval.y);
        ctx.lineTo(val.x, val.y);
        ctx.stroke();
    },
4);

var player = document.timeline.play(animation);