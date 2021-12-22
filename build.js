const esbuild = require('esbuild');

// build
esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outfile: 'dist/index.js',
  minify: true,
  banner: { js: '#!/usr/bin/env node' },
});

esbuild.buildSync({
  entryPoints: {
    'babel.config': 'src/babel.config.ts',
    'commitlint.config': 'src/commitlint.config.ts',
    'eslintrc': 'src/eslintrc.ts',
    'jest.config': 'src/jest.config.ts',
    'prettier.config': 'src/prettier.config.ts',
    'stylelint.config': 'src/stylelint.config.ts',
    'jest/fileMock': 'src/jest/fileMock.ts',
    'jest/setupFiles': 'src/jest/setupFiles.ts',
    'markdownlint.config': 'src/markdownlint.config.ts',
    'jcheck.config': 'src/jcheck.config.ts',
  },
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outdir: 'dist',
  minify: true,
  external: ['esbuild']
});

console.log("%c✅ Success!", "color:green");
