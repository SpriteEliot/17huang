var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = canvas.offsetWidth;
var h = canvas.height = canvas.offsetHeight;
var head = document.getElementById('head');
class tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10 + 1;
        this._mx = Math.random() * 2 - 1;
        this._my = Math.random() * 2 - 1;
    }

    drawCircle(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillstyle = '#ff0000';
        ctx.fill();
    }
    drawLine(ctx, hx, hy) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(hx, hy);
        this.drawHead
        ctx.closePath();
        ctx.strokeStyle = '#666';
        ctx.stroke();
    }

    drawHead(ctx, head, hx, hy) {
        ctx.drawImage(head, hx - 30, hy, 50, 66);
    }
}

var draw = function () {
    var startDraw = new tree(w / 2, h*0.1);
    let hx = Math.random() * w;
    let hy = Math.random() * h*0.7;

    startDraw.drawLine(ctx, hx, hy);
    startDraw.drawHead(ctx, head, hx, hy);
    //requestAnimationFrame(draw);


}

var drawMore = function (num) {
    ctx.clearRect(0, 0, w, h);
    var startDraw = new tree(w / 2, h / 2);
    for (let i = 0; i < num; i++) {
        draw();
    }
    startDraw.drawHead(ctx, head, w / 2,  h*0.1);
}

window.onload = function () {
    drawMore(10);
}