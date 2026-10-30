import { validateContactInput } from '../validators/contactValidator.js';
import { processContactMessage } from '../services/contactService.js';

export async function submitContact(req, res, next) {
  try {
    const validatedData = validateContactInput(req.body);
    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    const result = await processContactMessage(validatedData, clientIp);

    res.status(201).json({
      success: true,
      message: result.message,
      data: {
        id: result.id,
      },
    });
  } catch (error) {
    next(error);
  }
}

