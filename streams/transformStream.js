import { Transform } from 'stream';
import { atbash } from '../ciphers/atbash.js';
// import { caesar } from '../ciphers/caesar.js';
import { caesarRoot } from '../ciphers/caesarRoot.js';
// import { root8 } from '../ciphers/root-8.js';
import { MyError } from '../utils/customError.js';

const typeCaesar = ['C', 'c'];
const typeAtbash = ['A', 'a'];
const typeRoot8 = ['R', 'r'];

export const transformSteam = (action) => {
  const [type, direction] = action.split('');
  if (typeAtbash.includes(type)) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(atbash(chunk));
        callback();
      },
    });
  }
  if (typeCaesar.includes(type)) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(caesarRoot(chunk, direction, 1));
        callback();
      },
    });
  }
  if (typeRoot8.includes(type)) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(caesarRoot(chunk, direction, 8));
        callback();
      },
    });
  }
  throw MyError('Unexpected action');
};
