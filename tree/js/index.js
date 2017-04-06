class drawTree {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }

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


    drawLineTo(x, y, n) {
        x=Math.random() * x;
        y= Math.random() * y;
        this.drawLine.moveTo(x,y);
        this.drawLine.lineTo(Math.random() * x, Math.random() * y);
        this.drawLine.stroke();
        this.drawLine.beginPath();
        this.drawLine.arc(x,y, 10, 0, 2 * Math.PI);
        this.drawLine.stroke();
    }
    drawHead(x, y) {
        this.drawLine.drawImage(this.head, x - 30, y, 50, 66);
    }

    drawCircle(x, y) {

    }

    drawAll(x, y, n) {
        //this.drawHead(x, y);
        var _self = this;
        var fn = n / 2 - n;
        for (let i = fn; i < n / 2; i++) {
            this.drawLineTo(x, y, i);
        }

    }
    drawClear() {
        this.line.width = 1440;
        this.line.height = 900;
        this.drawLine.clearRect(0, 0, 1000, 500);

    }
}

function draw() {
    var tree = new drawTree();
    tree.drawAll(300, 200, 5);

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


function getMousePos(event) {
    var e = event || window.event;
    x = e.clientX;
    y = e.clientY;
    console.log('x:' + x + 'y:' + y);
    let tree = new drawTree();
    tree.drawAll(x, y);
};