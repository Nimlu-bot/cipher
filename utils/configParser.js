export const parseConfig = (config) => {
  const matches = ['A', 'a', 'R1', 'R0', 'C1', 'C0', 'r1', 'r0', 'c1', 'c0'];

  const configArray = config.split('-');

  configArray.forEach((item) => {
    if (!matches.includes(item)) throw Error('config not corect');
  });

  return configArray;
};
