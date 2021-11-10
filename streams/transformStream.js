import { MyError } from '../utils/customError.js';
import { CaesarTransform } from './caesarTransform.js';
import { AtbashTransform } from './atbashTransform.js';
import { Rot8Transform } from './rot8Transform.js';

const typeCaesar = 'C';
const typeAtbash = 'A';
const typeRot8 = 'R';

export const transformSteam = (action) => {
  const [type, direction] = action.split('');
  if (type === typeAtbash) return new AtbashTransform();

  if (type === typeCaesar) return new CaesarTransform(direction);

  if (type === typeRot8) return new Rot8Transform(direction);

  throw new MyError('Unexpected action');
};
