import { expect, jest } from '@jest/globals';
import { errorHandler } from './errorHandler';

const checkFile = jest.fn();
checkFile.mockImplementation(async () => undefined);
checkFile.mockReturnValue(undefined);

describe('ErrorHandler', () => {
  it('should call console error and process exit if error', () => {
    const myError = new Error('error');
    console.error = jest.fn();
    console.error.mockImplementation((message) => `ERROR: ${message}`);
    process.exit = jest.fn();
    errorHandler(myError);
    expect(console.error).toBeCalledTimes(1);
    expect(process.exit).toBeCalledTimes(1);
  });
  it('should return undefined if no error received	', () => {
    expect(errorHandler()).toBeUndefined();
  });
});
