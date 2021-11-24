export const errorHandler = (error) => {
  if (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(-1);
  }
};
