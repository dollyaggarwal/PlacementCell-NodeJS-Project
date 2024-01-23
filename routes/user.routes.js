const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userControllers');


const userRouter = express.Router();

userRouter.get('/signup', signup);
module.exports = userRouter;

