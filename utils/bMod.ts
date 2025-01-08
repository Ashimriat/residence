export default (...src: Array<string | Record<string, boolean>>): Record<string, boolean> => {
  const res: Record<string, boolean> = {};
  for (const val of src) {
    if (typeof val === 'string') {
      res[val] = true;
    } else {
      for (const [key, value] of getEntries(val)) {
        res[key] = value;
      }
    }
  }
  return res;
};