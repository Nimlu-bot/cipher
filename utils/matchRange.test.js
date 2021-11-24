import { parseConfig } from './configParser.js';
import { MyError } from './customError.js';

describe('Parse config ', () => {
  it('should return  array of config entries', () => {
    const input = 'A-C0-R1';
    const actual = parseConfig(input);
    expect(actual).toEqual(['A', 'C0', 'R1']);
  });

  it('should return Error if config invalid', () => {
    const input = 'A-C0-F1';
    expect(() => {
      parseConfig(input);
    }).toThrow(MyError);
  });
});
