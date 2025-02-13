import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/send/:id', authMiddleware, sendMessage);
router.get('/:id', authMiddleware, getMessages);

export default router;