import { errorHandler } from './errorHandler';
import { ConflictError } from '../errors';

const mockRes = () => {
  const res = {} as { status: jest.Mock; json: jest.Mock };
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('errorHandler', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('maps AppError to its status and message', () => {
    const res = mockRes();
    errorHandler(new ConflictError('dup'), {} as never, res as never, jest.fn());
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({ error: 'dup' });
  });

  it('maps unknown errors to 500 without leaking the message', () => {
    const res = mockRes();
    jest.spyOn(console, 'error').mockImplementation(() => {});
    errorHandler(new Error('internal db secret'), {} as never, res as never, jest.fn());
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});
