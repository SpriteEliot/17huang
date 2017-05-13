var swipeArea = document.getElementsByClassName('swiper-area')[0];
var imgArea = document.getElementsByClassName('img-area');
var sx = document.body.clientWidth;
var inital = 0;
for (var i = 0; i < imgArea.length; i++) {
    imgArea[i].style.width = sx + 'px';
}




function getTounch() {
    var startX, startY, endX, endY, moveLength;
    //获取点击开始的坐标
    document.addEventListener("touchstart", function (e) {
        startX = e.touches[0].pageX;
    });
    //获取点击结束后的坐标
    document.addEventListener("touchmove", function (e) {
        endX = e.changedTouches[0].pageX;
        moveLength = Math.round(endX - startX);
        if (inital <= 0 && inital >= -sx) {
            if (moveLength > -sx && moveLength < -sx / 2) {
                inital = -sx;

            } else if (moveLength < sx && moveLength > sx / 2) {
                inital = 0;

            } else {
                inital += moveLength;
                if(inital<-sx){
                    inital=-sx;
                }else if(inital>0){
                    inital=0;
                }
            }
        }

        console.log(inital);
        swipeArea.style.transform = "translate3d(" + inital + "px,0px,0px)";
        /*
        if(inital!=-sx&inital<-sx/2){
            inital=-sx;
        }else if(inital!=0 &&inital>-sx/2){
            inital=0;
        }
        swipeArea.style.transform = "translate3d(" + inital + "px,0px,0px)";*/
    });

}

window.onload = function () {
    getTounch();
}