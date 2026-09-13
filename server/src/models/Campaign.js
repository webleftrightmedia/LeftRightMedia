import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
  {
    advertiserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Forward looking to User/Advertiser model
      required: true,
    },
    screensTargeted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen',
      },
    ],
    slotDurationMinutes: {
      type: Number,
      default: 120, // 2-hour slot default
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    creativeAssetUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'active', 'completed', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

campaignSchema.index({ status: 1 });
campaignSchema.index({ advertiserId: 1 });

export const Campaign = mongoose.model('Campaign', campaignSchema);
