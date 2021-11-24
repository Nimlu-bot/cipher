import { MyError } from './customError.js';

describe('MyError ', () => {
  it('should have name MyError', () => {
    const error = new MyError();
    expect(error.name).toBe('MyError');
  });
});
