import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled Error', err);

  const statusCode = err.statusCode || 500;
  
  // Don't leak raw internal server errors (like SSL or Database connection issues) to the client
  let message = err.message || 'Internal Server Error';
  if (statusCode === 500) {
    message = 'A server error occurred. Please try again later.';
  }

  res.status(statusCode).json({
    success: false,
    message,
    // Only leak stack in dev
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

// Async wrapper to avoid try/catch blocks in controllers
export const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
