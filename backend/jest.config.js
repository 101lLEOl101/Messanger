const base = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
};

module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/index.ts',
    '!src/db/prisma.ts',
    '!**/generated/**',
  ],
  coverageThreshold: {
    global: { statements: 85, branches: 70, functions: 85, lines: 85 },
  },
  projects: [
    {
      ...base,
      displayName: 'unit',
      testMatch: ['**/*.test.ts'],
      testPathIgnorePatterns: ['/node_modules/', '\\.e2e\\.test\\.ts$'],
    },
    {
      ...base,
      displayName: 'e2e',
      testMatch: ['**/*.e2e.test.ts'],
      setupFiles: ['<rootDir>/load-env.ts'],
    },
  ],
};