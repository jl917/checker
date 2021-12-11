import { resolve } from 'path';
import { SyncOptions } from 'execa';
import commands from './commands';
import { getBinPath } from './utils';

export const BIN_PATH = getBinPath();
export const ROOT_TSCONFIG_PATH = resolve(__dirname, '../tsconfig.json');
export const SUB_TSCONFIG_PATH = resolve('./tsconfig.json');
export const SUB_TSCONFIG_TMP_PATH = resolve('./tsconfig.tmp.json');
export const SRC_DIRECTORY = resolve('./src');

export const STDIO_OPTION: SyncOptions = { stdio: 'inherit' };

export const BIN_TSC = `${BIN_PATH}/tsc`;
export const BIN_JEST = `${BIN_PATH}/jest`;
export const BIN_ESLINT = `${BIN_PATH}/eslint`;
export const BIN_STYLELINT = `${BIN_PATH}/stylelint`;

export const JEST_CONFIG_OPTION = `--config=${resolve(__dirname, './jest.config.js')}`;
export const ESLINT_EXT_OPTION = ['--ext', '.jsx,.js,.ts,.tsx,.mjs,.cjs'];
export const ESLINT_CONFIG_OPTION = ['--config', `${resolve(__dirname, './eslintrc.js')}`];
export const STYLELINT_CONFIG_OPTION = ['--config', resolve(__dirname, './stylelint.config.js')];
export const STYLELINT_SYNTAX_STYLUS = ['--custom-syntax', resolve(BIN_PATH, '../postcss-styl')];
export const STYLELINT_CSS_PATTERN = './src/**/*.css';
export const STYLELINT_STYLUS_PATTERN = './src/**/*.(styl|stylus)';

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
