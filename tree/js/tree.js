class tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=Math.random()*10+1;
        this._mx=Math.random()*2-1;
        this._my=Math.random()*2-1;
    }

    drawCircle(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.closePath();
        ctx.fillstyle='#ff0000';
        ctx.fill();
    }
    drawLine(ctx){}
}