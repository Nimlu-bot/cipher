import fs from 'fs';

const checkOptions = async ({ input, output, config }) => {
  if (input) {
    try {
      await fs.promises.access(input, fs.constants.F_OK);
    } catch (error) {
      throw Error(`input file not found or inaccessible`);
    }
  }

  if (output) {
    try {
      await fs.promises.access(output, fs.constants.F_OK);
    } catch (error) {
      throw Error(`output file not found or inaccessible`);
    }
  }

  return { input, output, config };
};

export { checkOptions };
