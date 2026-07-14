import { store } from './index';

describe('store', () => {
    it('initializes the user slice with empty state', () => {
        expect(store.getState().user).toEqual({ user: null, token: null });
    });
});