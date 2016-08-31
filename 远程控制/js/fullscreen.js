var turnoff=document.getElementById("turnoff");
var fullimg=document.getElementById("fullimg");
var fullofscreen=document.getElementById("fullofscreen");
var fulls=document.getElementById("fulls");
var oTitle=document.getElementById("drag-area");

           // 找到支持的方法, 使用需要全屏的 element 调用 

function launchFullScreen(element) { 
if(element.requestFullscreen) { 
element.requestFullscreen(); 
} else if(element.mozRequestFullScreen) { 
element.mozRequestFullScreen(); 
} else if(element.webkitRequestFullscreen) { 
element.webkitRequestFullscreen(); 
} else if(element.msRequestFullscreen) { 
element.msRequestFullscreen(); 
} 
fullofscreen.style.height=window.screen.height+'px';
fullofscreen.style.display="block";
phoneImg.height=window.screen.height-74;
loginPanel.style.top=0;
  document.onmousemove=null;
        document.onmouseup=null;
} 


function exitFullscreen() { 
if(document.exitFullscreen) { 
document.exitFullscreen(); 
} else if(document.mozExitFullScreen) { 
document.mozExitFullScreen(); 
} else if(document.webkitExitFullscreen) { 
document.webkitExitFullscreen(); 
} 
fullofscreen.style.display="none";
phoneImg.height=window.screen.height*0.6;
loginPanel.style.top=50+"px";
console.log("全屏恢复之后的尺寸是"+window.screen.height*0.6);
} 
