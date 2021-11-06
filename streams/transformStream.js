import { Transform } from 'stream';
import { atbash } from '../ciphers/atbash.js';
import { caesar } from '../ciphers/caesar.js';
import { root8 } from '../ciphers/root-8.js';

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
        this.push(caesar(chunk, direction));
        callback();
      },
    });
  }
  if (typeRoot8.includes(type)) {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(root8(chunk, direction));
        callback();
      },
    });
  }
  throw Error('Unexpected action');
};
