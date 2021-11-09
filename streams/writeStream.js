import fs from 'fs';

export const writeStream = (output) => (output ?
	// new WriteStream(output,)
	fs.createWriteStream(output, { flags: 'a' }) 
	 : process.stdout);
