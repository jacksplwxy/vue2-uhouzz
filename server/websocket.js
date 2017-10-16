//http://www.cnblogs.com/stoneniqiu/p/5402311.html
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 3333 });
wss.on('connection', function (ws) {
    console.log('client connected...');
    ws.on('message', function (message) {
        console.log(message);
    });
    ws.send('欢迎来到异乡好居！');
});