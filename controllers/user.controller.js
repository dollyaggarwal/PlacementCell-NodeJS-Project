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

module.exports.signout = function (req, res) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
	});
	return res.redirect('/users/signin');
};

// create user
module.exports.createUser = async function (req, res) {
	const { name, email, password, confirmPassword } = req.body;
	try {
		if (password !== confirmPassword) {
			console.log(`Passwords dont match`);
			return res.redirect('back');
		}
		const user = await User.findOne({ email });

		if (user) {
			console.log(`Email already exists`);
			return res.redirect('back');
		}

		const newUser = await User.create({
			name,
			email,
			password,
		});

		await newUser.save();

		if (!newUser) {
			console.log(`Error in creating user`);
			return res.redirect('back');
		}

		return res.redirect('/users/signin');
	} catch (error) {
		console.log(`Error in creating user: ${error}`);
		res.redirect('back');
	}
};


