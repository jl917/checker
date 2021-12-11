module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'eslint-config-airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:jest/recommended"
  ],
  env: {
    // 'browser': true,
    // 'node': true,
    'es6': true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'max-len': ['error', { 'code': 100 }],
    'prefer-promise-reject-errors': ['off'],
    'no-return-assign': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-use-before-define': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-param-reassign': ['off'],
    'no-console': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'class-methods-use-this': ['off'],
    'import/no-dynamic-require': ['off'],
    'global-require': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    'import/no-import-module-exports': ['off'],
  }
};