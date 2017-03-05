/**
 * @alias module:BetaSeries.getReducer
 * @category static
 *
 * @param {String} module  Module name
 * @param {String} reducer Reducer name
 *
 * @returns {Func}
 */
const getReducer = modules => (module, reducer) => {
  if (!Object.prototype.hasOwnProperty.call(modules, module)) {
    throw Error(`Module ${module} does not exist.`);
  }
  if (!Object.prototype.hasOwnProperty.call(modules[module], 'reducers')) {
    throw Error(`Module ${module} has no reducer.`);
  }
  if (!Object.prototype.hasOwnProperty.call(modules[module].reducers, reducer)) {
    throw Error(`Reducer ${reducer} does not exist.`);
  }

  return modules[module].reducers[reducer];
};

export default getReducer;
