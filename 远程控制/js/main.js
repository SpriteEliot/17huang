var wrapHeight;
var b=false;
var play=document.getElementById("play");
var flag=0;

document.body.onload = start ;

function start(){
	init();
}



function init(){
	height();
	drag();
	imgConsole();
	
	play.onclick=function(){
	if(b=!b){
		console.log("dianji ");
		play.className="glyphicon glyphicon-play";
		timer=setInterval(imgChange,1500);
}else{
	play.className="glyphicon glyphicon-pause";
	clearInterval(timer);
	}
};
    
}
