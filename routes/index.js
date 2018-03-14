var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

/* 得到热映电影 */
router.get('/getHot_movie', function (req, res, next) {
	http.get("127.0.0.1:8080/hot_movie", req.query).then((data) => {
		res.send(data)
	})
});
/* 得到热波电影 */
router.get('/getHot_films', function (req, res, next) {
	http.get("127.0.0.1:8080/hot_films", req.query).then((data) => {
		res.send(data)
	})
});
/* 得到待映电影 */
router.get('/getWait_movie', function (req, res, next) {
	http.get("127.0.0.1:8080/wait_movie", req.query).then((data) => {
		res.send(data)
	})
});
module.exports = router;
