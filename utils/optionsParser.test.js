import { parse } from './optionsParser.js';

// jest.mock("./isInteger", () => jest.fn());

describe('parse', () => {
  it('should return  valid options', () => {
    const options = ['-c', 'A-R1-C0'];
    const actual = parse(options);
    expect(actual).toEqual({ config: ['A', 'R1', 'C0'] });
  });

  // it('should return  same ass passed', () => {
  //   const input = [124, 125];
  //   const actual = atbash(input);
  //   expect(actual).toEqual([124, 125]);
  // });

  // it('should return  same ass passed', () => {
  //   const input = [91, 78];
  //   const actual = atbash(input);
  //   expect(actual).toEqual([64, 77]);
  // });

  // it('should return  "A" if  passed "z" ', () => {
  //   const input = '--output';
  //   const actual = checkArgs(input);
  //   expect(actual).toBe('output');
  // });
});
