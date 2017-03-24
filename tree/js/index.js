var num = 1;
var line = document.getElementById('line');
var state = true;
class drawTree {
    constructor(line, drawLine, head, timer, i, length) {
        this.line = document.getElementById('line');
        this.drawLine = this.line.getContext('2d');
        this.head = document.getElementById('head');
        this.drawLine.strokeStyle = '#2e6da4';
        this.timer = timer;
        this.line.width = 1000;
        this.line.height = 500;
        this.length = 100;
    }


    drawTeam(x, y) {
        var _self = this;

        function start() {

            if (num < _self.length) {
                _self.drawLine.moveTo(x, y);
                _self.drawLine.lineTo(++x, ++y);
                num++;
                _self.drawLine.stroke();
                console.log(x);
            } else {}

        };
        setInterval(function () {
            start();
        }, 5);
    }

    drawHead(x, y) {
        this.drawLine.drawImage(this.head, x, y);
    }

    drawAll(x, y) {
        var _self = this;
        this.drawTeam(x, y)
        //clearInterval(setInterval('this.drawTeam(x,y)',1000));
        //setInterval('_self.drawTeam(100,100)',1000);
        //this.drawHead(x, y);
    }
    drawClear() {
        this.line.width = 1440;
        this.line.height = 900;
        this.drawLine.clearRect(0, 0, 1000, 500);

    }
}

function draw() {
    var tree = new drawTree();
    tree.drawAll(500, 200);

}

function clear() {
    var tree = new drawTree();
    tree.drawClear();
}

function drawSwitch() {
    if (state) {
        let t = setTimeout(draw(), 3000);
        state = false;
    } else if (state = 0) {
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