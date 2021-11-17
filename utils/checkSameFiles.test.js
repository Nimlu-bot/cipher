import { checkSame } from './checkSameFiles.js';
import { MyError } from './customError.js';

// const { checkSame } = require('./checkSameFiles');

describe('check the same files', () => {
  it('should return undefined while check is done', () => {
    const input = './input.txt';
    const output = './output.txt';
    const actual = checkSame(input, output);
    expect(actual).toBeUndefined();
  });

  it('should throw error while files are the same', () => {
    const input = './input.txt';
    const output = './input.txt';
    // const actual = checkSame(input, output);
    expect(() => {
      checkSame(input, output);
    }).toThrow(MyError);
  });
});
