// const { Readable } = require('stream');

import { Readable } from 'stream';
import path, { dirname } from 'path';

import fs from 'fs';

// const fs = require('fs');

export class ReadStream extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    // console.log(this.filename);
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeee');
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read(n) {
    const buf = Buffer.alloc(n);
    fs.read(this.fd,  (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
      }
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}
