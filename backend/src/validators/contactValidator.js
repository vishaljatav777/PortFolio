import { AppError } from '../utils/AppError.js';

export function validateContactInput(data) {
  const { name, email, message } = data || {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new AppError('Name is required and must be at least 2 characters.', 400);
  }

  if (name.trim().length > 100) {
    throw new AppError('Name cannot exceed 100 characters.', 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    throw new AppError('Please provide a valid email address.', 400);
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    throw new AppError('Message is required and must be at least 10 characters.', 400);
  }

  if (message.trim().length > 5000) {
    throw new AppError('Message cannot exceed 5000 characters.', 400);
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
  };
}

