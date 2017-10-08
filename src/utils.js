export const get = (obj, path, fallback) =>
  path.split('.').reduce((a, b) => (a && a[b] ? a[b] : null), obj) || fallback;
