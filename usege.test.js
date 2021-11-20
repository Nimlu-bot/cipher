import { expect } from '@jest/globals';
import { execSync, exec } from 'child_process';
import fs from 'fs';

describe('app', () => {
  let output;

  beforeEach(() => {
    try {
      output = fs.writeFileSync('./output.txt', '', { encoding: 'utf-8' });
    } catch (error) {
      console.log(error);
    }
  });

  it('should pass if config correct', (done) => {
    const cliData = 'node ./app.js -c C1-C1-R0-A ';
    const actual = exec(cliData);
    actual.stdin.setEncoding('utf-8');
    actual.stdin.write('aaaaaaaaaaaaaaaaaa\n');
    actual.stdin.end();
    actual.stdout.on('data', (data) => {
      try {
        console.log(data);
        expect(data.trim()).toEqual('ffffffffffffffffff');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('should pass first scenario described in task 1', () => {
    const cliData =
      'node ./app.js -c C1-C1-R0-A -i ./input.txt -o ./output.txt';
    const actual = execSync(cliData);
    if (actual) {
      output = fs.readFileSync('./output.txt', { encoding: 'utf-8' });
      expect(output).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
    }
  });
  it('should pass second scenario described in task 1', () => {
    const cliData =
      'node ./app.js -c C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt	';
    const actual = execSync(cliData);
    if (actual) {
      output = fs.readFileSync('./output.txt', { encoding: 'utf-8' });
      expect(output).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
    }
  });
  it('should pass third scenario described in task 1', () => {
    const cliData =
      'node ./app.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"';
    const actual = execSync(cliData);
    if (actual) {
      output = fs.readFileSync('./output.txt', { encoding: 'utf-8' });
      expect(output).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
    }
  });
  it('should pass forth scenario described in task 1', () => {
    const cliData =
      'node ./app.js -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"';
    const actual = execSync(cliData);
    if (actual) {
      output = fs.readFileSync('./output.txt', { encoding: 'utf-8' });
      expect(output).toBe('This is secret. Message about "_" symbol!');
    }
  });
});
