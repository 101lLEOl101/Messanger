import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/db/prisma';

const app = createApp();

const validUser = { login: 'testuser', passwordRaw: 'password123' };

describe('auth e2e', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe('POST /api/auth/register', () => {
    it('registers a new user and returns it without password', async () => {
      const res = await request(app).post('/api/auth/register').send(validUser);
      expect(res.status).toBe(201);
      expect(res.body.id).toBeDefined();
      expect(res.body.login).toBe(validUser.login);
      expect(res.body.password).toBeUndefined();
    });

    it('stores the password hashed, not in plaintext', async () => {
      await request(app).post('/api/auth/register').send(validUser);
      const stored = await prisma.user.findUnique({ where: { login: validUser.login } });
      expect(stored?.password).toBeDefined();
      expect(stored?.password).not.toBe(validUser.passwordRaw);
      expect(stored?.password).toMatch(/^\$2[aby]\$/);
    });

    it('returns 409 on duplicate login', async () => {
      await request(app).post('/api/auth/register').send(validUser);
      const res = await request(app).post('/api/auth/register').send(validUser);
      expect(res.status).toBe(409);
    });

    it('returns 400 when login is too short', async () => {
      const res = await request(app).post('/api/auth/register').send({ login: 'ab', passwordRaw: 'password123' });
      expect(res.status).toBe(400);
    });

    it('returns 400 when password is too short', async () => {
      const res = await request(app).post('/api/auth/register').send({ login: 'testuser', passwordRaw: '123' });
      expect(res.status).toBe(400);
    });
  });

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      await request(app).post('/api/auth/register').send(validUser);
    });

    it('logs in with valid credentials and returns a token', async () => {
      const res = await request(app).post('/api/auth/login').send(validUser);
      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.login).toBe(validUser.login);
      expect(res.body.user.password).toBeUndefined();
    });

    it('returns 401 on wrong password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ login: validUser.login, passwordRaw: 'wrongpassword' });
      expect(res.status).toBe(401);
    });

    it('returns 401 for a non-existent user', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ login: 'ghostuser', passwordRaw: 'password123' });
      expect(res.status).toBe(401);
    });

    it('returns 400 when password is missing', async () => {
      const res = await request(app).post('/api/auth/login').send({ login: validUser.login });
      expect(res.status).toBe(400);
    });
  });
});
