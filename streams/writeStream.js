import { WriteStream } from './writable.js';

export const writeStream = (output) =>
  output ? new WriteStream(output) : process.stdout;
