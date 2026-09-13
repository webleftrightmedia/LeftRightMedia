import express from 'express';
import { createLead, getLeads } from '../controllers/leadController.js';
import { validateRequest } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/auth.js';
import { leadSubmitLimiter } from '../middleware/rateLimiter.js';
import { z } from 'zod';

const router = express.Router();

const baseSchema = z.object({
  type: z.enum(['host', 'advertiser']),
  name: z.string().min(1),
  businessName: z.string().min(1),
  city: z.string().min(1),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  screenCount: z.number().optional(),
  budgetRange: z.string().optional(),
});

// POST /api/leads - Create lead (with rate limiting and validation)
router.post('/', leadSubmitLimiter, validateRequest(baseSchema), createLead);

// GET /api/leads - Fetch leads (Admin only)
router.get('/', requireAdmin, getLeads);

export default router;
