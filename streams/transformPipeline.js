import { pipeline } from 'stream';

import { readStream } from './readStream.js';
import { writeStream } from './writeStream.js';
import { errorHandler } from '../utils/errorHandler.js';
import { createTransform } from './createTransform.js';

export const transformPipeline = ({
  input = undefined,
  output = undefined,
  config,
}) => {
  pipeline(
    readStream(input),
    ...createTransform(config),
    writeStream(output),
    (error) => errorHandler(error)
  );
};
