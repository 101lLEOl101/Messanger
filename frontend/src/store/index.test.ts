import { store } from './index';

describe('store', () => {
    it('initializes with an empty root state', () => {
        expect(store.getState()).toEqual({});
    });
});