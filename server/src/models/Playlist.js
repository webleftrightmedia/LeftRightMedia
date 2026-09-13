import mongoose from 'mongoose';

const playlistItemSchema = new mongoose.Schema({
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign',
    required: true,
  },
  priority: {
    type: Number,
    default: 1,
  },
});

const playlistSchema = new mongoose.Schema(
  {
    screenId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Screen',
      required: true,
      unique: true, // One active playlist per screen
    },
    items: [playlistItemSchema],
  },
  {
    timestamps: true,
  }
);

export const Playlist = mongoose.model('Playlist', playlistSchema);
