var socket=new WebSocket('ws://loclahost:8080');

socket.onopen=function (event) {
    socket.send('i am a client');

    socket.onmessage=function (event) {
        console.log('client notified socket');
    };
    socket.close();
}