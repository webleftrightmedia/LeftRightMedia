import { catchAsync } from '../middleware/errorHandler.js';
import { Screen } from '../models/Screen.js';

export const getActiveScreens = catchAsync(async (req, res) => {
  // Fetch live screens from DB
  const liveScreens = await Screen.find({ status: 'live' }).select('-createdAt -updatedAt -__v');
  
  res.status(200).json({
    success: true,
    data: liveScreens
  });
});
