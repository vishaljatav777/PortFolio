import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env.js';
import apiRouter from './routes/api.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { apiRateLimiter } from './middleware/rateLimiter.js';
import { AppError } from './utils/AppError.js';

const app = express();

// Trust proxy for rate limiting behind reverse proxies (Render, Vercel, Railway, etc.)
app.set('trust proxy', 1);

// Security Headers
app.use(helmet());

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl)
    if (!origin) return callback(null, true);

    const allowed = config.corsOrigin.some((allowedOrigin) => {
      return origin === allowedOrigin || allowedOrigin === '*';
    });

    if (allowed || config.env === 'development') {
      callback(null, true);
    } else {
      callback(new AppError(`CORS policy does not allow access from origin: ${origin}`, 403));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Body Parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Global Rate Limiting
app.use('/api', apiRateLimiter);

// Mount API routes
app.use('/api', apiRouter);

// Root Health / Info endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Vishal Jatav Portfolio API',
    version: '1.0.0',
    documentation: '/docs',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      contact: '/api/contact (POST)',
    },
  });
});

// 404 Route Handler
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find endpoint ${req.method} ${req.originalUrl} on this server`, 404));
});

// Centralized Error Handling Middleware
app.use(errorHandler);

export default app;

