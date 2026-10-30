import nodemailer from 'nodemailer';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

export async function sendContactNotification({ name, email, message }) {
  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) {
    logger.info('SMTP credentials not configured. Skipping email dispatch for message from:', email);
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.port === 465,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${config.smtp.user}>`,
      to: config.smtp.to,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    logger.info(`Notification email dispatched to ${config.smtp.to}`);
    return true;
  } catch (error) {
    logger.error('Failed to send email notification:', error.message);
    return false;
  }
}

