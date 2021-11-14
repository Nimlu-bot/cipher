import { Writable } from 'stream';
import path from 'path';
import fs from 'fs';
import { MyError } from '../utils/customError.js';

export class WriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = path.resolve(filename);
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        callback(new MyError(`${this.filename} is readonly`));
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}
