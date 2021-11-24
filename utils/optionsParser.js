import { parseConfig } from './configParser.js';
import { checkFile } from './checkFiles.js';
import { MyError } from './customError.js';
import { checkArgs } from './checkArguments.js';
import { checkSame } from './checkSameFiles.js';

const INPUT = 'input';
const OUTPUT = 'output';
const CONFIG = 'config';

export const parse = async (args) => {
  const options = new Map();
  let current = null;
  let configOptions = [];

  args.forEach((arg) => {
    if (/^--?[a-z]+/.test(arg)) {
      const filteredArg = checkArgs(arg);

      if (options.has(filteredArg))
        throw new MyError(`to many -${filteredArg}`);
      else current = filteredArg;
    } else if (current) {
      options.set(current, arg);
      current = null;
    }
  });

  if (!options.has(CONFIG))
    throw new MyError('option -c or --config is required');
  else {
    configOptions = parseConfig(options.get(CONFIG));
  }

  if (options.has(INPUT)) await checkFile(options.get(INPUT));

  if (options.has(OUTPUT)) await checkFile(options.get(OUTPUT));

  checkSame(options.get(INPUT), options.get(OUTPUT));

  return { ...Object.fromEntries(options.entries()), config: configOptions };
};
