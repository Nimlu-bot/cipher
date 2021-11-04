import { pipeline } from 'stream';

import { readStream } from './readStream.js';
import { transformSteam } from './transformStream.js';
import { writeStream } from './writeStream.js';
import { errorHandler } from '../utils/errorHandler.js';

export const transformPipeline = ({
  input = undefined,
  output = undefined,
  config,
}) => {
  pipeline(
    readStream(input),
    transformSteam(config),
    writeStream(output),
    (error) => errorHandler(error)
  );
};
