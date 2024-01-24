const express = require('express');
const passport = require('passport');

const studentRouter = express.Router();

const studentController = require('../controllers/student.controller');

// ------------------ Get requests ------------
studentRouter.get('/create', passport.checkAuthentication, studentController.createStudentPage);

studentRouter.get('/delete/:id', passport.checkAuthentication, studentController.deleteStudent);

// ------------------- Posts Requests ----------
studentRouter.post('/create-student', passport.checkAuthentication, studentController.createStudent);

module.exports = studentRouter;
