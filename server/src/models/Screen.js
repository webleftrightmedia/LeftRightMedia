import mongoose from 'mongoose';

const screenSchema = new mongoose.Schema(
  {
    venueName: {
      type: String,
      required: true,
      trim: true,
    },
    venueType: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['live', 'offline', 'pending'],
      default: 'pending',
    },
    location: {
      lat: Number,
      lng: Number,
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Forward looking to a User/Host model
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for city-based filtering on the frontend
screenSchema.index({ city: 1, status: 1 });

export const Screen = mongoose.model('Screen', screenSchema);
