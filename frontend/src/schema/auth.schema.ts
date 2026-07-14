import { z } from 'zod';

export const loginSchema = z.object({
    login: z.string().min(1, 'Введите логин'),
    passwordRaw: z.string().min(1, 'Введите пароль'),
});

export const registerSchema = z.object({
    login: z.string().min(3, 'Минимум 3 символа').max(32, 'Максимум 32'),
    passwordRaw: z.string().min(8, 'Минимум 8 символов').max(72, 'Максимум 72'),
});

export type AuthValues = z.infer<typeof registerSchema>;