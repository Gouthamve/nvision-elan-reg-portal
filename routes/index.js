'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/team', function(req, res, next) {
  res.render('team-reg-setup');
});

router.post('/teamreg', function(req, res, next) {
	let idx = (Array(parseInt(req.body.count)).fill().map((x,i)=>(i+1)));
  res.render('team-reg', {idx: idx, count: req.body.count});
});

router.post('/teamreg2', function(req, res) {
	console.log(req.body);
	res.redirect('/team');
});

router.get('/teamtable', function(req, res) {
	res.render('teamtable');
});

router.post('/indireg', function(req, res, next) {
	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.mobile,
		college: req.body.college
	});

	newUser.gender = req.body.male ? 'male' : 'female';
	User.count()
		.exec((err, count) => {
			if (err)
				return err;

			newUser.iithId = 'IITH2k16' + (1000 + count);
			newUser.save(function(err) {
				if (err) {
					return err;
				}

				res.redirect('/');
			})
		});
});

router.get('/inditable', function(req, res, next) {
	User.find()
		.exec((err, users) => {
			if (err)
				return err;

			res.render('inditable', {users: users});
		});
});

module.exports = router;
