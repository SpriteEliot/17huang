var bg = document.getElementById('bgCanvas');
var sx = document.body.clientWidth;
var sy = document.body.clientHeight;
bg.width = sx;
bg.height = sy;
var bgCtx = bg.getContext('2d');
var deltaTime=40;
var back;


function init() {
    back = new bgObj();
    back.init();

}


window.onload = function () {
 init();
gameloop();
}

function gameloop(){
        bgCtx.clearRect(0,0,sx,sy);
    back.draw();

	window.requestAnimFrame(gameloop);
}