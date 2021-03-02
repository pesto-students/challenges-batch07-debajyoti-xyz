const allSettled = async (iterable) => {
  /* eslint-disable no-await-in-loop */
  const results = [];
  for (const item of iterable) {
    try {
      results.push(await item);
    } catch (error) {
      results.push(error);
    }
  }
  /* eslint-enable no-await-in-loop */
};

export { allSettled };
