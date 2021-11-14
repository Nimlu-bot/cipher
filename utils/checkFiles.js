import fs from 'fs';
import path from 'path';
import { MyError } from './customError.js';

export const checkFile = async (name) => {
  try {
    const fullName = path.resolve(name);
    await fs.promises.access(fullName, fs.constants.F_OK);
    const stat = await fs.promises.stat(fullName);
    if (stat.isDirectory()) throw new MyError(`${name} is directory`);
  } catch (error) {
    if (error.name === 'MyError') throw new MyError(error.message);
    throw new MyError(`${name} - not found or inaccessible`);
  }
};
