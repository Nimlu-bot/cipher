import { parse } from './utils/optionsParser.js';
import { errorHandler } from './utils/errorHandler.js';

const args = process.argv.slice(2);

try {
  parse(args);
} catch (error) {
  errorHandler(error);
}
