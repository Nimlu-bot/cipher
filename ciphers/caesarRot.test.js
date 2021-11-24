import { caesarRot } from './caesarRot.js';

// const { checkSame } = require('./checkSameFiles');

describe('caesarRot cipher', () => {
  it('should return  "az" if  passed "zy"', () => {
    const chunk = [123, 110];
    const action = '1';
    const shift = 1;
    const actual = caesarRot(chunk, action, shift);
    expect(actual).toEqual([98, 111]);
  });

  it('should return  the same ass passed', () => {
    const input = [124, 125];
    const action = '1';
    const shift = 1;
    const actual = caesarRot(input, action, shift);
    expect(actual).toEqual([124, 125]);
  });

  it('should return  "zy" if  passed "ay"', () => {
    const chunk = [98, 97];
    const action = '0';
    const shift = 1;
    const actual = caesarRot(chunk, action, shift);
    expect(actual).toEqual([97, 122]);
  });

  it('should return  the same ass passed', () => {
    const input = [124, 125];
    const action = '0';
    const shift = 1;
    const actual = caesarRot(input, action, shift);
    expect(actual).toEqual([124, 125]);
  });

  it('should return  "zy" if  passed "ay"', () => {
    const chunk = [65, 78];
    const action = '0';
    const shift = 8;
    const actual = caesarRot(chunk, action, shift);
    expect(actual).toEqual([83, 70]);
  });
  it('should return  "ZY" if  passed "AY"', () => {
    const chunk = [83, 78];
    const action = '1';
    const shift = 8;
    const actual = caesarRot(chunk, action, shift);
    expect(actual).toEqual([65, 86]);
  });

  // it('should return  "A" if  passed "z" ', () => {
  //   const input = '--output';
  //   const actual = checkArgs(input);
  //   expect(actual).toBe('output');
  // });
});
