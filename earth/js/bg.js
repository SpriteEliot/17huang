function bgObj() {
    this.x = [];
    this.y = [];
    this.r=[];
    this.spd =3;
    this.color = '#fff';
}

bgObj.prototype.num = 200;
bgObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i]=Math.random()*sx;
        this.y[i]=Math.random()*sy;
    }
}

bgObj.prototype.draw = function () {
    for(var i=0;i<this.num;i++){
    this.x[i]+=this.spd;
    if(this.x[i]>sx){
        this.x[i]=0;
    }
    bgCtx.fillStyle = this.color;
    bgCtx.beginPath();
    bgCtx.arc(this.x[i], this.y[i], 2*Math.random(), 0, Math.PI * 2);
    bgCtx.fill();
    console.log(this.x[i]);
    }

}

bgObj.prototype.move = function () {

}

