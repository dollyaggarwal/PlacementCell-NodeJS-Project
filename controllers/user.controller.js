const User = require('../models/user.schema');
const Student = require('../models/student.schema');
const fs = require('fs');
const fastcsv = require('fast-csv');

module.exports.signup = function (req, res){
    if(req.isAuthenticated()){
        return res.redirect('back');
    }
    res.render('signup');
};

module.exports.signin = function (req, res) {
	if (req.isAuthenticated()) {
		return res.redirect('back');
	}
	res.render('signin');
};
module.exports.createSession = function (req, res) {
	console.log('Session created successfully');
	return res.redirect('/');
};

