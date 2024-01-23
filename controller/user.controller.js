const User = require('../models/userSchema');
const Student = require('../models/studentSchema');
const fs = require('fs');
const fastcsv = require('fast-csv');

module.exports.signup = function (req, res){
    if(req.isAuthenticated()){
        return res.redirect('back');
    }
    res.render('signup');
};

