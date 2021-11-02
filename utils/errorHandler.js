export const errorHandler = (error) => {
  if (error) {
    console.error('\x1b[30m\x1b[41m%s\x1b[0m', `ERROR: ${error.message}`);
    process.exit(-1);
  }
};
