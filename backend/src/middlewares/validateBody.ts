import { RequestHandler } from 'express';
import { ZodType } from 'zod';
import { ValidationError } from '../errors';

export const validateBody = (schema: ZodType): RequestHandler => (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        next(new ValidationError('Некорректные данные запроса'));
        return;
    }
    req.body = result.data;
    next();
};