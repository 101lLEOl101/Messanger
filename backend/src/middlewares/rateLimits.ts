import rateLimit from 'express-rate-limit';
import { RequestHandler } from 'express';

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === 'test' ? 1000 : 10,
    standardHeaders: true,
    legacyHeaders: false,
}) as unknown as RequestHandler;