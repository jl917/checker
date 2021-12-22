import { execaSync, execa } from 'execa';
import {
  TSCONFIG_TMP_PATH,
  BIN_TSC,
  BIN_JEST,
  JEST_CONFIG_OPTION,
  STDIO_OPTION,
  BIN_ESLINT,
  ESLINT_EXT_OPTION,
  ESLINT_CONFIG_OPTION,
  SRC_DIRECTORY,
  BIN_STYLELINT,
  BIN_COMMITLINT,
  STYLELINT_CONFIG_OPTION,
  STYLELINT_STYLUS_SYNTAX,
  // STYLELINT_LESS_SYNTAX,
  STYLELINT_CSS_PATTERN,
  STYLELINT_STYLUS_PATTERN,
  COMMITLINT_CONFIG_OPTION,
  STYLELINT_SASS_PATTERN,
  // STYLELINT_LESS_PATTERN,
  BIN_HTMLHINT,
  HTMLHINT_EXT_PATTERN,
  BIN_MARKDOWNLINT,
  MARKDOWNLINT_EXT_PATTERN,
  MARKDOWNLINT_CONFIG_OPTION,
  MARKDOWNLINT_IGNORE_OPTION,
} from './constants';
import { createTmpTsconfig } from './utils';

export default [
  { name: 'default', message: '🙈 default', hint: 'Run with options' },
  {
    name: 'all',
    message: '💯 all',
    hint: 'Run script(tsc, test, eslint, stylelint)',
  },
  {
    name: 'fix',
    message: '🔧 fix',
    hint: 'fix es & style',
  },
  {
    name: 'tsc',
    message: 'tsc',
    run: () => {
      createTmpTsconfig(TSCONFIG_TMP_PATH);
      try {
        execaSync(BIN_TSC, ['--project', TSCONFIG_TMP_PATH], STDIO_OPTION);
      } catch {
        // console.log('❗️ Error: tsc failed.');
      } finally {
        execaSync('rm', ['-rf', TSCONFIG_TMP_PATH]);
      }
    },
  },
  {
    name: 'test',
    message: 'test',
    run: () => {
      try {
        execaSync(BIN_JEST, [JEST_CONFIG_OPTION, '--passWithNoTests'], STDIO_OPTION);
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'testCoverage',
    message: 'test(coverage)',
    run: () => {
      try {
        execaSync(BIN_JEST, [JEST_CONFIG_OPTION, '--passWithNoTests', '--coverage'], STDIO_OPTION);
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'testOnlyChange',
    message: 'test(onlyChanged)',
    run: () => {
      try {
        execaSync(
          BIN_JEST,
          [JEST_CONFIG_OPTION, '--passWithNoTests', '--onlyChanged', '--coverage'],
          STDIO_OPTION,
        );
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  // { name: 'jestWithTag', message: 'test(withTag)' },
  {
    name: 'eslint',
    message: 'eslint',
    run: () => {
      try {
        execaSync(
          BIN_ESLINT,
          [...ESLINT_EXT_OPTION, SRC_DIRECTORY, ...ESLINT_CONFIG_OPTION],
          STDIO_OPTION,
        );
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'eslintFix',
    message: 'eslint(fix)',
    run: () => {
      try {
        execaSync(
          BIN_ESLINT,
          [...ESLINT_EXT_OPTION, SRC_DIRECTORY, ...ESLINT_CONFIG_OPTION, '--fix'],
          STDIO_OPTION,
        );
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'stylelint',
    message: 'stylelint',
    run: () => {
      try {
        execa(BIN_STYLELINT, [STYLELINT_CSS_PATTERN, ...STYLELINT_CONFIG_OPTION], STDIO_OPTION);
        execa(BIN_STYLELINT, [STYLELINT_SASS_PATTERN, ...STYLELINT_CONFIG_OPTION], STDIO_OPTION);
        // execa(
        //   BIN_STYLELINT,
        //   [STYLELINT_LESS_PATTERN, ...STYLELINT_CONFIG_OPTION, ...STYLELINT_LESS_SYNTAX],
        //   STDIO_OPTION,
        // );
        execa(
          BIN_STYLELINT,
          [STYLELINT_STYLUS_PATTERN, ...STYLELINT_CONFIG_OPTION, ...STYLELINT_STYLUS_SYNTAX],
          STDIO_OPTION,
        );
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'stylelintFix',
    message: 'stylelint(fix)',
    run: () => {
      try {
        execa(
          BIN_STYLELINT,
          [STYLELINT_CSS_PATTERN, ...STYLELINT_CONFIG_OPTION, '--fix'],
          STDIO_OPTION,
        );
        execa(
          BIN_STYLELINT,
          [STYLELINT_SASS_PATTERN, ...STYLELINT_CONFIG_OPTION, '--fix'],
          STDIO_OPTION,
        );
        // execa(
        //   BIN_STYLELINT,
        //   [
        //     STYLELINT_LESS_PATTERN,
        //     ...STYLELINT_CONFIG_OPTION,
        //     ...STYLELINT_LESS_SYNTAX,
        //     '--fix',
        //   ],
        //   STDIO_OPTION,
        // );
        execa(
          BIN_STYLELINT,
          [
            STYLELINT_STYLUS_PATTERN,
            ...STYLELINT_CONFIG_OPTION,
            ...STYLELINT_STYLUS_SYNTAX,
            '--fix',
          ],
          STDIO_OPTION,
        );
      } catch {
        // console.log('❗️ Error: tsc failed.');
      }
    },
  },
  {
    name: 'htmlhint',
    message: 'htmlhint',
    run: () => {
      try {
        execaSync(BIN_HTMLHINT, [HTMLHINT_EXT_PATTERN], STDIO_OPTION);
      } catch {
        // throw new Error('❗️ Error: htmlhint failed.');
      }
    },
  },
  {
    name: 'markdownlint',
    message: 'markdownlint',
    run: () => {
      try {
        execaSync(
          BIN_MARKDOWNLINT,
          [...MARKDOWNLINT_CONFIG_OPTION, MARKDOWNLINT_EXT_PATTERN, ...MARKDOWNLINT_IGNORE_OPTION],
          STDIO_OPTION,
        );
      } catch {
        // throw new Error('❗️ Error: markdownlint failed.');
      }
    },
  },
  {
    name: 'markdownlintFix',
    message: 'markdownlint(fix)',
    run: () => {
      try {
        execaSync(
          BIN_MARKDOWNLINT,
          [
            ...MARKDOWNLINT_CONFIG_OPTION,
            MARKDOWNLINT_EXT_PATTERN,
            ...MARKDOWNLINT_IGNORE_OPTION,
            '--fix',
          ],
          STDIO_OPTION,
        );
      } catch {
        // throw new Error('❗️ Error: markdownlint failed.');
      }
    },
  },
  {
    name: 'commitlint',
    message: '❗️ commitlint',
    hint: 'use to git hook',
    run: () => {
      try {
        execaSync(BIN_COMMITLINT, ['--edit', ...COMMITLINT_CONFIG_OPTION], STDIO_OPTION);
      } catch {
        throw new Error('❗️ Error: commitlint failed.');
      }
    },
  },
];
