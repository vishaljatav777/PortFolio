import { Contact } from '../models/Contact.js';
import { isDbConnected } from '../config/db.js';
import { sendContactNotification } from './emailService.js';
import { logger } from '../utils/logger.js';

export async function processContactMessage(validatedData, ipAddress = '') {
  let savedContact = null;

  if (isDbConnected()) {
    try {
      savedContact = await Contact.create({
        ...validatedData,
        ipAddress,
      });
      logger.info(`Contact message saved to database with ID: ${savedContact._id}`);
    } catch (err) {
      logger.warn('Failed to save contact to MongoDB, proceeding:', err.message);
    }
  } else {
    logger.info(`Received contact inquiry from ${validatedData.name} <${validatedData.email}>`);
  }

  // Attempt email notification in background
  sendContactNotification(validatedData).catch((err) => {
    logger.error('Background notification error:', err.message);
  });

  return {
    success: true,
    message: 'Thank you! Your message has been received successfully.',
    id: savedContact?._id || null,
  };
}

