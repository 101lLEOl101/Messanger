import { loginSchema, registerSchema } from './auth.schema';

describe('auth schema', () => {
    it('rejects empty login on login', () => {
        expect(loginSchema.safeParse({ login: '', passwordRaw: 'x' }).success).toBe(false);
    });
    it('rejects short password on register', () => {
        expect(registerSchema.safeParse({ login: 'leo', passwordRaw: 'short' }).success).toBe(false);
    });
    it('accepts valid register input', () => {
        expect(registerSchema.safeParse({ login: 'leonid', passwordRaw: 'password123' }).success).toBe(true);
    });
});