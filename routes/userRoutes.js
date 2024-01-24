const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/signup', userController.signup);
userRouter.get('/signin', userController.signin);
userRouter.post('/create', userController.createUser);
userRouter.post('/create-session', passport.authenticate('local', { failureRedirect: '/users/signin' }), userController.createSession);

module.exports = userRouter;

