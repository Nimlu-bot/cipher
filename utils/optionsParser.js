import { parseConfig } from './configParser.js';

export const parse = (args) => {
  const options = new Map();
  let current = null;
  args.forEach((arg) => {
    if (/^--?[a-z]+/.test(arg)) {
      let filteredArg;
      if (arg === '--input' || arg === '-i') filteredArg = 'i';
      else if (arg === '--output' || arg === '-o') filteredArg = 'o';
      else if (arg === '--config' || arg === '-c') filteredArg = 'c';
      else throw Error(`invalid option ${arg}`);

      if (options.has(filteredArg)) throw Error(`to many -${filteredArg}`);
      else current = filteredArg;
    } else if (current) {
      options.set(current, arg);
      current = null;
    } else throw Error(`invalid argument ${arg}`);
  });
  if (!options.has('c')) throw Error('option -c or --config is required');
  else {
    const configOptions = parseConfig(options.get('c'));
    console.log(configOptions);
  }
  console.log(Object.fromEntries(options.entries()));
};
