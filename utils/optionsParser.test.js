import { expect, jest } from '@jest/globals';
import { parse } from './optionsParser.js';

const checkFile = jest.fn();
checkFile.mockImplementation(async () => undefined);
checkFile.mockReturnValue(undefined);

describe('parse', () => {
  it('should return  valid options', async () => {
    const options = ['-c', 'A-R1-C0'];
    const actual = await parse(options);
    expect(actual).toEqual({ config: ['A', 'R1', 'C0'] });
  });
  it('should return  error if 2 same args   is passet', async () => {
    const options = ['-c', 'A-R1-C0', '-c', 'A-R1-C0'];
    try {
      await parse(options);
    } catch (error) {
      expect(error.message).toBe('to many -config');
    }
  });
  it('should return  error if 2 same args   is passet', async () => {
    const options = ['-c', 'A-R1-C0', '-f'];
    try {
      await parse(options);
    } catch (error) {
      expect(error.message).toBe('invalid option -f');
    }
  });

  it('should return  error if 2 same args   is passet', async () => {
    const options = ['-i', './input.txt'];
    try {
      await parse(options);
    } catch (error) {
      expect(error.message).toBe('option -c or --config is required');
    }
  });
  it('should  call checkFile function if input file is passed ', async () => {
    const options = ['-c', 'A-R1-C0', '-i', './input.txt'];
    try {
      await parse(options);
    } catch (error) {
      expect(checkFile).toBeCalled();
      expect(error.message).toBe('option -c or --config is required');
    }
  });
  it('should  call checkFile function if output and input files are passed ', async () => {
    const options = [
      '-c',
      'A-R1-C0',
      '-i',
      './input.txt',
      '-o',
      './output.txt',
    ];
    try {
      await parse(options);
    } catch (error) {
      expect(checkFile).toBeCalledTimes(2);
      expect(error.message).toBe('option -c or --config is required');
    }
  });
});
