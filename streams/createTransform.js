import { transformSteam } from './transformStream.js';

export const createTransform = (config) =>
  config.map((el) => transformSteam(el));
