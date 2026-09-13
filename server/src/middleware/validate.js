import { z } from 'zod';

export const validateRequest = (schema) => async (req, res, next) => {
  try {
    req.body = await schema.parseAsync(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
      });
    }
    next(error);
  }
};
