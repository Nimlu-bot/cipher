import { Transform } from 'stream';
import { caesar } from '../ciphers/caesar.js';

export const transformSteam = (action) =>
  new Transform({
    transform(chunk, _, callback) {
      this.push(caesar(chunk, action[0]));
      callback();
    },
  });
