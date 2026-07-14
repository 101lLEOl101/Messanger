module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/pages/**',
    '!src/api/**',
    '!src/**/*.test.{ts,tsx}'
  ],
  coverageThreshold: {
    global: { statements: 90, branches: 90, functions: 60, lines: 90 }
  }
};
