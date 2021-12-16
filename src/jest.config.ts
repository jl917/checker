import { resolve } from 'path';

export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>', resolve('./src/')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'babel-jest',
      {
        configFile: resolve(__dirname, 'babel.config.js'),
      },
    ],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|styl|stylus|scss|sass)$': `<rootDir>../node_modules/identity-obj-proxy`,
  },
  setupFiles: ['<rootDir>/jest/setupFiles.js'],
  coverageDirectory: resolve('./coverage'),
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: [`${resolve('./src/')}/**/*.{js,jsx,ts,tsx}`],
};
