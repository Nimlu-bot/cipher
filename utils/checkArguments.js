import { MyError } from './customError.js';

export const checkArgs = (arg) => {
  if (arg === '--input' || arg === '-i') return 'input';
  if (arg === '--output' || arg === '-o') return 'output';
  if (arg === '--config' || arg === '-c') return 'config';
  throw new MyError(`invalid option ${arg}`);
};
