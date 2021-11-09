import { MyError } from './customError.js';

export const parseConfig = (config) => {
  const matches = ['A', 'R1', 'R0', 'C1', 'C0'];

  const configArray = config.split('-');

  configArray.forEach((item) => {
    if (!matches.includes(item)) throw MyError('config not corect');
  });

  return configArray;
};
