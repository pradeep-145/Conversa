const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/auth.middleware')
const homeController = require('../controllers/home.controller')
router.get('/home', authMiddleware, homeController.home);
module.exports = router