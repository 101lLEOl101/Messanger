import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(globalThis, { TextEncoder, TextDecoder });
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
});

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

(globalThis as unknown as { ResizeObserver: typeof ResizeObserverMock }).ResizeObserver =
    ResizeObserverMock;