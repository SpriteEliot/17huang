var num = 1;
var line = document.getElementById('line');
var state = true;
class drawTree {
    constructor(line, drawLine, head, i, length) {
        this.line = document.getElementById('line');
        this.drawLine = this.line.getContext('2d');
        this.head = document.getElementById('head');
        this.drawLine.strokeStyle = '#2e6da4';
        this.line.width = 1000;
        this.line.height = 500;
        this.length = 100;
    }

    /*
        drawTeam(x, y) {
            var _self = this;
            clearInterval(timer);

            function start() {
                if (num < _self.length) {
                    _self.drawLine.moveTo(x, y);
                    _self.drawLine.lineTo(++x, ++y);
                    num++;
                    _self.drawLine.stroke();
                } else {

                }
            };
            var timer = setInterval(function () {
                start();
            }, 5);

        }
    */

    drawLineTo(x,y,n) {
        this.drawLine.moveTo(x,y);
        this.drawLine.lineTo(x+100*n,100+y);
        this.drawLine.stroke();
        this.drawHead(x+100*n,100+y);
    }
    drawHead(x, y) {
        this.drawLine.drawImage(this.head, x-30, y,50,66);
    }

    drawAll(x, y,n) {
        this.drawHead(x, y);
        var _self = this;
        var fn=n/2-n;
        for(let i=fn;i<n/2;i++){
         this.drawLineTo(x, y, i);
        }
    
        //clearInterval(setInterval('this.drawTeam(x,y)',1000));
        //setInterval('_self.drawTeam(100,100)',1000);
    }
    drawClear() {
        this.line.width = 1440;
        this.line.height = 900;
        this.drawLine.clearRect(0, 0, 1000, 500);

    }
}

function draw() {
    var tree = new drawTree();
    tree.drawAll(300, 200,5);

}

function clear() {
    var tree = new drawTree();
    tree.drawClear();
}

function drawSwitch() {
    if (state) {
        draw();
        state = false;
    } else {
        clear();
        state = true;
    }
}

/*
function getMousePos(event) {
    var e = event || window.event;
    x = e.clientX;
    y = e.clientY;
    console.log('x:' + x + 'y:' + y);
    let tree = new drawTree();
    tree.drawAll(x, y);
}
*/
;


class Circle{
    construcor(x,y){
        this.x=x;
        this.y=y;
        this.r=Math.random()*14+1;
        this._mx=Math.random()*2-1;
        this._my=Math.random()*2-1;
    }

    drawCircle(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle='rgba(204,204,204,0.2)';
        ctx.flll();
    }

    drawLine(ctx,_circle){
        let dx=this.x-_circle.x;
        let dy =this.y-_circle.y;
        letd=Math.sqrt(dx*dx+dy*dy);
        if(d<150){
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(_circle.x,_circle.y);
            ctx.closePath();
            ctx.strokeStyle='rgba(204,204,204,0.1)';
            ctx.stroke();
        }
    }

    move(w,h){
        this._mx=(this.x<w&&this.x>0)?this._wx:(-this._mx);
        this._my=(this.y<h&&this.x>0)?this._wy:(-this._my);
        this,x+=this._mx/2;
        this.y+=this._my/2;
    }
}

class currentCircle extends Circle{
    construcor(x,y){
        super(x,y);// 调用父类的constructor(x, y)
    }

    drawCircle(ctx){
        ctx.beginPath();
        this.r=(this.r<14&& this.r>1)?this.r+(Math.random()*2-1):2;
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle='rgba(45,120,244,'+(parseInt(Math.random()*100)/100)+')';
        ctx.fill();
    }
}

window.requestAnimationFrame=window.requestAnimationFrame ||window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let w= canvas.width=canvas.offsetWidth;
let h=canvas.height=canvas.offsetHeight;
let circles=[];
let current_circle=new currentCircle(0,0);

let draw=function name(params) {
    
}
