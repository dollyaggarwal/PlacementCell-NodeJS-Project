const express = require('express');

const router = express.Router();
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const homeController = require('../controllers/home.controller');
const companyRoutes = require('./companyRoutes');
const passport = require('passport');

router.get('/', passport.checkAuthentication, homeController.homePage);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);

module.exports = router;
