const express = require('express')
const router = express.Router()
const userModel = require('../models/user.model')
const authController = require('../controllers/auth.controller')
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout)

module.exports = router;