import { MyError } from './customError.js';

export const checkSame = (input, output) => {
  console.log(input);
  if (!!input && input === output)
    throw new MyError('input and output  are the same file');
};
