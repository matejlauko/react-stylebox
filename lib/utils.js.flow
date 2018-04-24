import isNil from 'ramda/src/isNil';

export const get = (obj, path, fallback) => {
  const res = path.split('.').reduce((a, b) => (a && !isNil(a[b]) ? a[b] : null), obj);
  return res === undefined ? fallback : res;
};
