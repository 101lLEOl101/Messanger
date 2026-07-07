import { z } from 'zod';

export const registerSchema = z.object({
    login: z.string().min(3).max(32),
    passwordRaw: z.string().min(8).max(72),
});

export const loginSchema = z.object({
    login: z.string().min(1),
    passwordRaw: z.string().min(1),
});