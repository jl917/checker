import { resolve } from 'path';
import { SyncOptions } from 'execa';
import commands from './commands';
import { getBinPath } from './utils';

export const BIN_PATH = getBinPath();
export const ROOT_TSCONFIG_PATH = resolve(__dirname, '../tsconfig.json');
export const SUB_TSCONFIG_PATH = resolve('./tsconfig.json');
export const TSCONFIG_TMP_PATH = resolve(__dirname, './tsconfig.tmp.json');
export const SRC_DIRECTORY = resolve('./src');
export const ROOT_JCHECK_CONFIG_PATH = resolve(__dirname, './jcheck.config.js');
export const SUB_JCHECK_CONFIG_PATH = resolve('./jcheck.config.js');

export const STDIO_OPTION: SyncOptions = { stdio: 'inherit' };

export const BIN_TSC = `${BIN_PATH}/tsc`;
export const BIN_JEST = `${BIN_PATH}/jest`;
export const BIN_ESLINT = `${BIN_PATH}/eslint`;
export const BIN_STYLELINT = `${BIN_PATH}/stylelint`;
export const BIN_COMMITLINT = `${BIN_PATH}/commitlint`;
export const BIN_HTMLHINT = `${BIN_PATH}/htmlhint`;
export const BIN_MARKDOWNLINT = `${BIN_PATH}/markdownlint`;

export const JEST_CONFIG_OPTION = `--config=${resolve(__dirname, './jest.config.js')}`;
export const ESLINT_EXT_OPTION = ['--ext', '.jsx,.js,.ts,.tsx,.mjs,.cjs'];
export const ESLINT_CONFIG_OPTION = ['--config', resolve(__dirname, './eslintrc.js'), '--resolve-plugins-relative-to', resolve(__dirname, '../')];
export const STYLELINT_CONFIG_OPTION = ['--config', resolve(__dirname, './stylelint.config.js')];
export const STYLELINT_CSS_PATTERN = './src/**/*.css';
export const STYLELINT_LESS_PATTERN = './src/**/*.less';
export const STYLELINT_STYLUS_PATTERN = './src/**/*.(styl|stylus)';
export const STYLELINT_SASS_PATTERN = './src/**/*.(sass|scss)';
export const COMMITLINT_CONFIG_OPTION = ['--config', resolve(__dirname, './commitlint.config.js')];
export const STYLELINT_STYLUS_SYNTAX = ['--custom-syntax', resolve(BIN_PATH, '../postcss-styl')];
export const STYLELINT_LESS_SYNTAX = ['--custom-syntax', resolve(BIN_PATH, '../postcss-less')];
export const HTMLHINT_EXT_PATTERN = './src/**/*.html';
export const MARKDOWNLINT_EXT_PATTERN = './**/*.md';
export const MARKDOWNLINT_CONFIG_OPTION = ['-c', resolve(__dirname, './markdownlint.config.js')];
export const MARKDOWNLINT_IGNORE_OPTION = ['-i', 'node_modules'];

export const COMMANDS_QUESTIONS = commands.map(({ name, message, hint }) => ({
  name,
  message,
  hint,
}));

export const COMMANDS = commands.reduce((cmd: any, { name, run }) => {
  cmd[name] = run;
  return cmd;
}, {});

export const COMMAND_NAMES = commands.map(({ name }) => name);
