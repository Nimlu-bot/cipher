import fs from 'fs';
import path from 'path';
import { MyError } from './customError.js';

export const checkFile = async (name) => {
  try {
    await fs.promises.access(path.resolve(name), fs.constants.F_OK);
  } catch (error) {
    throw new MyError(`${name} - not found or inaccessible`);
  }
};
