/**
 * Checks if a value is a plain object (not null, not an array)
 *
 * @param {*} value
 *
 * @returns {boolean}
 */
const isPlainObject = value =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * Merges an item with its previous version, one level deep for plain objects
 *
 * @param {Object} previous
 * @param {Object} next
 *
 * @returns {Object}
 */
const mergeItem = (previous = {}, next = {}) =>
  Object.keys(next).reduce(
    (merged, key) => ({
      ...merged,
      [key]: isPlainObject(previous[key]) && isPlainObject(next[key])
        ? { ...previous[key], ...next[key] }
        : next[key]
    }),
    { ...previous }
  );

export default (state, items) =>
  Object.keys(items).reduce(
    (merged, id) => ({
      ...merged,
      [id]: mergeItem(state[id], items[id])
    }),
    {}
  );
