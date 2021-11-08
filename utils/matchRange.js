const LOWRCASE_START = 97;
const UPPERCASE_START = 65;
const ALPHABET_LENGTH = 26;

export const matchDecode = (el, rez) => {
  if (el >= UPPERCASE_START && el <= UPPERCASE_START + ALPHABET_LENGTH) {
    return rez < UPPERCASE_START ? rez + ALPHABET_LENGTH : rez;
  }

  if (el >= LOWRCASE_START && el <= LOWRCASE_START + ALPHABET_LENGTH) {
    return rez < LOWRCASE_START ? rez + ALPHABET_LENGTH : rez;
  }
  return undefined;
};

export const matchEncode = (el, rez) => {
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
  return undefined;
};

export const matchAtbash = (el) => {
  if (el >= LOWRCASE_START && el <= LOWRCASE_START + ALPHABET_LENGTH) {
    return LOWRCASE_START * 2 + ALPHABET_LENGTH - el - 1;
  }
  if (el >= UPPERCASE_START && el <= UPPERCASE_START + ALPHABET_LENGTH) {
    return UPPERCASE_START * 2 + ALPHABET_LENGTH - el - 1;
  }
  return undefined;
};
