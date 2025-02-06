const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/auth.middleware')
const messageController = require('../controllers/message.controller')
router.post('/send/:id', authMiddleware, messageController.sendMessage);
router.get('/:id', authMiddleware, messageController.getMessages)
module.exports = router 