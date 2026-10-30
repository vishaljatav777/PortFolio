import { isDbConnected } from '../config/db.js';

export function getHealth(req, res) {
  res.status(200).json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: isDbConnected() ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development',
  });
}

