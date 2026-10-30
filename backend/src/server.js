import app from './app.js';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
import { logger } from './utils/logger.js';

let server;

async function startServer() {
  await connectDB();

  server = app.listen(config.port, () => {
    logger.info(`Portfolio Backend running in ${config.env} mode on http://localhost:${config.port}`);
  });
}

// Graceful Shutdown
function handleShutdown(signal) {
  logger.info(`${signal} signal received: closing HTTP server`);
  if (server) {
    server.close(() => {
      logger.info('HTTP server closed');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

startServer().catch((err) => {
  logger.error('Failed to start server:', err);
  process.exit(1);
});

