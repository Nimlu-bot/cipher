import { jest } from '@jest/globals';
import { checkFile } from './checkFiles.js';

//const fs = jest.fn();

describe('checkFile', () => {
  it('should return  undefined if file  exist', async () => {
    const options = './input.txt';

    // fs.mockReturnValue(true);

    const actual = await checkFile(options);
    expect(actual).toBeUndefined();
  });
  it('should return  Error if file does not exist', async () => {
    const options = './input.tx';

    // fs.mockReturnValue(true);
    try {
      await checkFile(options);
    } catch (error) {
      expect(error.message).toBe('./input.tx - not found or inaccessible');
    }
  });
  it('should return  Error if path is  a directory', async () => {
    const options = './utils';

   //  fs.mockReturnValue(true);
    try {
      await checkFile(options);
    } catch (error) {
      expect(error.message).toBe('./utils is directory');
    }
  });
});
