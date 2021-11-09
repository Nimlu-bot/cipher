import { ReadStream } from './readable.js';

export const readStream = (input) =>
  input
    ? new ReadStream(input)
    : // fs.createReadStream(input)
      process.stdin;
