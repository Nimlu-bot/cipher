import { pipeline } from 'stream';

// import { readStream } from './streams/readStream.js';
import { writeStream } from './streams/writeStream.js';
import { errorHandler } from './utils/errorHandler.js';
import { ReadStream } from './streams/readable.js';

const transformPipeline = ({ input = undefined, output = undefined }) => {
  pipeline(new ReadStream(input), writeStream(output), (error) =>
    errorHandler(error)
  );
};

transformPipeline({ input: 'input.txt' });
