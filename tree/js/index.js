var line = document.getElementById('line');

class drawTree {
    constructor(line, drawLine, head) {
        this.line = document.getElementById('line');
        this.drawLine = this.line.getContext('2d');
        this.head = document.getElementById('head');
    }


    drawTeam(x, y) {
        this.drawLine.strokeStyle = '#ff0000';
        this.drawLine.moveTo(x, y);
        this.drawLine.lineTo(0, y*2);
        this.drawLine.stroke();
        this.drawLine.moveTo(x, y);
        this.drawLine.lineTo(x/2, y*2);
        this.drawLine.stroke();
        this.drawLine.moveTo(x, y);
        this.drawLine.lineTo(x, y*2);
        this.drawLine.stroke();
        this.drawLine.moveTo(x, y);
        this.drawLine.lineTo(x*2, y*2);
        this.drawLine.stroke();
        this.drawLine.moveTo(x, y);
        this.drawLine.lineTo(x*1.5, y*2);
        this.drawLine.stroke();
    }

    drawHead(x, y) {

        this.drawLine.drawImage(this.head, x - 30, y -140);
    }

    drawAll(x, y) {
        this.line.width = 1000;
        this.line.height = 500;
        this.drawLine.clearRect(0, 0, 1000, 500);
        this.drawTeam(x, y);
        this.drawHead(x, y);


    }
}

function getMousePos(event) {
    var e = event || window.event;
    x = e.clientX;
    y = e.clientY;
    console.log('x:' + x + 'y:' + y);
    let tree = new drawTree();
    tree.drawAll(x, y);
}

window.onload = function () {
    let tree = new drawTree();
    tree.drawHead(500, 250);

}