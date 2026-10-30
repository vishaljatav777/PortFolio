import rateLimit from 'express-rate-limit';
import { config } from '../config/env.js';

export const contactRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: 10, // Max 10 contact submissions per 15 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact submissions from this IP. Please try again later.',
  },
});

export const apiRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please slow down.',
  },
});

