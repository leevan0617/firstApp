var express = require('express');
var router = express.Router();
var http=require("ykt-http-client");
 //获取电影
 router.get('/getmovies', function (req, res, next) {
	http.get("127.0.0.1:8080/movie/find", req.query).then((data) => {
		res.send(data)
	})
});
module.exports = router; 
