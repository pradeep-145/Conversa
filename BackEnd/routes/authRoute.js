const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')
const authController = require('../controllers/authController')
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout',authController.logout)

module.exports = router;