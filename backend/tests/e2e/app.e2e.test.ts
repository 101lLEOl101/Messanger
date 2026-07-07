import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/db/prisma';

describe('backend e2e', () => {
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
