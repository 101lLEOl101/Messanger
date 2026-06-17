module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    testMatch: ['**/*.int.test.ts'],
    setupFiles: ['<rootDir>/load-env.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    collectCoverageFrom: ['**/*.ts', '!**/*.test.ts', '!index.ts', '!generated/**', '!db.ts', '!load-env.ts'],
    coverageThreshold: {
        global: {statements: 90, branches: 90, functions: 90, lines: 90},
    }
};
