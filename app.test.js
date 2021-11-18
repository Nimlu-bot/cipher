import { equal } from 'assert';
import { exec } from 'child_process';

describe('app', () => {
  it('should return an error  if argumant appear twice', (done) => {
    const cliData = 'node ./app.js -c C1-C1-R0-A -i ./input.txt -i ./input.txt';
    const actual = exec(cliData);

    actual.stderr.on('data', (data) => {
      // console.log(` ${data}`);
      try {
        expect(data.trim()).toEqual('ERROR: to many -input');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('should return an error  if argument  -c, --config did not passed ', (done) => {
    const cliData = 'node ./app.js  -i ./input.txt ';
    const actual = exec(cliData);

    actual.stderr.on('data', (data) => {
      // console.log(` ${data}`);
      try {
        expect(data.trim()).toEqual('ERROR: option -c or --config is required');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('should return  an error  if  -i argument with path that does not exist or with no read access ', (done) => {
    const cliData = 'node ./app.js -c C1-C1-R0-A -i ./iiiiiiii ';
    const actual = exec(cliData);

    actual.stderr.on('data', (data) => {
      // console.log(` ${data}`);
      try {
        expect(data.trim()).toEqual(
          'ERROR: ./iiiiiiii - not found or inaccessible'
        );
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('should return  an error  if  -o argument with path that does not exist or with no read access ', (done) => {
    const cliData = 'node ./app.js -c C1-C1-R0-A -i ./input.txt -o ./ooooooo';
    const actual = exec(cliData);

    actual.stderr.on('data', (data) => {
      // console.log(` ${data}`);
      try {
        expect(data.trim()).toEqual(
          'ERROR: ./ooooooo - not found or inaccessible'
        );
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('should return  an error  if user passes incorrent symbols in argument for --config  ', (done) => {
    const cliData =
      'node ./app.js -c C1-C1-R0-A1 -i ./input.txt -o ./output.txt';
    const actual = exec(cliData);

    actual.stderr.on('data', (data) => {
      // console.log(` ${data}`);
      try {
        expect(data.trim()).toEqual('ERROR: incorrect config');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
