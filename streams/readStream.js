import fs from 'fs';

export const readStream = (input) => (input ? fs.createReadStream(input) : process.stdin);
