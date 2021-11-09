import { WriteStream } from './writable.js';

export const writeStream = (output) =>
  output
    ? new WriteStream(output)
    : // fs.createWriteStream(output, { flags: 'a' })
      process.stdout;
