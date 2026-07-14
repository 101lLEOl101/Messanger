import { userReducer } from './user.reducer';
import type { User, UserState } from '../interfaces/user.interfaces.ts';

const user: User = { id: '1', login: 'leo', createdAt: new Date() };

describe('userReducer', () => {
  const initialState: UserState = { user: null, token: null };

  it('returns the initial state by default', () => {
    expect(userReducer(undefined, { type: null, payload: null })).toEqual(initialState);
  });

  it('handles ADD_USER', () => {
    const next = userReducer(initialState, {
      type: 'ADD_USER',
      payload: { user, token: 'jwt-token' },
    });
    expect(next.user).toEqual(user);
    expect(next.token).toBe('jwt-token');
  });

  it('handles REMOVE_USER', () => {
    const filledState: UserState = { user, token: 'jwt-token' };
    const next = userReducer(filledState, { type: 'REMOVE_USER', payload: null });
    expect(next.user).toBeNull();
    expect(next.token).toBeNull();
  });
});
