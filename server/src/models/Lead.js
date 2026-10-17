import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['host', 'advertiser', 'screen', 'event', 'partnership', 'other'],
      default: 'advertiser',
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    businessName: {
      type: String,
      trim: true,
      default: '',
    },
    city: {
      type: String,
      trim: true,
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    screenCount: {
      type: Number,
      min: 1,
    },
    budgetRange: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'rejected'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

// Index for query performance
leadSchema.index({ email: 1 });
leadSchema.index({ type: 1, status: 1 });

export const Lead = mongoose.model('Lead', leadSchema);
