import { prompt } from 'enquirer';
import { COMMAND_NAMES, COMMANDS_QUESTIONS, COMMANDS } from './constants';
import { getConfig } from './utils'

const argv = process.argv[2];
const matchArg = COMMAND_NAMES.includes(process.argv[2]);

const mainTask = (command: string) => {
  if (command === 'default') {
    const config = getConfig();
    config.tsc && COMMANDS.tsc();
    config.test && COMMANDS.test();
    config.eslint && COMMANDS.eslint();
    config.stylelint && COMMANDS.stylelint();
    config.htmlhint && COMMANDS.htmlhint();
    config.markdownlint && COMMANDS.markdownlint();
    return '';
  }
  if (command === 'all') {
    COMMANDS.tsc();
    COMMANDS.test();
    COMMANDS.eslint();
    COMMANDS.stylelint();
    COMMANDS.htmlhint();
    COMMANDS.markdownlint();
    return '';
  }
  if (command === 'fix') {
    COMMANDS.eslintFix();
    COMMANDS.stylelintFix();
    COMMANDS.markdownlintFix();
    return '';
  }
  COMMANDS[command]();
  return '';
};

const questionTask = async () => {
  const answer: any = await prompt({
    type: 'select',
    name: 'command',
    message: '🤖 Select a command',
    choices: COMMANDS_QUESTIONS,
  });
  mainTask(answer.command);
  return '';
};

// eslint-disable-next-line
matchArg ? mainTask(argv) : questionTask();
