export default modules => (module, reducer) => {
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
