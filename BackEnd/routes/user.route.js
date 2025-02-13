import express from 'express';
import { getUsersForSidebar } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getUsersForSidebar);

export default router;