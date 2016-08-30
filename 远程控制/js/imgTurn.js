
	window.onload=function(){
		var index=0;
		var timer=null;
		var pic=document.getElementById("pic").getElementsByTagName("li");
		var num=document.getElementById("num").getElementsByTagName("li");
		var demo=document.getElementById("demo");
		var left=document.getElementById("left");
		var right=document.getElementById("right");

	left.onclick=function(){
				index--;
				if (index<0) {index=num.length-1};
				changeOption(index);
			}
			//单击右箭头
			right.onclick=function(){
				index++;
				if (index>=num.length) {index=0};
				changeOption(index);
			}	

		demo.onmouseover=function (){
			clearInterval(timer);
		}

		demo.onmouseout=function(){
			timer=setInterval(run,2000)
		}

		for(var i=0;i<num.length;i++)
		{
			num[i].id=i;
			num[i].onmouseover=function(){
				clearInterval(timer);
				changeOption(this.id);
			}
		}

		if(timer){
			clearInterval(timer);
			timer=null;
		}

		timer=setInterval(run,2000)

		function run(){
			index++;
			if(index>num.length){index=0};
			changeOption(index);
		}

		function changeOption(curindex){
			
			for (var j = 0; j<num.length; j++) {
				pic[j].style.display="none";
				num[j].className="";
			}
			pic[curindex].style.display="block";
			num[curindex].className="active";
			index=curindex;
		}

	}
