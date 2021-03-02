const allSettled = async (iterable) => {
  const wrappedPromises = [];
  for (const item of iterable) {
    wrappedPromises.push(
      Promise.resolve(item)
        .then((result) => ({ status: 'fulfilled', value: result }))
        .catch((error) => ({ status: 'rejected', reason: error })),
    );
  }
  return Promise.all(wrappedPromises);
};

export { allSettled };
