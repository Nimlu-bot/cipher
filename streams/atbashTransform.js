import { Transform } from 'stream';
import { atbash } from '../ciphers/atbash.js';

export class AtbashTransform extends Transform {
  _transform(chunk, _, callback) {
    try {
      this.push(atbash(chunk));
      callback();
    } catch (err) {
      callback(err);
    }
  }
}
