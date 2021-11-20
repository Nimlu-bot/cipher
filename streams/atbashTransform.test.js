import { expect, jest } from '@jest/globals';

import { AtbashTransform } from './atbashTransform.js';

import { atbash } from '../ciphers/atbash.js';

jest.mock('../ciphers/atbash.js', (chunk) => chunk);

describe('AtbashTransform ', () => {
  it('should have method _transform', () => {
    const transform = new AtbashTransform();
    expect(transform._transform).toBeDefined();
  });
  it('should call atbash', () => {
    // const atbash = jest.fn();
    // .mockImplementation(
    //   () =>
    //     //  throw new Error('error');
    //     1
    // );
    const callback = jest.fn();
    const transform = new AtbashTransform();
    transform._transform(1, 1, callback);
    console.log(transform);
    expect(callback).toBeCalled();
  });
});
