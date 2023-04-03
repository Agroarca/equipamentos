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
    plugins: ['unused-imports'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    globals: {
        loader: 'readonly',
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
        'no-console': 'error',
        'no-debugger': 'error',
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
        'vue/block-lang': ['warn', {
            script: {
                lang: 'ts',
            },
        }],
        'vue/block-tag-newline': ['error', {
            singleline: 'consistent',
            multiline: 'consistent',
            maxEmptyLines: 1,
        }],
        'vue/component-api-style': ['error',
            ['script-setup', 'composition'],
        ],
        'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
            registeredComponentsOnly: true,
        }],
        'vue/custom-event-name-casing': ['warn', 'camelCase'],
        'vue/html-button-has-type': ['error', {
            button: true,
            submit: true,
            reset: true,
        }],
        'vue/next-tick-style': ['error', 'promise'],
        'vue/no-static-inline-styles': ['error', {
            allowBinding: false,
        }],
        'vue/no-undef-components': ['error'],
        'vue/no-undef-properties': ['error'],
        'vue/no-unused-properties': ['error', {
            groups: ['props', 'data', 'computed', 'methods', 'setup'],
            deepData: true,
        }],
        'vue/no-unused-refs': ['error'],
        'vue/no-useless-mustaches': ['error'],
        'vue/no-useless-v-bind': ['error'],
        'vue/no-v-text': ['error'],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': ['error'],
        'vue/padding-line-between-tags': ['warn', [
            { blankLine: 'consistent', prev: '*', next: '*' },
        ]],

        'vue/require-default-prop': 'off',
        'prefer-const': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn', {
            varsIgnorePattern: '^props$',
        }],

        'vue/no-restricted-html-elements': ['error', 'a'],
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
