import { catchAsync } from '../middleware/errorHandler.js';
import { logger } from '../utils/logger.js';
import { Lead } from '../models/Lead.js';
import { sendNotification } from '../utils/notify.js';

export const createLead = catchAsync(async (req, res) => {
  const { type, name, businessName, city, phone, email, screenCount, budgetRange } = req.body;
  
  const leadData = { type, name, businessName, city, phone, email };
  
  // Prevent sending empty strings which Mongoose casts to 0 and fails min:1 validation
  if (screenCount) leadData.screenCount = screenCount;
  if (budgetRange) leadData.budgetRange = budgetRange;

  // Save to MongoDB
  const newLead = await Lead.create(leadData);

  logger.info('New Lead Created', { id: newLead._id, type, city });
  
  // Send notification (non-blocking)
  sendNotification(`🚀 **New ${type.toUpperCase()} Lead!**\n**Name:** ${name}\n**Business:** ${businessName}\n**City:** ${city}\n**Email:** ${email}`);

  res.status(201).json({
    success: true,
    data: newLead
  });
});

export const getLeads = catchAsync(async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    data: leads
  });
});

export const updateLeadStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['new', 'contacted', 'converted', 'rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status value' });
  }

  const lead = await Lead.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );

  if (!lead) {
    return res.status(404).json({ success: false, message: 'Lead not found' });
  }

  logger.info('Lead Status Updated', { id, status });

  res.status(200).json({ success: true, data: lead });
});
