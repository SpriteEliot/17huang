
//封装获取类名方法
function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName("*");

      for (var i=0,l=elements.length;i<l;i++){
        if(elements[i].className==clsName){
          eles.push(elements[i]);
        };
      };
      return eles;
};



function drag(){
   var oTitle=getByClass("drag-area","loginPanel")[0];
   //拖拽
   oTitle.onmousedown=fnDown;
   //关闭
   var oClose=document.getElementById("ui_boxyClose");
   oClose.onclick=function() {
   document.getElementById("loginPanel").style.display="none";
   }


  var oStart=document.getElementById("oStart");

  oStart.onclick=function(){
    document.getElementById("loginPanel").style.display="block";
  }

/*
   loginState.onclick=function(e){
     e = e || window.event;
     if(e.stopPropagation){
          e.stopPropagation();
     }else{
          e.cancelBubble=true;
     }
     stateList.style.display='block';
   }
*/
       /*/鼠标划过离开点击，可用伪类
       for (var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
          this.style.background='#567';
        }

        lis[i].onmouseout=function(){
          this.style.background='#fff';
        }
        lis[i].onclick=function(e){
         e = e || window.event;
        if(e.stopPropagation){
          e.stopPropagation();
        }else{
          e.cancelBubble=true;
        }
          var id=this.id;

          stateList.style.display="none";
          stateTxt.innerHTML=getByClass("stateSelect_text",id)[0].innerHTML;
          loginStateShow.className="";
          loginStateShow.className="login-state-show "+id;
        }
        }
        document.onclick=function(){
           stateList.style.display='none';
        }*/
       }



function fnDown(event){
  event= event|| window.event;
  var oDrag=document.getElementById("loginPanel");
  //光标按下时光标和面板的距离
      disX=event.clientX-oDrag.offsetLeft,
      disY=event.clientY-oDrag.offsetTop;

      //移动
      document.onmousemove=function(event){
        event= event|| window.event;
        fnMove(event,disX,disY);
      }
      //释放
      document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;//取消事件
      }
    }

function fnMove(e,posX,posY){
  var oDrag=document.getElementById("loginPanel");
    var l=e.clientX-posX,
        t=e.clientY-posY;
        winW=document.documentElement.clientWidth || document.body.clientWidth,
         winH=document.documentElement.clientHeight || document.body.clientHeight,
         maxW=winW-oDrag.offsetWidth-10,
         maxH=winH-oDrag.offsetHeight;

         if(l<0){
          l=0;
         }else if(l>maxW){
          l=maxW;
         };
          if(t<0){
          t=10;
         }else if(t>maxH){
          t=maxH;
         };

    oDrag.style.left=l+"px";
    oDrag.style.top=t+"px";
  }

