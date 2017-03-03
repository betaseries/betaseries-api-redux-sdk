export default modules => (module) => {
  if (!Object.prototype.hasOwnProperty.call(modules, module)) {
    throw Error(`Module ${module} does not exist.`);
  }

  return modules[module].constants;
};
