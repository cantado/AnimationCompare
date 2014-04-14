
$(function(){

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    var animation = new Animation(null,
        function(val, anim, oldval){
            if(oldval>val){
                ctx.clearRect(0,0,150,150);
                ctx.beginPath();
            }
            ctx.moveTo(oldval*150,oldval*150);
            ctx.lineTo(val*150,val*150);
            ctx.stroke();
        },
        {
            duration: 4
        }
    );

    var player = document.timeline.play(animation);
});