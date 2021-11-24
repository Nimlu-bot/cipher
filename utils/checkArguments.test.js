import { MyError } from './customError.js';
import { checkArgs } from './checkArguments.js';

describe('check arguments', () => {
  it('should return "input" while --input  or -i passed ', () => {
    const input = '--input';
    const actual = checkArgs(input);
    expect(actual).toBe('input');
  });

  it('should return "output" while --output  or -o passed ', () => {
    const input = '--output';
    const actual = checkArgs(input);
    expect(actual).toBe('output');
  });

  it('should return "config" while --config  or -c passed ', () => {
    const input = '--config';
    const actual = checkArgs(input);
    expect(actual).toBe('config');
  });

  it('should throw error while  "fail" is passed', () => {
    const input = 'fail';
    expect(() => {
      checkArgs(input);
    }).toThrow(MyError);
  });
});
