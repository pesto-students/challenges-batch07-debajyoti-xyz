const deepCopyObject = (objToCopy) => {
  if (!objToCopy) {
    return objToCopy;
  }
  if (Array.isArray(objToCopy)) {
    return objToCopy.map(deepCopyObject);
  }
  if (typeof objToCopy === 'object') {
    const shallowCloned = { ...objToCopy };
    // don't need for-in-gaurd
    // eslint-disable-next-line
    for (const key in shallowCloned) {
      shallowCloned[key] = deepCopyObject(shallowCloned[key]);
    }
    return shallowCloned;
  }
  return objToCopy;
};

export { deepCopyObject };
