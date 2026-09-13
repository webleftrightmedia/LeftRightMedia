/**
 * Structured logger that redacts PII before logging to the console.
 */

const redact = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;
  const redacted = { ...obj };
  
  const sensitiveFields = ['email', 'phone', 'password'];
  for (const field of sensitiveFields) {
    if (redacted[field]) {
      redacted[field] = '***REDACTED***';
    }
  }
  return redacted;
};

export const logger = {
  info: (message, data = {}) => {
    console.log(JSON.stringify({ level: 'info', message, data: redact(data), timestamp: new Date().toISOString() }));
  },
  error: (message, error = {}) => {
    console.error(JSON.stringify({ level: 'error', message, error: error.message || error, timestamp: new Date().toISOString() }));
  }
};
