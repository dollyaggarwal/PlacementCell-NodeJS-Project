const express = require('express');
const passport = require('passport');
const companyController = require('../controllers/company.controller');
const companyRouter = express.Router();

// -------- Get requests ----------
companyRouter.get('/home', passport.checkAuthentication, companyController.companyPage);

companyRouter.get('/allocate', passport.checkAuthentication, companyController.allocateInterview);

// -------- Post Requests ---------

companyRouter.post('/schedule-interview', passport.checkAuthentication, companyController.scheduleInterview);
companyRouter.post('/update-status/:id', passport.checkAuthentication, companyController.updateStatus);

module.exports = companyRouter;
