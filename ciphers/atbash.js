import { matchAtbash } from '../utils/matchRange.js';

const atbash = (chunk) => chunk.map((el) => matchAtbash(el) || el);

export { atbash };
