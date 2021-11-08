import { matchDecode, matchEncode } from '../utils/matchRange.js';

const caesarRoot = (chunk, action, shift) => {
  const isEncoded = action === '1';

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

export { caesarRoot };
