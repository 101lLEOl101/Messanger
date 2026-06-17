import request from 'supertest';
import { createApp } from '../app';
import { prisma } from '../db';

describe('backend integration', () => {
  const app = createApp();

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('GET /api/ready returns ready when DB is reachable', async () => {
    const res = await request(app).get('/api/ready');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ready' });
  });
});
