import { atbash } from './atbash.js';

describe('atbash cipher', () => {
  it('should return  "ab" if  passed "zy"', () => {
    const input = [123, 122];
    const actual = atbash(input);
    expect(actual).toEqual([96, 97]);
  });

  it('should return  same ass passed', () => {
    const input = [124, 125];
    const actual = atbash(input);
    expect(actual).toEqual([124, 125]);
  });

  it('should return  same ass passed', () => {
    const input = [91, 78];
    const actual = atbash(input);
    expect(actual).toEqual([64, 77]);
  });

  // it('should return  "A" if  passed "z" ', () => {
  //   const input = '--output';
  //   const actual = checkArgs(input);
  //   expect(actual).toBe('output');
  // });
});
