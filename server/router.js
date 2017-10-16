var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mysql= require('mysql');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/nav_lxgy.json',function(req,res){
    var obj = {
        gongyu:1234,
        chuangwei:26584,
    };
    res.jsonp(obj);
});

router.get('/nav_hwfc.json',function(req,res){
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '',
	  database : 'yxhj'
	});
	connection.connect();
	console.log('数据库开始连接..')
	var  sql = 'SELECT * FROM nav_hwfc';
	connection.query(sql,function (err, result) {
        if(err){
          console.log(err.message);
          return;
        }
		console.log(result);
		res.jsonp(result); 
});
connection.end();
});

router.get('/nav_hwym.json',function(req,res){
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '',
	  database : 'yxhj'
	});
	connection.connect();
	console.log('数据库开始连接..')
	var  sql = 'SELECT * FROM hwym';
	connection.query(sql,function (err, result) {
        if(err){
          console.log(err.message);
          return;
        }
		console.log(result);
		res.jsonp(result); 
});
connection.end();
});

router.post('/selectCity.json', urlencodedParser,function(req,res){
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '',
	  database : 'yxhj'
	});
	connection.connect();
	console.log('数据库开始连接..')
	var kw=req.body.keyWords;
	var sql = "SELECT cityName FROM cities WHERE (cityID  LIKE '%"+kw+"%') OR (cityName LIKE '%"+kw+"%')";
	connection.query(sql,function (err, result) {
        if(err){
          console.log(err.message);
          return;
        }
		console.log(result);
		res.jsonp(result); 
});
connection.end();
});

module.exports = router;