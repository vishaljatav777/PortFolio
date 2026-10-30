import mongoose from 'mongoose';
import { config } from './env.js';
import { logger } from '../utils/logger.js';

let isConnected = false;

export async function connectDB() {
  if (!config.mongodbUri) {
    logger.info('MONGODB_URI not configured. Backend running in in-memory / fallback mode.');
    return false;
  }

  try {
    const conn = await mongoose.connect(config.mongodbUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    logger.info(`MongoDB connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    isConnected = false;
    logger.warn('Failed to connect to MongoDB. Running in fallback mode:', error.message);
    return false;
  }
}

export function isDbConnected() {
  return isConnected;
}

