import express from 'express';
import { getActiveScreens } from '../controllers/screenController.js';

const router = express.Router();

// GET /api/screens - Fetch active nodes for the landing page
router.get('/', getActiveScreens);

export default router;
