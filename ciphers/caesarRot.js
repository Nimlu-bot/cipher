import { matchDecode, matchEncode } from '../utils/matchRange.js';

const ENCODE = '1';
const caesarRot = (chunk, action, shift) => {
  const isEncoded = action === ENCODE;

  if (isEncoded) {
    return chunk.map((el) => {
      const rez = el + shift;

      return matchEncode(el, rez) || el;
    });
  }
  return chunk.map((el) => {
    const rez = el - shift;

    return matchDecode(el, rez) || el;
  });
};

export { caesarRot };
