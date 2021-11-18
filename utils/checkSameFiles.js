import { MyError } from './customError.js';

export const checkSame = (input, output) => {
  if (!!input && input === output)
    throw new MyError('input and output  are the same file');
};
