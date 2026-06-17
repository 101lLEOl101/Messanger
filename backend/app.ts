import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import {prisma} from "./db";

export function createApp(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/ready', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      res.json({ status: 'ready' });
    } catch {
      res.status(503).json({ status: 'not ready' });
    }
  });

  return app;
}

