import { Transform } from 'stream';
import { caesarRot } from '../ciphers/caesarRot.js';

const shift = 1;

export class CaesarTransform extends Transform {
  constructor(direction) {
    super();
    this.direction = direction;
  }

  _transform(chunk, _, callback) {
    try {
      this.push(caesarRot(chunk, this.direction, shift));
      callback();
    } catch (err) {
      callback(err);
    }
  }
}
