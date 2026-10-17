import express from 'express';
import { createLead, getLeads, updateLeadStatus } from '../controllers/leadController.js';
import { validateRequest } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/auth.js';
import { leadSubmitLimiter } from '../middleware/rateLimiter.js';
import { z } from 'zod';

const router = express.Router();

const baseSchema = z.object({
  type: z.enum(['host', 'advertiser', 'screen', 'event', 'partnership', 'other']).default('advertiser'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  businessName: z.string().optional(),
  company: z.string().optional(),
  business: z.string().optional(),
  organization: z.string().optional(),
  city: z.string().optional(),
  location: z.string().optional(),
  locations: z.string().optional(),
  venue: z.string().optional(),
  screenCount: z.union([z.number(), z.string()]).optional(),
  budgetRange: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
}).passthrough();

// POST /api/leads - Create lead (with rate limiting and validation)
router.post('/', leadSubmitLimiter, validateRequest(baseSchema), createLead);

// GET /api/leads - Fetch leads (Admin only)
router.get('/', requireAdmin, getLeads);

// PATCH /api/leads/:id - Update lead status (Admin only)
router.patch('/:id', requireAdmin, updateLeadStatus);

export default router;
