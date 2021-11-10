import { parse } from './utils/optionsParser.js';
import { errorHandler } from './utils/errorHandler.js';
import { transformPipeline } from './streams/transformPipeline.js';

const args = process.argv.slice(2);

parse(args)
  .then((config) => transformPipeline(config))
  .catch((error) => errorHandler(error));
