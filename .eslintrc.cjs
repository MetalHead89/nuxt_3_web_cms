module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  'rules': {
    'eol-last': ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': ['warn', { code: 120 }],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never'
    }]
  }
}
