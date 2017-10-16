var express = require('express');
var app = express();
var router = require('./router.js');

//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//引入分离的路由
app.use('/', router);

//启动服务，监听一个端口，不要和页面的端口
app.listen(3030,function(){
    "use strict";
    console.log('启动后端服务器,3030端口监听中...')
});