import fs from 'fs';
import { MyError } from './customError.js';

export const checkFile = async (name) => {
  try {
    await fs.promises.access(name, fs.constants.F_OK);
  } catch (error) {
    throw new MyError(`${name} - not found or inaccessible`);
  }
};
