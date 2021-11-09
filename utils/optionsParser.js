import { parseConfig } from './configParser.js';
import { checkFile } from './checkFiles.js';
import { MyError } from './customError.js';

export const parse = async (args) => {
  const options = new Map();
  let current = null;
  let configOptions = [];
  args.forEach((arg) => {
    if (/^--?[a-z]+/.test(arg)) {
      let filteredArg;
      if (arg === '--input' || arg === '-i') filteredArg = 'input';
      else if (arg === '--output' || arg === '-o') filteredArg = 'output';
      else if (arg === '--config' || arg === '-c') filteredArg = 'config';
      else throw MyError(`invalid option ${arg}`);

      if (options.has(filteredArg)) throw MyError(`to many -${filteredArg}`);
      else current = filteredArg;
    } else if (current) {
      options.set(current, arg);
      current = null;
    } else throw MyError(`invalid argument ${arg}`);
  });
  if (!options.has('config')) throw MyError('option -c or --config is required');
  else {
    configOptions = parseConfig(options.get('config'));
  }
  if (options.has('input')) await checkFile(options.get('input'));

  if (options.has('output')) await checkFile(options.get('output'));

  return { ...Object.fromEntries(options.entries()), config: configOptions };
};
