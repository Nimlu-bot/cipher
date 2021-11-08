import fs from 'fs';

export const checkFile = async (name) => {
  try {
    await fs.promises.access(name, fs.constants.F_OK);
  } catch (error) {
    throw Error(`${name} - not found or inaccessible`);
  }
};
