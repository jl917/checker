import { resolve } from 'path';
import tsConfig from '../tsconfig.json';
import prettierConfig from './prettier.config';

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: {
      ...tsConfig,
      compilerOptions: {
        ...tsConfig.compilerOptions,
        typeRoots: [resolve('./node_modules/@types'), resolve('./types')],
        baseUrl: resolve('./'),
      },
      include: [resolve('./types/**/*'), resolve('./src/**/*')],
      exclude: [resolve('./node_modules'), resolve('./dist')],
    },
    useJSXTextNode: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-use-before-define': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  }
};
