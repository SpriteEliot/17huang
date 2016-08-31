var imgTotal=["img/p6.jpg","img/iphone.jpg","img/m3.jpg"];
var i=0;
var play=document.getElementById("play");
var b=false;
var timer;





function imgChange(){
	     b=true;
		i+=1;
		if(i == imgTotal.length){
			i=0;
		}

		phoneImg.src=imgTotal[i];
			console.log(i);
	}







