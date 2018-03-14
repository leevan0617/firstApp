var express = require('express');
var router = express.Router();
var http=require("ykt-http-client");
// 增加用户
router.post('/addUser', function (req, res) {
	http.post("127.0.0.1:8080/users/add",req.body).then((data) => {
		res.redirect("http://127.0.0.1:3000/login.html");		
	})
});
router.post('/checkedName', function (req, res) {
	http.post("127.0.0.1:8080/users/find",req.body).then((data) => {
		res.send(data)
	})
});
router.post('/login', function (req, res){
    req.body.findType="exact";
    console.log(req.body);
	http.post("127.0.0.1:8080/users/find",req.body).then((data) => {
        res.send(data)
	})
});
module.exports = router;
