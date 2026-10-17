import { catchAsync } from '../middleware/errorHandler.js';
import { logger } from '../utils/logger.js';
import { Lead } from '../models/Lead.js';
import { sendNotification } from '../utils/notify.js';

export const createLead = catchAsync(async (req, res) => {
  const {
    type,
    name,
    businessName,
    company,
    business,
    organization,
    city,
    location,
    locations,
    venue,
    phone,
    email,
    screenCount,
    budgetRange,
    budget,
    message,
    ...rest
  } = req.body;

  // Normalize type: 'screen' maps to 'host'
  const normalizedType = type === 'screen' ? 'host' : (type || 'advertiser');
  const resolvedBusinessName = businessName || company || business || organization || '';
  const resolvedCity = city || locations || location || venue || '';
  const resolvedBudget = budgetRange || budget || '';

  const leadData = {
    type: normalizedType,
    name,
    businessName: resolvedBusinessName,
    city: resolvedCity,
    phone: phone || '',
    email,
    details: rest,
  };

  // Safely parse screenCount
  if (screenCount !== undefined && screenCount !== null && screenCount !== '') {
    const parsed = typeof screenCount === 'number' ? screenCount : parseInt(screenCount, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      leadData.screenCount = parsed;
    }
  }

  if (resolvedBudget) leadData.budgetRange = resolvedBudget;
  if (message) leadData.message = message;

  // Save to MongoDB
  const newLead = await Lead.create(leadData);

  logger.info('New Lead Created', { id: newLead._id, type: normalizedType, city: resolvedCity });

  // Send notification (non-blocking)
  const businessText = resolvedBusinessName ? `\n**Business:** ${resolvedBusinessName}` : '';
  const cityText = resolvedCity ? `\n**City:** ${resolvedCity}` : '';
  const phoneText = phone ? `\n**Phone:** ${phone}` : '';
  const msgText = message ? `\n**Message:** ${message}` : '';
  sendNotification(
    `🚀 **New ${normalizedType.toUpperCase()} Lead!**\n**Name:** ${name}${businessText}${cityText}\n**Email:** ${email}${phoneText}${msgText}`
  );

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
