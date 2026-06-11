import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['**/dist/**', '**/coverage/**', '**/node_modules/**']
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
    },
    {
        files: ['backend/**/*.ts'],
        languageOptions: {globals: {...globals.node}},
    },
    {
        files: ['frontend/**/*.{ts,tsx}'],
        languageOptions: { globals: {...globals.browser} },
        plugins: {
            ...react.configs.flat.recommended.plugins,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: {react: {version: 'detect'}},
        rules: {
            ...react.configs.flat.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...reactRefresh.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
        }
    },
    {
        files: ['**/*.config.js', '**/*.cjs'],
        languageOptions: {
            globals: {...globals.node},
            sourceType: 'commonjs',
        },
    },
    {
        files: ['**/*.test.{ts,tsx}', '**/tests/**'],
        languageOptions: {globals: {...globals.jest}}
    }
)