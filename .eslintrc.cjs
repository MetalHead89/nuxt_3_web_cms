module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
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
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always'
      }
    }]

  }
}
