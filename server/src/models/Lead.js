import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['host', 'advertiser'],
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    screenCount: {
      type: Number,
      required: function () {
        return this.type === 'host';
      },
      min: 1,
    },
    budgetRange: {
      type: String,
      required: function () {
        return this.type === 'advertiser';
      },
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
