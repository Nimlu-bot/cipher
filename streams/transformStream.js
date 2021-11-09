import { Transform } from 'stream';
import { atbash } from '../ciphers/atbash.js';
import { caesarRoot } from '../ciphers/caesarRoot.js';
import { MyError } from '../utils/customError.js';

const typeCaesar = 'C';
const typeAtbash = 'A';
const typeRoot8 = 'R';
const caesarShift = 1;
const rootShift = 8;

export const transformSteam = (action) => {
  const [type, direction] = action.split('');
  if (type === typeAtbash) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(atbash(chunk));
        callback();
      },
    });
  }
  if (type === typeCaesar) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(caesarRoot(chunk, direction, caesarShift));
        callback();
      },
    });
  }
  if (type === typeRoot8) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(caesarRoot(chunk, direction, rootShift));
        callback();
      },
    });
  }
  throw MyError('Unexpected action');
};
