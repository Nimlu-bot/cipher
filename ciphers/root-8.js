const LOWRCASE_START = 97;
const UPPERCASE_START = 65;
const ALPHABET_LENGTH = 26;

const root8 = (chunk, action) => {
  const isEncoded = action === '1';
  if (isEncoded) {
    return chunk.map((el) => {
      const rez = el + 8;

      if (el >= UPPERCASE_START && el <= UPPERCASE_START + ALPHABET_LENGTH) {
        return rez >= UPPERCASE_START + ALPHABET_LENGTH
          ? rez - ALPHABET_LENGTH
          : rez;
      }

      if (el >= LOWRCASE_START && el <= LOWRCASE_START + ALPHABET_LENGTH) {
        return rez >= LOWRCASE_START + ALPHABET_LENGTH
          ? rez - ALPHABET_LENGTH
          : rez;
      }

      return el;
    });
  }
  return chunk.map((el) => {
    const rez = el - 8;

    if (el >= UPPERCASE_START && el <= UPPERCASE_START + ALPHABET_LENGTH) {
      return rez < UPPERCASE_START ? rez + ALPHABET_LENGTH : rez;
    }

    if (el >= LOWRCASE_START && el <= LOWRCASE_START + ALPHABET_LENGTH) {
      return rez < LOWRCASE_START ? rez + ALPHABET_LENGTH : rez;
    }

    return el;
  });
};

export { root8 };
