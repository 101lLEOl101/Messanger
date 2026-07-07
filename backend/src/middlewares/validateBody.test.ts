import { z } from 'zod';
import { validateBody } from './validateBody';
import { ValidationError } from '../errors';

const schema = z.object({ a: z.string() });

const run = (body: unknown) => {
  const req = { body } as never as { body: unknown };
  const next = jest.fn();
  validateBody(schema)(req as never, {} as never, next);
  return { req, next };
};

describe('validateBody', () => {
  it('strips unknown fields and calls next() clean on valid body', () => {
    const { req, next } = run({ a: 'x', evil: true });
    expect(next).toHaveBeenCalledWith();
    expect(req.body).toEqual({ a: 'x' });
  });

  it('passes a ValidationError to next() on invalid body', () => {
    const { next } = run({ a: 123 });
    expect(next).toHaveBeenCalledWith(expect.any(ValidationError));
  });
});
