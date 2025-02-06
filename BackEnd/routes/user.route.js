const express = require('express')
const { authMiddleware } = require('../middleware/auth.middleware')
const router = express.Router()
const { getUsersForSidebar } = require('../controllers/user.controller')
router.get('/', authMiddleware, getUsersForSidebar)
module.exports = router