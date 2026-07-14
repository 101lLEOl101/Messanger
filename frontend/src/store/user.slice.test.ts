import { userReducer, logout } from './user.slice';
import type { SafeUser } from '../interfaces/auth.interfaces';

const user: SafeUser = { id: '1', login: 'leo', createdAt: '2026-01-01T00:00:00.000Z' };
const initialState = { user: null, token: null };

describe('user slice', () => {
    it('returns the initial state', () => {
        expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('stores credentials when the login mutation succeeds', () => {
        const loginFulfilled = {
            type: 'authApi/executeMutation/fulfilled',
            payload: { user, token: 'jwt' },
            meta: { arg: { endpointName: 'login' }, requestId: 'test', requestStatus: 'fulfilled' },
        };
        expect(userReducer(initialState, loginFulfilled as never)).toEqual({ user, token: 'jwt' });
    });

    it('logout clears state', () => {
        expect(userReducer({ user, token: 'jwt' }, logout())).toEqual(initialState);
    });
});