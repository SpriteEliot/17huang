var line=document.getElementById('line');
var drawLine=line.getContext('2d');
drawLine.moveTo(0,0);
drawLine.lineTo(200,200);

drawLine.stroke();