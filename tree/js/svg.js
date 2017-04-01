function createHead(x,info) {
    var body = document.getElementsByTagName("svg")[0];
    for (let i = 0; i < x; i++) {
        //createLine(body);
        createLink(body,info)
    }

}
function createLink(parents,info) {
    var userName = document.createElement('a');
    var tspan=document.createElement('tspan');
    tspan.innerHTML=info;
    userName.appendChild(tspan);
    parents.appendChild(userName);
}

function createLine(parents) {
    var line = document.createElement('line');
    line.setAttribute('x1','0');
    line.setAttribute('x2','100');
    line.setAttribute('y1','0');
    line.setAttribute('y2','100');
    parents.appendChild(line);
}