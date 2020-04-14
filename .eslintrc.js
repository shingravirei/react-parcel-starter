module.exports = {
    env: {
        commonjs: true,
        es6: true
    },
    extends: ['react-app'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'no-console': 0,
        semi: 'off',
        'no-unused-vars': 'warn',
        'arrow-body-style': 'warn',
        'linebreak-style': ['off', 'windows'],
        indent: ['error', 4],
        'comma-dangle': 'off',
        'arrow-parens': 'off'
    }
};
