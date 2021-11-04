import fs from 'fs';

export const writeStream = (output) => (output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout);
