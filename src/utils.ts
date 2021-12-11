import { resolve } from 'path';
import { lstatSync, writeFileSync } from 'fs-extra';
import { ROOT_TSCONFIG_PATH, SUB_TSCONFIG_PATH } from './constants';

export const getBinPath = () => {
  const globalPath = resolve(__dirname, '../../node_modules/.bin');
  const localPath = resolve(__dirname, '../../../.bin');
  let binPath;
  try {
    lstatSync(globalPath).isDirectory();
    binPath = globalPath;
  } catch {
    binPath = localPath;
  }
  return binPath;
};

export const createTmpTsconfig = () => {
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
    resolve('./tsconfig.tmp.json'),
    new Uint8Array(Buffer.from(JSON.stringify(tsconfig))),
  );
};
