module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/max-len': [
            'error',
            {
                code: 200,
                ignoreComments: true,
                ignoreUrls: true,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        '@typescript-eslint/ban-ts-ignore': 0,
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
        semi: ['error', 'never'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'func-names': ['error', 'as-needed'],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        'vue/no-v-for-template-key': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        quotes: ['error', 'single'],
        'no-use-before-define': 'off',
        'vue/first-attribute-linebreak': 'off',
        'vue/max-attributes-per-line': 'off',
        'class-methods-use-this': 'off',
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'object-curly-newline': ['error', {
            ImportDeclaration: 'never',
        }],
    },
    // These are added if you chose also to install Jest plugin for Vue CLI
    // With my own modifications here as an example
    overrides: [
        {
            files: [
                './src/**/__tests__/*.spec.{j,t}s',
                './src/**/__mock__/*.{j,t}s',
            ],
            env: {
                jest: true,
            },
            rules: {
                'no-unused-expressions': 0,
            },
        },
    ],
}
