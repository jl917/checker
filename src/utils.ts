import { resolve } from 'path';
import { lstatSync, writeFileSync } from 'fs-extra';
import {
  ROOT_TSCONFIG_PATH,
  SUB_TSCONFIG_PATH,
  ROOT_JCHECK_CONFIG_PATH,
  SUB_JCHECK_CONFIG_PATH,
} from './constants';

export const getBinPath = () => {
  const globalPath = resolve(__dirname, '../node_modules/.bin');
  const localPath = resolve(__dirname, '../../../.bin');
  let binPath;
  try {
    lstatSync(globalPath).isDirectory();
    binPath = globalPath;
  } catch {
    binPath = localPath;
  }
  console.log('isLocal', binPath === localPath)
  console.log('isGlobal', binPath === globalPath)
  return binPath;
};

export const createTmpTsconfig = (filePath) => {
  // get root tsconfig
  let tsconfig = require(ROOT_TSCONFIG_PATH);
  // get sub tsconfig
  let subTsconfig: any = {};
  try {
    subTsconfig = require(SUB_TSCONFIG_PATH);
  } catch (error) {
    console.log('⚠️ Warning: No sub tsconfig file found.');
  }
  tsconfig = {
    ...tsconfig,
    ...subTsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      ...(subTsconfig.compilerOptions || {}),
    },
    exclude: [...(subTsconfig.exclude || [])],
    include: [...(subTsconfig.include || []), resolve('./src')],
  };

  writeFileSync(
    filePath,
    new Uint8Array(Buffer.from(JSON.stringify(tsconfig))),
  );
};

export const getConfig = () => {
  const config = require(ROOT_JCHECK_CONFIG_PATH);
  let subConfig;
  try {
    subConfig = require(SUB_JCHECK_CONFIG_PATH);
  } catch (error) {
    console.log('✅ No sub jcheck config file found.');
  }
  return {
    ...config,
    ...subConfig,
  };
};
