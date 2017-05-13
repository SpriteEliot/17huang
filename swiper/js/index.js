var swipeArea = document.getElementsByClassName('swiper-area')[0];
var imgArea=document.getElementsByClassName('img-area');
var sx=document.body.clientWidth;

for(var i=0;i<imgArea.length;i++){
    imgArea[i].style.width=sx+'px';
}


swipeArea.addEventListener('click', function () {
    swipeArea.style.transform = "translate3d(-"+sx+"px,0px,0px)";
})

function tounch(event) {
    var event=
}