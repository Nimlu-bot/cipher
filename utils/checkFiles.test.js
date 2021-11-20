import { checkFile } from './checkFiles.js';

describe('checkFile', () => {
  it('should return  undefined if file  exist', async () => {
    const options = './input.txt';
    const actual = await checkFile(options);

    expect(actual).toBeUndefined();
  });
  it('should return  Error if file does not exist', async () => {
    const options = './input.tx';
    try {
      await checkFile(options);
    } catch (error) {
      expect(error.message).toBe('./input.tx - not found or inaccessible');
    }
  });
  it('should return  Error if path is  a directory', async () => {
    const options = './utils';
    try {
      await checkFile(options);
    } catch (error) {
      expect(error.message).toBe('./utils is directory');
    }
  });
});
