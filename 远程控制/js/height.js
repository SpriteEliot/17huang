var wrap = document.getElementById("wrap");

var phoneImg = document.getElementById("phone-img");
var loginPanel= document.getElementById("loginPanel");


function height(){
	
	

	wrap.style.height=window.innerHeight+"px";
	 document.onkeyup = function (event){
        event=event || window.event;
        if(event.keyCode==122){
        if(b=!b){
          wrap.style.height=window.screen.height+"px";
        }else{
        	wrap.style.height=window.innerHeight+"px";
        }
        }
        }
      }

function imgConsole(){
	

	phoneImg.height=window.screen.height*0.6;
	console.log("全屏恢复之前的尺寸是"+window.screen.height*0.6);

}