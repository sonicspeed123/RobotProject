var express = require('express');
var redis = require('redis');
var redisClient = redis.createClient();
var router = express.Router();


router.get('/', function(req, res){
	redisClient.smembers('robots', function(err, robots){
		res.locals.robots = robots ? robots : [];
		res.render('robots');
	});
});


router.post('/', function(req, res){
	redisClient.sadd('robots', req.body.name);
	res.redirect('/robots');
});

module.exports = router;